import React from "react";
import CustomImage from "../CustomImage/CustomImage";
import CustomText from "../CustomText/CustomText";

const CustomCard = ({ details, style }) => {
  return (
    <div className={style.outerDiv}>
      {typeof details.text === "object" ? (
        <div className={style.profileDiv}>
          <CustomImage
            image={details.text.image}
            height={style.profileImage.height}
            width={style.profileImage.width}
            style={style.profileImageStyle}
          />
          <CustomText text={details.text.text} textStyle={style.text} />
        </div>
      ) : (
        details.text && (
          <CustomText text={details.text} textStyle={style.text} />
        )
      )}
      {details.image && (
        <CustomImage
          image={details.image}
          height={style.image.height}
          width={style.image.width}
        />
      )}
    </div>
  );
};

export default CustomCard;
