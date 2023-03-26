import React from "react";

// components
import CustomNavbar from "../../component/CustomNavbar/CustomNavbar";
import CustomText from "../../component/CustomText/CustomText";
import CustomImage from "../../component/CustomImage/CustomImage";

// image
import IndianFlag from "../../assets/images/indianFlag.png";
import CustomHead from "../../component/CustomHead/CustomHead";
import ZomatoLogo from "../../assets/images/zomato.png";
import ZomatoBanner from "../../assets/images/zomatoBanner.png";
import rightArrow from "../../assets/images/right-arrow.png";


// utils
import { zomato } from "../../utills/zomato/staticsText";

const ZomatoScreen = () => {
  return (
    <>
    <CustomHead title={"Best Restaturants in India - Zomato"}/>
    <div>
      <div className="bg-zomotoBg bg-no-repeat bg-cover w-full h-[70vh] flex flex-col">
        <div className="w-[90%] h-[20%] flex justify-end items-start text-white">
          <CustomNavbar
            details={["Add restaurant", "Log in", "Sign up"]}
            styles={
              "flex items-start h-full w-[30%] justify-around text-[20px] pt-6"
            }
          />
        </div>
        <div className="h-[70%] w-full flex flex-col justify-center">
          <CustomText text={zomato.title} textStyle={"text-white text-[70px]"} />
          <CustomText
            text={zomato.description.firstLine}
            textStyle={"text-white text-[50px]"}
          />
          <CustomText
            text={zomato.description.secondLine}
            textStyle={"text-white text-[50px]"}
          />
        </div>
      </div>
      <div>
        <div className="w-full h-[15vh] flex justify-center items-center">
          <CustomText
            text={"Popular locations in"}
            textStyle={"text-black text-[45px] tracking-wider"}
          />
          <div className="p-1">
            <CustomImage
              image={IndianFlag}
              width={"40px"}
              height={"20px"}
              alt={"Indian flag"}
              style={{ borderRadius: "5px" }}
            />
          </div>
          <CustomText
            text={"India"}
            textStyle={"text-black text-[45px] tracking-wider font-semibold"}
          />
        </div>
        <div className="w-full flex justify-center">

        <div className="w-[60%] flex justify-center text-opacity-50 text-black text-[1.3rem] max-w-[90rem]">
          <CustomText
            text={
             zomato.subTitle
            }
          />
        </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ZomatoScreen;
