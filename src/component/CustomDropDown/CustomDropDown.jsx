import React,{forwardRef, useEffect} from "react";

// components
import CustomImage from "../CustomImage/CustomImage";
import CustomText from "../CustomText/CustomText";

// packages
import { Menu, MenuItem, Paper } from "@mui/material";

const CustomDropDown = forwardRef(
  ({ visible, menuItem, close, style, selectCountry, isPaper ,}, ref) => {
    return (
        <Menu
          id="basic-menu"
          anchorEl={ref}
          open={visible}
          onClose={close}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {isPaper ? (
            <Paper sx={{ width: style.paperWidth }}>
              <MenuContent menuItem={menuItem} style={style} selectCountry={selectCountry}/>
            </Paper>
          ) : (
            <MenuContent menuItem={menuItem} style={style} selectCountry={selectCountry}/>
          )}
        </Menu>
    );
  }
);

const MenuContent = ({ menuItem, style ,selectCountry}) => {
  return (
    <div className= {style.menuContent}>
      {menuItem.map((elm) => {
        return (
          <MenuItem style={style.menuItem} onClick={()=>selectCountry(elm)}>
            {typeof elm === "object" ? (
              <div className={style.menuItemContent}  >
                <CustomImage
                  image={elm.image}
                  height={style.height}
                  width={style.width}
                />
                <CustomText text={elm.text} textStyle={style.text} />
              </div>
            ) : (
              <CustomText text={elm} />
            )}
          </MenuItem>
        );
      })}
    </div>
  );
};

export default CustomDropDown;
