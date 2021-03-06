import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import "../../styles/app.css";
import GroupRounded from "@material-ui/icons/GroupRounded";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux";
import { closeChatMode } from "../../redux/slice/dashboardSlice";
import { exitRoom } from "../../redux/slice/roomSlice";
const Header: React.FC<{}> = () => {
  const dispatch = useDispatch();
  const { name, ws, userList } = useSelector(
    (state: RootState) => state.roomInfo
  );
  const { userId } = useSelector((state: RootState) => state.userInfo);

  const quitRoom = () => {
    ws.emit("quitRoom", { userId }, ({ msg }: any) => {
      if (msg === "success") {
        console.log("close socket");
        ws.close();
      }
      dispatch(exitRoom());
      dispatch(closeChatMode());
    });
  };
  return (
    <AppBar position="static" color="default" className="h-24 py-4">
      <Toolbar className=" flex item-center">
        <IconButton
          onClick={quitRoom}
          className="flex md:hidden"
          style={{ outline: "none" }}
        >
          <ArrowBackIosIcon style={{ height: 30, width: 30 }} />
        </IconButton>
        <GroupRounded
          style={{ height: 50, width: 50 }}
          className="bg-black text-white rounded-full p-2"
        />
        <div className=" flex flex-col">
          <span className="text-2xl mx-2">{name}</span>
          <div className=" flex flex-row">
            <span className="mx-2 text-gray-500">Users: </span>
            {userList.map(({ username = "" }: any) => {
              return <span className="mx-1 text-gray-500">{username}</span>;
            })}
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
