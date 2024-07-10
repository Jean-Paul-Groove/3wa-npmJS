import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PackageHeader from "./components/PackageHeader";
import Maintainers from "./components/Maintainers";
import LicenseInfo from "./components/LicenseInfo";
import PackageHomepage from "./components/PackageHomepage";
import "./DetailsPage.css";

const DetailsPage = () => {
  const [packageInfo, setPackageInfo] = useState({});
  const packageName = useParams().name;
  async function fetchPackage() {
    try {
      if (packageName) {
        const result = await fetch(`https://registry.npmjs.com/${packageName}`);
        const data = await result.json();
        setPackageInfo(data);
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchPackage();
  }, [packageName]);
  return (
    <main className="details">
      <PackageHeader
        name={packageInfo.name}
        description={packageInfo.description}
      />
      {packageInfo.maintainers?.length > 0 && (
        <Maintainers maintainers={packageInfo.maintainers} />
      )}{" "}
      {packageInfo.license && <LicenseInfo license={packageInfo.license} />}
      {packageInfo.homepage && (
        <PackageHomepage homepage={packageInfo.homepage} />
      )}
    </main>
  );
};

export default DetailsPage;
