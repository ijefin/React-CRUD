import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import "bootswatch/dist/litera/bootstrap.css";
import { ToastContainer } from "react-toastify";
import AppRoutes from "./routes/routes";
import { BrowserRouter as Router } from "react-router-dom";

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <AppRoutes />
        <ToastContainer />
      </Router>
    </>
  );
}
