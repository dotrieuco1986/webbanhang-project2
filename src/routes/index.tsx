import * as React from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "../components/Common/Loading";

const Home = React.lazy(() => import("../pages/HomePage"));
const Cart = React.lazy(() => import("../pages/CartPage"));
const PromoCode = React.lazy(() => import("../pages/PromoCodePage"));
const Post = React.lazy(() => import("../pages/PostPage"));
const PostDetail = React.lazy(() => import("../pages/PostDetailPage"));

const Router = () => {
  return (
    <React.Suspense fallback={<Loading></Loading>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="code" element={<PromoCode />} />
        <Route path="post" element={<Post />} />
        <Route path="post/:category/:slug" element={<PostDetail />} />
      </Routes>
    </React.Suspense>
  );
};

export default Router;
