import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { addPostSlice } from "../../redux/PostSlice";
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
interface Props {
  onHide: () => void;
  isAdd: boolean;
}

const AddReview = ({ onHide, isAdd }: Props) => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.product.products);

  const [form, setForm] = useState({
    id: 0,
    productName: "",
    product: "",
    title: "",
    category: "",
    content: "",
    tags: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const max = products?.reduce(function (prev, current) {
      return prev.id > current.id ? prev : current;
    });
    setForm({
      ...form,
      id: max ? max.id : 0,
    });
    dispatch(addPostSlice(form));
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

    const product = products?.find((p) => p.id === parseInt(value));
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
                {products?.length === 0 ? <option>...</option> : null}
                {products?.map((product) => (
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
    </Modal>
  );
};

export default AddReview;
