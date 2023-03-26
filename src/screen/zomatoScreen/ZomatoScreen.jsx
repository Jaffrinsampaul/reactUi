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
import { cityName, countries } from "../../utills/zomato/mockData";
import CustomCard from "../../component/CustomCard/CustomCard";
import ZomatoFooter from "../../container/ZomatoFooter/ZomatoFooter";

const ZomatoScreen = () => {
  return (
    <>
      <CustomHead title={"Best Restaturants in India - Zomato"} />
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
            <CustomText
              text={zomato.title}
              textStyle={"text-white text-[70px] font-[helvetica-light]"}
            />
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
            <div className="w-[60%] flex justify-center text-opacity-50 text-black text-[1.3rem] max-w-[90rem] font-[helvetica-light]">
              <CustomText text={zomato.subTitle} />
            </div>
          </div>
        </div>
        <div className="w-[100%] pt-14 flex flex-row justify-center align-middle">
          <div className="w-[75%] flex flex-row flex-wrap gap-7 justify-between ">
            {cityName.map((city) => {
              return (
                <>
                  <CustomCard
                    details={{ text: city, image: rightArrow }}
                    style={{
                      outerDiv: `border border-black border-opacity-10 flex flex-row 
                        justify-between items-center w-[30%] h-[65px] rounded-[10px]
                         p-2 pl-7 pr-7 shadow-sm hover:shadow transition ease-in-out delay-150 font-[helvetica-light] `,
                      image: { width: 10, height: 3 },
                      text: "text-black text-[20px]",
                    }}
                  />
                </>
              );
            })}
          </div>
        </div>

        <div className="pt-10 pb-8 w-full flex flex-col justify-center items-center">
          <div className="w-[75%] flex flex-row justify-start">
            <CustomText
              text={"All Countries"}
              textStyle={"text-[30px] font-semibold"}
            />
          </div>
          <div className="w-[75%] flex flex-row flex-wrap gap-7 justify-between pt-10 ">
            {countries.map((obj) => {
              return (
                <>
                    <CustomCard
                      details={{ text: obj, image: rightArrow }}
                      style={{
                        outerDiv: `border border-black border-opacity-10 flex flex-row 
                        justify-between items-center w-[30%] h-[75px] rounded-[10px]
                         p-2 pl-4 pr-4 shadow-sm hover:shadow transition ease-in-out delay-100`,
                        image: { width: 20, height: 6 },
                        text: "text-black text-[20px] indent-5 font-[helvetica-light]",
                        profileImage: { width: 40, height: 15},
                        profileImageStyle: {borderRadius: "5px"},
                        profileDiv: 'w-[70%]  flex flex'
                      }}
                    />
                </>
              );
            })}
          </div>
        </div>

        <ZomatoFooter/>
      </div>
    </>
  );
};

export default ZomatoScreen;
