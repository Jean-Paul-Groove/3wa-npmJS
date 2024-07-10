import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  const [term, setTerm] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (term.length > 0) {
      navigate("/search?term=" + term);
    }
  };
  const handleNavigateHome = () => {
    navigate("/");
  };
  return (
    <nav className="navbar">
      <h1 className="navbar_title" onClick={() => handleNavigateHome()}>
        NPM Registry
      </h1>
      <form className="navbar_form" onSubmit={handleSubmit}>
        {" "}
        🔍
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </form>
    </nav>
  );
};

export default Navbar;
