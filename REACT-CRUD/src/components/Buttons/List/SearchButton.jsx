import "../NewProductButton/NewProductButton.css";
import AddIcon from "@mui/icons-material/Add";
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";
import { Link } from "react-router-dom";
const SearchButton = () => {
  return (
    <>
      <Link to="/consulta-produto">
        <button
          type="button"
          id="new-prod-button"
          className="btn btn-warning m-2"
        >
          <span className="fw-bold">
            <span id="button-text">
              Consulta <ContentPasteSearchIcon />
            </span>
          </span>
        </button>
      </Link>
    </>
  );
};

export default SearchButton;
