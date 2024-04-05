import React, { useState } from "react";
import Slider from "../../components/Slider";
import { InputLabel, Select, MenuItem, FormControl } from "@mui/material";
import Button from "/src/components/Button";
import { useDispatch } from "react-redux";
import { addCategory } from "../../redux/filterSlice";
import Categories from "../../data/categories.json";

const Category = () => {
  const [category, setCategory] = useState("all");
  const dispatch = useDispatch();

  function handleChange(e) {
    setCategory(e.target.value);
    dispatch(addCategory(e.target.value));
  }

  return (
    <div className="flex gap-[32px] items-center justify-between">
      <FormControl fullWidth>
        <InputLabel id="plant-category">Categories</InputLabel>
        <Select
          labelId="plant-category"
          id="plant-category"
          value={category}
          label="category"
          onChange={handleChange}
          className="w-[190px]"
          size="small"
          sx={{
            borderRadius: "13px",
            minHeight: "32px",
            "& .MuiSelect-select": {
              minHeight: "32px",
              display: "flex",
              alignItems: "center",
            },
          }}
        >
          {Categories.map((category, index) => (
            <MenuItem key={index} value={category.value}>
              {category.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
export default Category;
