import React, { useState, useCallback } from "react";
import "../styles/app.css";
import { ButtonGroup, Button, Link } from "@material-ui/core";
import Register from "./register";
import Login from "./login";
const Index = () => {
  const [type, setType] = useState<string>("register");
  const renderPage: React.FC<{}> = () => {
    switch (type) {
      case "register":
        return <Register />;
      case "login":
        return <Login />;
      default:
        return <Register />;
    }
  };
  console.log(process.env);
  return (
    <div className="h-screen grid grid-flow-row grid-cols-2 grid-rows-6">
      <div
        className="col-span-1 row-span-6 flex items-center justify-center"
        style={{
          backgroundImage: `url(${require("../images/indexBackground.jpg")})`,
        }}
      >
        <span className="text-6xl font-bold text-gray-400">Get Started</span>
      </div>
      <div className="row-span-1  col-span-1 flex items-start justify-end">
        <ButtonGroup
          color="primary"
          aria-label="outlined primary button group"
          className="mt-4 mx-4"
        >
          <Button
            className="w-40 h-16 "
            onClick={() => {
              setType("register");
            }}
            variant={type == "register" ? "contained" : "outlined"}
          >
            Register
          </Button>
          <Button
            className="w-40 h-16 "
            onClick={() => {
              setType("login");
            }}
            variant={type == "login" ? "contained" : "outlined"}
          >
            Login
          </Button>
        </ButtonGroup>
      </div>
      <div className="row-span-4 col-span-1">{renderPage({})}</div>
      <div className="row-span-1 col-span-1 flex items-center justify-center">
        <Link className="text-2xl font-bold text-blue-700">
          Forgot Password?
        </Link>
      </div>
    </div>
  );
};

export default Index;