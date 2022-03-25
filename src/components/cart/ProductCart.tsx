import React, { FC, memo } from "react";
import Product from "../../models/Product";
import { useDispatch } from "react-redux";
import {
  removeCartSlide,
  changeQuantityCartSlice,
} from "../../redux/CartSlice";

interface Props {
  product: Product;
}
const ProductCart: FC<Props> = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <tr key={product.id}>
      <td>
        <div className="col-6 d-inline">
          <img src={product.image} className="img-sm" width={100} alt="..." />
        </div>
        <div className="col-6 d-inline">{product.title}</div>
      </td>
      <td>
        <input
          type="number"
          min="0"
          className="form-control"
          value={product.quantity}
          onChange={(e) => {
            dispatch(
              changeQuantityCartSlice({
                id: product.id,
                quantity: parseInt(e.target.value),
              })
            );
          }}
        />
      </td>
      <td>
        <div className="price-wrap">
          <var className="price">{product.price}</var>
        </div>
      </td>
      <td className="text-right d-none d-md-block">
        <button
          className="btn btn-danger"
          onClick={() => {
            dispatch(removeCartSlide(product));
          }}
        >
          Xóa
        </button>
      </td>
    </tr>
  );
};

export default memo(ProductCart);
