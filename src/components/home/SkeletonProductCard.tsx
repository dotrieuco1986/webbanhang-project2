import { Placeholder } from "react-bootstrap";

const SkeletonProductCard = () => {
  return (
    <div className="col-2 mb-3">
      <div className="card position-relative">
        <img src="https://via.placeholder.com/150x100/ccc/ccc/ccc" alt="..." />
        <div className="card-body">
          <Placeholder as="p" animation="glow">
            <Placeholder xs={12} />
          </Placeholder>
          <Placeholder as="p" animation="glow">
            <Placeholder xs={12} />
          </Placeholder>

          <Placeholder.Button xs={6} bg="danger" className="border-0" />
        </div>
      </div>
    </div>
  );
};
export default SkeletonProductCard;
