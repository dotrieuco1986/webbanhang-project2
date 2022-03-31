import React, { SetStateAction, memo, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchPromotion } from "../../redux/PromoCodeSlice";
import { RootState } from "../../redux/store";

interface Code {
  code: string;
  value: number;
  type: string;
}

const PromoCode = ({
  code,
  setCode,
}: {
  code: Code;
  setCode: React.Dispatch<SetStateAction<Code>>;
}) => {
  const dispatch = useDispatch();
  const promoCode = useSelector((state: RootState) => state.promoCode);

  useEffect(() => {
    if (promoCode.promoCode.length === 0) {
      dispatch(fetchPromotion());
    }
  }, [promoCode]);

  const handleChangeCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const applyCode = () => {
    promoCode.promoCode.forEach((item) => {
      if (item.code.trim().toUpperCase() === input.trim().toUpperCase()) {
        setCode(item);
      }
    });
  };
  const [input, setInput] = React.useState("");
  return (
    <div>
      <label className="font-weight-bold">Promo code:</label>
      <input
        className="form-control d-inline w-50"
        value={input}
        onChange={handleChangeCode}
      />
      <Button className="float-right" onClick={applyCode}>
        Add
      </Button>
    </div>
  );
};

export default memo(PromoCode);
