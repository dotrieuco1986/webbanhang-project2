import * as React from "react";
import { Route, Routes } from "react-router-dom";

const Home = React.lazy(() => import("../pages/HomePage"));
const Cart = React.lazy(() => import("../pages/CartPage"));
const PromoCode = React.lazy(() => import("../pages/PromoCodePage"));
const Post = React.lazy(() => import("../pages/PostPage"));

const Router = () => {
  return (
    <React.Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="code" element={<PromoCode />} />
        <Route path="post" element={<Post />} />
      </Routes>
    </React.Suspense>
  );
};

export default Router;
