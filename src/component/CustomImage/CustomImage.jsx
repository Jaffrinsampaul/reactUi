import React from "react";
const CustomImage = ({ image, height, width, alt, style }) => {
  return (
    <img src={image} alt={alt} height={height} width={width} style={style}/>
  );
};

export default CustomImage;
