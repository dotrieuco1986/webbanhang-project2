import React from "react";
import {
  Button,
  Card,
  Col,
  Container,
  FormSelect,
  ListGroup,
  Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addPromoCode, removePromoCode } from "../redux/PromoCodeSlice";
import { RootState } from "../redux/store";

const PromoCode = () => {
  const promoCode = useSelector((state: RootState) => state.promoCode);
  const dispatch = useDispatch();
  const [code, setCode] = React.useState({
    code: "",
    value: 0,
    type: "percent",
  });

  const handleChangeCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget;
    setCode({ ...code, [name]: value });
  };
  const handleSelectCode = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.currentTarget;
    setCode({ ...code, type: value });
  };

  const handleAddCode = () => {
    dispatch(addPromoCode(code));
  };
  const handleRemoveCode = (code: string) => () => {
    dispatch(removePromoCode(code));
  };

  return (
    <Container className="pt-5">
      <Card>
        <Card.Header>Promo code manage</Card.Header>
        <Card.Body>
          <Row>
            <Col xs={5}>
              <Card>
                <Card.Header>Add code</Card.Header>
                <Card.Body>
                  <div className="form-group px-3">
                    <label>Code:</label>
                    <input
                      name="code"
                      value={code.code}
                      onChange={handleChangeCode}
                      type="text"
                      className="form-control w-75 float-right"
                    />
                  </div>
                  <div className="form-group px-3">
                    <label>Discount:</label>
                    <input
                      name="value"
                      value={code.value}
                      onChange={handleChangeCode}
                      type="number"
                      className="form-control w-75 float-right"
                    />
                  </div>
                  <div className="form-group px-3">
                    <label>Discount:</label>
                    <FormSelect
                      name="type"
                      value={code.type}
                      onChange={handleSelectCode}
                      className="form-control w-75 float-right"
                    >
                      <option value="percent">Percent</option>
                      <option value="money">Money</option>
                    </FormSelect>
                  </div>
                  <Button
                    onClick={handleAddCode}
                    variant="primary"
                    className="float-right px-3 mx-3"
                    size="sm"
                  >
                    Add
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={7}>
              <Card>
                <Card.Body>
                  <ListGroup variant="flush">
                    {promoCode.promoCode.map((item, index) => (
                      <ListGroup.Item key={index} className="fw-bold">
                        Code: <span className="text-danger"> {item.code} </span>
                        - Discount:{" "}
                        <span className="text-primary">
                          {item.value}
                          {item.type === "percent" || item.type === ""
                            ? "%"
                            : "$"}
                        </span>
                        <Button
                          onClick={handleRemoveCode(item.code)}
                          variant="danger"
                          className="float-right"
                          size="sm"
                        >
                          Remove
                        </Button>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PromoCode;
