import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import ListProducts from "../components/home/ListProducts";
import ModalProductInfo from "../components/home/ModalProductInfo";
import Product from "../models/Product";
import { setProductSlice } from "../redux/ProductSlice";

const HomePage = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
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
    axios.get("https://jsonblob.com/api/948153349182865408").then((res) => {
      setProducts(res.data);
      dispatch(setProductSlice(products));
    });
  }, [dispatch, products]);

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
