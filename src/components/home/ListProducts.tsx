import { Dispatch, SetStateAction } from "react";
import Product from "../../models/Product";
import SkeletonProductCard from "./SkeletonProductCard";
import { MockProductData } from "../../mockData/Data";
interface Props {
  products?: Product[];
  setProduct: Dispatch<SetStateAction<Product>>;
  convertToMoney: (price: number) => string;
  handleShowModalInfo: () => void;
}

const ListProducts = ({
  products,
  setProduct,
  convertToMoney,
  handleShowModalInfo,
}: Props) => {
  const handleClick = (product: Product) => {
    setProduct(product);
    handleShowModalInfo();
  };
  return (
    <div className="row pt-5 m-3">
      {products && products.length ? (
        products.map((product) => (
          <div
            className="col-lg-3 col-md-4 col-sm-6 col-xl-2 mb-3"
            key={product.id}
          >
            <div className="card">
              <img
                src={product.image}
                height="200px"
                className="rounded"
                alt="..."
              />
              <div className="card-body">
                <p className="card-title text-truncate">{product.title}</p>
                <p className="text-right text-danger ">
                  {convertToMoney(product.price)}
                </p>
                <button
                  className="btn btn-danger"
                  onClick={function () {
                    handleClick(product);
                  }}
                >
                  Xem chi tiết
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <>
          {MockProductData.map((item) => (
            <SkeletonProductCard key={item} />
          ))}
        </>
      )}
    </div>
  );
};

export default ListProducts;
