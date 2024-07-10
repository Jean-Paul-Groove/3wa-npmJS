import { useNavigate } from "react-router-dom";
import "./ResultCard.css";

const ResultCard = (props) => {
  const { result } = props;
  let tags = result.package?.keywords;
  if (tags && tags.length > 4) {
    tags = tags.slice(0, 3);
    tags.push("...");
  }
  const navigate = useNavigate();
  const handleViewPackage = () => {
    navigate("../package/" + result.package.name);
  };
  return (
    <div className="resultCard">
      <div className="resultCard_info">
        <h3 className="resultCard_info_title">{result.package.name}</h3>
        <p className="resultCard_info_desc">{result.package.description}</p>
        <div className="resultCard_info_tag-container">
          {tags &&
            tags.map((keyword) => (
              <div className="resultCard_info_tag" key={keyword}>
                {keyword}
              </div>
            ))}
        </div>
      </div>
      <button className="resultCard_button" onClick={() => handleViewPackage()}>
        View
      </button>
    </div>
  );
};

export default ResultCard;
