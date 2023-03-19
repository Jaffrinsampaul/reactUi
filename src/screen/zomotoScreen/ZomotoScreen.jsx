import React from "react";

// components
import CustomNavbar from "../../component/CustomNavbar/CustomNavbar";
import CustomText from "../../component/CustomText/CustomText";
import CustomImage from "../../component/CustomImage/CustomImage";

// image
import IndianFlag from "../../assets/images/indianFlag.png";

const ZomotoScreen = () => {
  return (
    <div>
      <div className="bg-zomotoBg w-full h-[70vh] flex flex-col">
        <div className="w-[90%] h-[20%] flex justify-end items-start text-white">
          <CustomNavbar
            details={["Add restaurant", "Log in", "Sign up"]}
            styles={
              "flex items-start h-full w-[50%] justify-around text-[20px] pt-6"
            }
          />
        </div>
        <div className="h-[70%] w-full flex flex-col justify-center">
          <CustomText text={"Zomoto"} textStyle={"text-white text-[70px]"} />
          <CustomText
            text={"Find the best restaurants, cafés"}
            textStyle={"text-white text-[50px]"}
          />
          <CustomText
            text={"and bars in India"}
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

        <div className="w-[50%] flex justify-center">
          <CustomText
            text={
              "From swanky upscale restaurants to the cosiest hidden gems serving the most incredible food, Zomato covers it all. Explore menus, and millions of restaurant photos and reviews from users just like you, to find your next great meal."
            }
          />
        </div>
        </div>
      </div>
    </div>
  );
};

export default ZomotoScreen;
