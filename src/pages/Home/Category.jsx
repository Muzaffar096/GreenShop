import Button from "../../components/Button";
import plantTypes from "../../data/plantTypes.json";
import Slider from "../../components/Slider";
import sale from "../../../public/images/sale.png";

const Category = () => {
  return (
    <aside className="md:hidden">
      <div className={`bg-[#FBFBFB] p-[24px] `}>
        <h3 className=" text-[18px] text-[#3d3d3d] font-semibold">Categories</h3>
        <ul className="flex flex-col ml-[12px] mt-[10px]">
          {plantTypes.map(
            (type, i) =>
              i < 9 && (
                <li
                  key={type.id}
                  className="flex items-center justify-between hover:text-[#46A358] hover:font-bold transition leading-3 font-normal py-[10px]"
                >
                  <p>{type.type}</p>
                  <p>({type.count})</p>
                </li>
              )
          )}
        </ul>
        <h3 className=" text-[18px] text-[#3d3d3d] font-semibold">Price Range</h3>
        <div className=" ml-[12px] mt-[10px] mb-[45px]">
          <Slider></Slider>
          <Button classes="hover:bg-primaryDark px-4 py-1 text-[14px] rounded bg-primary text-white h-max w-max">
            Filter
          </Button>
        </div>
        <h3 className=" text-[18px] text-[#3d3d3d] font-semibold">Size</h3>
        <ul className="ml-[12px]">
          {plantTypes.map(
            (type, i) =>
              i > 8 && (
                <li
                  key={type.id}
                  className="flex items-center justify-between   hover:text-[#46A358] hover:font-bold transition leading-2 font-normal py-[10px]"
                >
                  <p>{type.type}</p>
                  <p>({type.count})</p>
                </li>
              )
          )}
        </ul>
      </div>
      <div className="">
        <img width={320} src={sale} alt="sale" />
      </div>
    </aside>
  );
};

export default Category;
