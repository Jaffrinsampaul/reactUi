import React from "react";
import CustomNavbar from "../../component/CustomNavbar/CustomNavbar";

import zomotoBg from "../../assets/images/zomotoBg.jpg";

const ZomotoScreen = () => {
  return (
    <div>
      <div className="">
        <p>zomoto screen</p>
        <div className="w-[90%] h-[10vh] bg-slate-500 flex justify-end ">
          <CustomNavbar
            details={["Add restaurant", "Log in", "Sign up"]}
            styles={"flex items-center h-full w-[50%] justify-around"}
          />
        </div>
      </div>
    </div>
  );
};

export default ZomotoScreen;
