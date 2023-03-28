import React, { useState } from "react";

// components
import CustomText from "../../component/CustomText/CustomText";
import CustomImage from "../../component/CustomImage/CustomImage";
import CustomDropDown from "../../component/CustomDropDown/CustomDropDown";

// image
import Youtube from "../../assets/images/youtube.png";
import Facebook from "../../assets/images/facebook.png";
import Instagram from "../../assets/images/instagram.png";
import Twitter from "../../assets/images/twitter.png";
import LinkedIn from "../../assets/images/linkedIn.jpg";
import rightArrow from "../../assets/images/right-arrow.png";
import World from "../../assets/images/world.png";
import DownloadAppStore from "../../assets/images/downloadAppStore.png";
import DownloadPlayStore from "../../assets/images/downloadPlaystore.png";

// utills
import { countries, LANGUAGES } from "../../utills/zomato/mockData";
import { zomato } from "../../utills/zomato/staticsText";

const ZomatoFooter = () => {
  const [isCountryOpen, setIsCountryOpen] = useState(null);
  const [isLanguageOpen, setIsLanguageOpen] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const anchorCountry = Boolean(isCountryOpen);
  const anchorLanguage = Boolean(isLanguageOpen);

  const SOCIAL_MEDIA = [LinkedIn, Instagram, Twitter, Youtube, Facebook];

  // use to open and close country dropdown
  const isCountry = (event, type) => {
    switch (type) {
      case "open":
        setIsCountryOpen(event.currentTarget);
        break;
      case "close":
        setIsCountryOpen(null);
      default:
        break;
    }
  };

  // select country
  const selectCountry = (selctedContry) => {
    setSelectedCountry(selctedContry);
    setIsCountryOpen(null);
    console.log(selctedContry)
  };

  // select language
  const selectLanguage = (selectedLanguage) => {
    setSelectedLanguage(selectedLanguage);
    setIsLanguageOpen(null);
    console.log("here")
  };

  // use to open and close language dropdown
  function isLanguage(event, type) {
    switch (type) {
      case "open":
        setIsLanguageOpen(event.currentTarget);
        break;
      case "close":
        setIsLanguageOpen(null);
      default:
        break;
    }
  }
  return (
    <div className="h-[58vh]  bg-black bg-opacity-5">
      <div className="h-[25%] flex flex-row justify-center">
        <div className="w-[75%] flex flex-row items-center justify-between">
          <CustomText
            text={"Zomato"}
            textStyle={"text-[35px] font-[helvetica-light]"}
          />
          <div className="flex w-[28%] justify-between  ">
            <div
              onClick={(event) => isCountry(event, "open")}
              className="w-[130px] h-[40px] flex justify-around items-center border rounded-[5px] border-black border-opacity-30"
            >
              <CustomImage
                image={selectedCountry.image}
                height={20}
                width={30}
                style={{ borderRadius: "5px" }}
              />
              <CustomText text={selectedCountry.text} />
              <CustomImage
                image={rightArrow}
                height={10}
                width={10}
                style={{ transform: "rotate(90deg)" }}
              />
            </div>

            <div className="w-[170px] h-[40px] flex justify-around items-center border rounded-[5px] border-black border-opacity-30"
            onClick={(event)=>isLanguage(event, "open")}>
              <CustomImage
                image={World}
                height={10}
                width={20}
                style={{ borderRadius: "5px" }}
              />
              <CustomText text={selectedLanguage} />
              <CustomImage
                image={rightArrow}
                height={10}
                width={10}
                style={{ transform: "rotate(90deg)" }}
              />
            </div>
          </div>
          <CustomDropDown
            ref={isCountryOpen}
            visible={anchorCountry}
            menuItem={countries}
            selectCountry={selectCountry}
            close={(event) => isCountry(event, "close")}
            style={{
              height: 10,
              width: 40,
              text: "pl-3 text-[13px]",
              paperWidth: 850,
              menuContent: "flex flex-wrap w-[100%]",
              menuItem: { width: "20%", height: "40px" },
              menuItemContent: "flex w-[full] items-center",
            }}
            isPaper={true}
          />
          <CustomDropDown
            ref={isLanguageOpen}
            visible={anchorLanguage}
            menuItem={LANGUAGES}
            selectCountry={selectLanguage}
            close={(event) => isLanguage(event, "close")}
            style={{
              text: "pl-3 text-[13px]",
              menuContent: "flex flex-col",
              menuItem: { width: "100%", height: "40px" },
            }}
            isPaper={false}
          />
        </div>
      </div>

      <div className="flex justify-center h-[50%]">
        <div className="w-[75%] h-full flex">
          <div className="w-[30%] h-[90%] flex flex-col justify-evenly items-start  text-opacity-5 ">
            <CustomText text={"ABOUT ZOMATO"} textStyle={"tracking-widest"} />
            {zomato.aboutZomato.map((elm) => (
              <CustomText
                text={elm}
                textStyle={"text-opacity-40 text-black "}
              />
            ))}
          </div>
          <div className="w-[30%] h-[90%] flex flex-col justify-evenly items-start  text-opacity-5">
            <CustomText text={"ZOMAVERSE"} textStyle={"tracking-widest"} />
            {zomato.zomatoVerse.map((elm) => (
              <CustomText text={elm} textStyle={"text-opacity-40 text-black"} />
            ))}
          </div>
          <div className="w-[35%] h-[90%] flex flex-col justify-evenly items-start  text-opacity-5">
            <CustomText
              text={"FOR RESTATURANTS"}
              textStyle={"tracking-widest"}
            />
            {zomato.forRestaturants.map((elm) => (
              <CustomText text={elm} textStyle={"text-opacity-40 text-black"} />
            ))}

            <CustomText
              text={"FOR ENTERPRISES"}
              textStyle={"tracking-widest"}
            />
            {zomato.forEnterprises.map((elm) => (
              <CustomText text={elm} textStyle={"text-opacity-40 text-black"} />
            ))}
          </div>

          <div className="w-[25%] h-[90%] flex flex-col justify-evenly items-start  text-opacity-5">
            <CustomText text={"LEARN MORE"} textStyle={"tracking-widest"} />
            {zomato.learnMore.map((elm) => (
              <CustomText text={elm} textStyle={"text-opacity-40 text-black"} />
            ))}
          </div>

          <div className="w-[30%] h-[90%] flex flex-col justify-evenly items-start  text-opacity-5">
            <CustomText text={"SOCIAL LINKS"} textStyle={"tracking-widest"} />
            <div className="flex w-[50%] justify-evenly">
              {SOCIAL_MEDIA.map((image) => {
                return (
                  <div className="bg-black rounded-[50%] w-[20px] h-[20px] flex items-center justify-center">
                    <CustomImage image={image} height={"50%"} width={"50%"} />
                  </div>
                );
              })}
            </div>
            <div className=" w-[50%] h-[30px] bg-[#213a50] flex justify-center rounded-md">
              <CustomImage image={DownloadAppStore} height={70} width={60} />
            </div>
            <div className=" w-[50%] h-[30px] bg-[#213a50] flex justify-center rounded-md">
              <CustomImage image={DownloadAppStore} height={70} width={60} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-end justify-center h-[5%]">
        <div className=" h-[0px] w-[75%] border border-black border-opacity-10 rounded-sm"></div>
      </div>
      <div className="w-full h-[20%] flex justify-center">
        <div className="flex w-[75%] h-full items-center justify-items-start text-left">
          <CustomText
            text={zomato.teamCondition}
            textStyle={"text-black text-opacity-40"}
          />
        </div>
      </div>
    </div>
  );
};

export default ZomatoFooter;
