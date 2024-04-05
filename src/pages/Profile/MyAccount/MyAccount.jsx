import UserIcon from "../../../../public/images/user2.svg?react";
import AddressIcon from "../../../../public/images/Location.svg?react";
import CartIcon from "../../../../public/images/shoppingC.svg?react";
import HeartIcon from "../../../../public/images/heart.svg?react";
import ReportsIcon from "../../../../public/images/reports.svg?react";
import DownloadIcon from "../../../../public/images/Download.svg?react";
import SupportIcon from "../../../../public/images/support.svg?react";
import LogoutIcon from "../../../../public/images/mylogout.svg?react";
import { Button } from "@mui/material";

const Tabs = [
  {
    title: "Account Details",
    icon: <UserIcon className="w-[20px] fill-textSecondary" />,
    extraWrapperClasses: "",
    useStroke: false,
    useFill: true,
  },
  {
    title: "Address",
    icon: <AddressIcon className="w-[20px] fill-textSecondary" />,
    extraWrapperClasses: "",
    useStroke: false,
    useFill: true,
  },
  {
    title: "Orders",
    icon: <CartIcon className="w-[20px]" />,
    extraWrapperClasses: "shoppingCartIconContainer",
    useStroke: false,
    useFill: true,
  },
  {
    title: "Wishlist",
    icon: (
      <HeartIcon className="w-[20px] fill-textSecondary stroke-textSecondary stroke-[.5]" />
    ),
    extraWrapperClasses: "",
    useStroke: true,
    useFill: true,
  },
  {
    title: "Reports",
    icon: <ReportsIcon className="w-[20px] stroke-textSecondary" />,
    extraWrapperClasses: "",
    useStroke: true,
    useFill: false,
  },
  {
    title: "Downloads",
    icon: <DownloadIcon className="w-[20px] stroke-textSecondary" />,
    extraWrapperClasses: "",
    useStroke: true,
    useFill: false,
  },
  {
    title: "Support",
    icon: <SupportIcon className="w-[20px] stroke-textSecondary" />,
    extraWrapperClasses: "",
    useStroke: true,
    useFill: false,
  },
];
const MyAccount = ({ selectedTab, setSelectedTab }) => {
  return (
    <div className="w-[310px] bg-softBackground rounded-lg py-[17px]">
      <h2 className="pl-6 mb-6 text-lg font-bold">My Account</h2>
      {Tabs.map((tab, index) => (
        <div
          className={`flex gap-3 cursor-pointer items-center py-[9px] pl-4 text-textSecondary text-[15px] border-l-[5px] border-transparent ${
            tab.extraWrapperClasses
          } ${
            selectedTab == index
              ? `bg-white border-l-primary ${
                  tab.useStroke && "svg-green-use-stroke"
                }  ${tab.useFill && "svg-green-use-fill"} ${
                  tab.useStroke && tab.useFill && "svg-green-use-both"
                }`
              : ""
          }`}
          onClick={() => setSelectedTab(index)}
          key={index}
        >
          {tab.icon}
          <p className={`${selectedTab == index ? "text-primary" : ""}`}>
            {tab.title}
          </p>
        </div>
      ))}

      <div className="border-t">
        <Button
          style={{
            color: "#46A358",
            textTransform: "capitalize",
            fontWeight: 700,
            fontSize: "15px",
            marginTop: "10px",
            display: "flex",
            gap: "8px",
            marginLeft: "16px",
          }}
        >
          <LogoutIcon className="w-[20px] stroke-textSecondary" />
          Loguot
        </Button>
      </div>
    </div>
  );
};
export default MyAccount;
