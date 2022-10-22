import "./NewProductButton.css";
import AddIcon from "@mui/icons-material/Add";

const NewProductButton = () => {
  return (
    <>
      <button type="button" id="new-prod-button" className="btn btn-success ">
        <span className="fw-bold">
          <span id="button-text">
            Novo <AddIcon />
          </span>
        </span>
      </button>
    </>
  );
};

export default NewProductButton;
