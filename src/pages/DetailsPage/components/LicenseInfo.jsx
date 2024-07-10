import "./LicenseInfo.css";
const LicenseInfo = ({ license }) => {
  return (
    <div>
      <h3 className="licenseInfo_title">License</h3>
      <p className="licenseInfo_license">{license}</p>
    </div>
  );
};

export default LicenseInfo;
