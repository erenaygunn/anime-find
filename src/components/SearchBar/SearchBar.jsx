import "./searchbar.css"
import search from "../../images/1.png";


export default function SearchBar() {
  return (
    <div className="search">
      <input type="text" className="search-input" placeholder="Search for series..."/>
      <button className="search-button"><img src={search} alt="" /></button>
    </div>
  );
}