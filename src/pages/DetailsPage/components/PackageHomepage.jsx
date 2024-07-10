import "./PackageHomepage.css";

const PackageHomepage = ({ homepage }) => {
  return (
    <div>
      <h3>Homepage</h3>
      <div className="homepage_container">
        <a href={homepage}>{homepage}</a>
      </div>
    </div>
  );
};

export default PackageHomepage;
