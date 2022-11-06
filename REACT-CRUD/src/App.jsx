import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import "bootswatch/dist/litera/bootstrap.css";
import { ToastContainer } from "react-toastify";
import AppRoutes from "./routes/routes";
export default function App() {
  return (
    <>
      <Navbar />
      <AppRoutes />
      <ToastContainer />
    </>
  );
}
