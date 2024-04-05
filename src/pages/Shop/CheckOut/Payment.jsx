import {
  Checkbox,
  FormControlLabel as FormControlLabelBase,
  Radio,
  RadioGroup,
} from "@mui/material";
import imgPayment from "../../../../public/images/payment.png";
import OrderTrack from "../OrderTrack/OrderTrack";
import { useState } from "react";
import { styled } from "@mui/material/styles";

const FormControlLabel = styled(FormControlLabelBase)`
  border: 1px solid #eaeaea;
  padding: 5px;
`;

const Payment = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="w-[405px]">
      <h1 className="mb-5">Payment Method</h1>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <FormControlLabel
          value="female"
          control={<Radio />}
          label={<img src={imgPayment} className="w-56 h-6" alt="" />}
        />
        <FormControlLabel
          value="bank"
          control={<Radio />}
          label="Direct bank transfer"
        />
        <FormControlLabel
          value="cash"
          control={<Radio />}
          label="Cash on delivery"
        />
      </RadioGroup>

      <button
        onClick={handleOpen}
        className="bg-primary w-80 text-white py-3 mt-10 rounded"
      >
        Place Order
      </button>
      <OrderTrack open={open} setOpen={setOpen} handleClose={handleClose} />
    </div>
  );
};

export default Payment;
