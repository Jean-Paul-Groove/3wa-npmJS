import { useEffect, useState } from "react";
import PopularPackage from "./component/PopularPackage";
import "./HomePage.css";
const HomePage = () => {
  const [popularPackages, setPopularPackages] = useState([]);
  const fetchPopularPackages = async () => {
    try {
      const packagesArray = [];
      const reactResult = await fetch(`https://registry.npmjs.com/react`);
      const reactData = await reactResult.json();
      packagesArray.push(reactData);
      const tsResult = await fetch(`https://registry.npmjs.com/typescript`);
      const tsData = await tsResult.json();
      packagesArray.push(tsData);
      setPopularPackages(packagesArray);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchPopularPackages();
  }, []);
  return (
    <main className="homepage">
      <h1>The NPM Registry</h1>
      <p>
        The package manager for javaScript. Publish and install javaScript
        packages, manage dependencies and more.
      </p>
      <div className="homepage_package-grid">
        {popularPackages.map((popPackage, index) => (
          <PopularPackage key={"package-" + index} popPackage={popPackage} />
        ))}
      </div>
    </main>
  );
};

export default HomePage;
