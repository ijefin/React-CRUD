import React from "react";
import LogoutIcon from "@mui/icons-material/Logout";

const LogoutButton = () => {
  return (
    <>
      <a className="btn btn-danger low-radius">
        Sair <LogoutIcon />
      </a>
    </>
  );
};

export default LogoutButton;
