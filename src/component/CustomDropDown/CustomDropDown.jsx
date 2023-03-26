import { Menu, MenuItem, Paper } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { forwardRef } from "react";
import CustomImage from "../CustomImage/CustomImage";
import CustomText from "../CustomText/CustomText";

const CustomDropDown = forwardRef(
  ({ visible, menuItem, close, style, isPaper }, ref) => {
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
            <Paper sx={{ width: 850 }}>
              <MenuContent menuItem={menuItem} style={style} />
            </Paper>
          ) : (
            <MenuContent menuItem={menuItem} style={style} />
          )}
        </Menu>
    );
  }
);

const MenuContent = ({ menuItem, style }) => {
  return (
    <div className="flex flex-wrap w-[100%]">
      {menuItem.map((elm) => {
        return (
          <MenuItem style={{ width: "20%", height: "40px" }}>
            {typeof elm === "object" ? (
              <div className="flex w-[full] items-center">
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
