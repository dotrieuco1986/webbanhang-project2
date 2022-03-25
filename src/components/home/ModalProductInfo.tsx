import { Modal, Alert, ModalBody, Button } from "react-bootstrap";
import Product from "../../models/Product";
import { useDispatch } from "react-redux";
import { addCartSlice } from "../../redux/CartSlice";

interface Props {
  isShowModalInfo: boolean;
  handleCloseModalInfo: () => void;
  convertToMoney: (price: number) => string;
  product: Product;
}

const ModalProductInfo: React.FC<Props> = ({
  product,
  handleCloseModalInfo,
  isShowModalInfo,
  convertToMoney,
}) => {
  const dispatch = useDispatch();
  return (
    <Modal
      show={isShowModalInfo}
      onHide={handleCloseModalInfo}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <ModalBody className="row">
        <div className="col-6">
          <img
            src={product.image}
            alt="preview product"
            height="500px"
            width="500px"
          />
        </div>
        <div className="col-6 d-flex flex-column">
          <h4>{product.title}</h4>
          <Alert variant="secondary" className="h3 text-danger">
            {convertToMoney(product.price)}
          </Alert>
          <p>Mô tả:</p>
          <p className="text-break">{product.description}</p>
          <Button
            variant="danger"
            className="mt-auto"
            onClick={() => {
              dispatch(addCartSlice(product));
            }}
          >
            Add to cart
          </Button>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default ModalProductInfo;
