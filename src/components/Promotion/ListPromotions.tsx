import { Button, Card, ListGroup } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { fetchPromotion, removePromoCode } from "../../redux/PromoCodeSlice";
import { useEffect } from "react";
interface Props {
  showRemoveButton: boolean;
}
const ListPromotions = ({ showRemoveButton }: Props) => {
  const dispatch = useDispatch();
  const promoCode = useSelector((state: RootState) => state.promoCode);

  useEffect(() => {
    if (promoCode.promoCode.length === 0) {
      dispatch(fetchPromotion());
    }
  }, [dispatch]);

  const handleRemoveCode = (code: string) => () => {
    dispatch(removePromoCode(code));
  };

  return (
    <Card>
      <Card.Body>
        <ListGroup variant="flush">
          {promoCode.promoCode.map((item, index) => (
            <ListGroup.Item key={index} className="fw-bold">
              Code: <span className="text-danger"> {item.code} </span>-
              Discount:{" "}
              <span className="text-primary">
                {item.value}
                {item.type === "percent" || item.type === "" ? "%" : "$"}
              </span>
              {showRemoveButton ? (
                <Button
                  variant="danger"
                  className="float-right"
                  size="sm"
                  onClick={handleRemoveCode(item.code)}
                >
                  Remove
                </Button>
              ) : (
                ""
              )}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default ListPromotions;
