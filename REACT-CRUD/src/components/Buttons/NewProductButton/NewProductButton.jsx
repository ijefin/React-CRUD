import "./NewProductButton.css";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";

const NewProductButton = () => {
  return (
    <>
      <Link to="/cadastro-produto">
        <button type="button" id="new-prod-button" className="btn btn-success ">
          <span className="fw-bold">
            <span id="button-text">
              Novo <AddIcon />
            </span>
          </span>
        </button>
      </Link>
    </>
  );
};

export default NewProductButton;
