import { FC, useContext, memo, useMemo, useState } from "react";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import PromoCode from "./PromoCode";
import { Link } from "react-router-dom";

interface Props {
  convertToMoney: (price: number) => string;
}

const TotalCart: FC<Props> = ({ convertToMoney }) => {
  const [code, setCode] = useState({
    code: "",
    value: 0,
    type: "",
  });

  const products = useSelector((state: RootState) => state.cart.products);

  const totalPrice = useMemo(() => {
    return (
      products?.reduce((total, product) => {
        return total + product.price * product.quantity;
      }, 0) ?? 0
    );
  }, [products]);

  const discountPrice = useMemo(() => {
    const price = () => {
      if (code.type === "percent") {
        return (totalPrice * code.value) / 100;
      } else if (code.type === "money") {
        return totalPrice - code.value < 0 ? totalPrice : code.value;
      } else {
        return 0;
      }
    };
    return price();
  }, [totalPrice, code]);

  const finalPrice = useMemo(() => {
    return totalPrice - discountPrice;
  }, [totalPrice, discountPrice]);

  return (
    <div className="col-lg-4">
      <div className="card">
        <div className="card-body">
          <dl className="dlist-align">
            <dt>Total price:</dt>
            <dd className="text-right ml-3">{totalPrice}</dd>
          </dl>
          <dl className="dlist-align">
            <dt>Discount:</dt>
            <dd className="text-right text-danger ml-3">
              - {convertToMoney(discountPrice)}
            </dd>
          </dl>
          <dl className="dlist-align">
            <dt>Total:</dt>
            <dd className="text-right text-dark b ml-3">
              <strong>{convertToMoney(finalPrice)}</strong>
            </dd>
          </dl>
          <hr />
          <PromoCode code={code} setCode={setCode} />
          <hr />
          <Link to="/" className="btn btn-primary">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default memo(TotalCart);
