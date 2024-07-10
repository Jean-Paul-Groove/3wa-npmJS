import "./PackageHeader.css";

const PackageHeader = (props) => {
  const { name, description } = props;
  return (
    <div className="packageHeader">
      {" "}
      <h1 className="packageHeader_title">{name}</h1>
      <p className="packageHeader_description">{description}</p>
    </div>
  );
};

export default PackageHeader;
