import React, { SetStateAction, memo } from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
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
  const promoCode = useSelector((state: RootState) => state.promoCode);
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
        className="form-control d-inline w-75"
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
