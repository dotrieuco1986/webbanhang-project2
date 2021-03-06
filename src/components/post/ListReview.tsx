import { Badge, ListGroup, Placeholder } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useEffect } from "react";
import { fetchProduct } from "../../redux/ProductSlice";
import { fetchPost } from "../../redux/PostSlice";

const ListReview = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state: RootState) => state.post.posts);
  const products = useSelector((state: RootState) => state.product.products);
  const removeSpecialChar = (str: string) => str.replace(/[^a-zA-Z]/g, "-");
  const getNameProduct = (id: number) =>
    products?.find((p) => p.id === id)?.title;

  useEffect(() => {
    if (products?.length === 0) {
      dispatch(fetchProduct());
    }
    dispatch(fetchPost());
  }, [posts]);
  return (
    <ListGroup as="ul">
      {posts?.map((post) => (
        <Link
          key={post.id}
          style={{ color: "normal", textDecoration: "none" }}
          to={`${removeSpecialChar(post.category)}/${removeSpecialChar(
            post.title
          )}_${post.id}`}
        >
          {getNameProduct(Number(post.product)) ? (
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">
                  {getNameProduct(Number(post.product)) + " - " + post.title}
                </div>
                <div className="fs-sm text-truncate">{post.content}</div>
              </div>
              <Badge>
                {post.category}-{post.id}
              </Badge>
            </ListGroup.Item>
          ) : (
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto" style={{ width: "100%" }}>
                <div className="fw-bold">
                  <Placeholder xs={4} />
                </div>
                <div className="fs-sm text-truncate ">
                  <Placeholder xs={10} />
                </div>
              </div>
              <Badge>
                <Placeholder xs={2} />
              </Badge>
            </ListGroup.Item>
          )}
        </Link>
      ))}
    </ListGroup>
  );
};

export default ListReview;
