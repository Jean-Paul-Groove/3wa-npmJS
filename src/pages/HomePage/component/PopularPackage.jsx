import { useNavigate } from "react-router-dom";
import "./PopularPackage.css";
const PopularPackage = ({ popPackage }) => {
  const navigate = useNavigate();
  function handleGoToPackageDetails() {
    navigate("../package/" + popPackage.name);
  }
  return (
    <div className="popular-package">
      <h3 className="popular-package_title">{popPackage.name}</h3>
      <p className="popular-package_description">{popPackage.description}</p>
      <button
        className="popular-package_button"
        onClick={() => handleGoToPackageDetails()}
      >
        View
      </button>
    </div>
  );
};

export default PopularPackage;
