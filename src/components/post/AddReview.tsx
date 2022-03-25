import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  Col,
  Form,
  FormControl,
  FormSelect,
  InputGroup,
  Modal,
  Row,
} from "react-bootstrap";
import { PostContext } from "../../store/PostProvider";
import { ProductsContext } from "../../store/ProductsProvider";
interface Props {
  onHide: () => void;
  isAdd: boolean;
}

const AddReview = ({ onHide, isAdd }: Props) => {
  const { state: stateProduct, dispatch: dispatchProduct } =
    useContext(ProductsContext);
  const { state: statePost, dispatch: dispatchPost } = useContext(PostContext);
  const { products = [] } = stateProduct;

  const [form, setForm] = useState({
    title: "",
    productName: "",
    product: "",
    category: "",
    content: "",
    tags: "",
  });

  useEffect(() => {
    axios.get("https://jsonblob.com/api/948153349182865408").then((res) =>
      dispatchProduct({
        type: "ADD_PRODUCTS",
        payload: res.data,
      })
    );
  }, [dispatchProduct]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatchPost({
      type: "ADD_POST",
      payload: { id: statePost.posts.length + 1, ...form },
    });
    onHide();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.currentTarget;

    const product = products.find((p) => p.id === parseInt(value));
    setForm({
      ...form,
      [name]: value,
      category: product ? product?.category : "",
      productName: product ? product?.title : "",
    });
  };

  return (
    <Modal
      show={isAdd}
      onHide={onHide}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Review Product
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <InputGroup className="mb-3">
            <InputGroup.Text>Title</InputGroup.Text>
            <FormControl
              onChange={handleChange}
              name="title"
              value={form.title}
              type="text"
            />
          </InputGroup>
          <Row className="mb-3">
            <InputGroup className="mb-3" as={Col}>
              <InputGroup.Text>Tag</InputGroup.Text>
              <FormControl
                onChange={handleChange}
                name="tags"
                value={form.tags}
                type="text"
              />
            </InputGroup>
            <InputGroup className="mb-3" as={Col}>
              <InputGroup.Text>Product</InputGroup.Text>
              <FormSelect
                onChange={handleSelect}
                name="product"
                value={form.product}
                placeholder="Select Product"
              >
                {products.length === 0 ? <option>...</option> : null}
                {products.map((product) => (
                  <option key={product.id} value={product.id}>
                    {product.title}
                  </option>
                ))}
              </FormSelect>
            </InputGroup>
            <InputGroup className="mb-3" as={Col}>
              <InputGroup.Text>Category</InputGroup.Text>
              <FormControl
                disabled
                onChange={handleChange}
                name="category"
                value={form.category}
                type="text"
              />
            </InputGroup>
          </Row>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Content</Form.Label>
            <Form.Control
              name="content"
              value={form.content}
              onChange={handleChange}
              as="textarea"
              rows={10}
            />
          </Form.Group>
          <Button className="float-right" type="submit">
            Post
          </Button>
        </Form>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
};

export default AddReview;
