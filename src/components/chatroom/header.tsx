import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import "../../styles/app.css";
import GroupRounded from "@material-ui/icons/GroupRounded";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
const Header: React.FC<{ switchToMenu: () => void }> = ({ switchToMenu }) => {
  return (
    <AppBar position="static" color="default" className="h-24 py-4">
      <Toolbar className=" flex item-center">
        <IconButton
          onClick={switchToMenu}
          className="flex md:hidden"
          style={{ outline: "none" }}
        >
          <ArrowBackIosIcon style={{ height: 30, width: 30 }} />
        </IconButton>
        <GroupRounded
          style={{ height: 50, width: 50 }}
          className="bg-black text-white rounded-full p-2"
        />
        <span className="text-2xl mx-2">New Group</span>
      </Toolbar>
    </AppBar>
  );
};

export default Header;