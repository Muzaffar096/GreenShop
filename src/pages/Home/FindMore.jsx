import React from "react";
import IconRight from "../../../public/images/iconrigth.svg?react";
import { Button } from "@mui/material";

const FindMore = (props) => {
  const { image, textTitel, textSubtitel } = props;
  return (
    <div className="flex bg-findBg mt-4 justify-between sm:pl-[180px] pl-[260px] pr-9 py-[32px] relative">
      <img
        width={250}
        src={image}
        alt={textTitel}
        className="absolute -left-6 bottom-1"
      />
      <div className="flex flex-col gap-5 items-end">
        <h1 className="text-right text-lg">{textTitel}</h1>
        <p className="text-right text-subtitel text-sm ">{textSubtitel}</p>
        <Button
          image={<IconRight />}
          className="rounded-lg hover:bg-primaryDark text-white"
          variant="contained"
          sx={{
            textTransform: "capitalize",
            display: "flex",
            gap: "3.2px",
          }}
        >
          Find More
          <IconRight />
        </Button>
      </div>
    </div>
  );
};

export default FindMore;
