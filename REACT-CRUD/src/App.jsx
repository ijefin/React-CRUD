import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Home from "./views/Home";
import "bootswatch/dist/litera/bootstrap.css";

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
}
