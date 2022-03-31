import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Common/Loading";
import ListProducts from "../components/home/ListProducts";
import ModalProductInfo from "../components/home/ModalProductInfo";
import Product from "../models/Product";
import { fetchProduct } from "../redux/ProductSlice";
import { RootState } from "../redux/store";

const HomePage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.product.products);
  const [product, setProduct] = useState<Product>({
    id: 0,
    title: "",
    price: 0,
    image: "",
    description: "",
    category: "",
    quantity: 0,
  });
  const [isShowModalInfo, setIsShowModalInfo] = useState(false);

  useEffect(() => {
    if (products?.length === 0) {
      dispatch(fetchProduct());
    }
  }, [dispatch]);

  const convertToMoney = (price: number) => {
    return price.toLocaleString("en", {
      style: "currency",
      currency: "USD",
    });
  };

  const handleShowModalInfo = () => {
    setIsShowModalInfo(true);
  };

  const handleCloseModalInfo = () => {
    setIsShowModalInfo(false);
  };
  return (
    <>
      <ListProducts
        products={products}
        setProduct={setProduct}
        convertToMoney={convertToMoney}
        handleShowModalInfo={handleShowModalInfo}
      />
      <ModalProductInfo
        product={product}
        isShowModalInfo={isShowModalInfo}
        convertToMoney={convertToMoney}
        handleCloseModalInfo={handleCloseModalInfo}
      />
    </>
  );
};

export default HomePage;
