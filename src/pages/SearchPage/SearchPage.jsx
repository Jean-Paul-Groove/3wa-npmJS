import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ResultCard from "./component/ResultCard";
import "./SearchPage.css";
const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const [term] = useState(searchParams.get("term"));
  const [searchResults, setSearchResults] = useState([]);
  async function fetchResults(searchTerm) {
    try {
      const result = await fetch(
        `https://registry.npmjs.com/-/v1/search?text=${searchTerm}&size=4`
      );
      const data = await result.json();
      if (data.objects) {
        setSearchResults(data.objects);
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchResults(term);
  }, [term]);
  return (
    <ul className="search-list">
      {searchResults.map((result, index) => (
        <ResultCard key={"result-" + index} result={result} />
      ))}
    </ul>
  );
};

export default SearchPage;
