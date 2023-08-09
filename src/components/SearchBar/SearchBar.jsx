import "./searchbar.css"
import searchicon from "../../images/1.png";
import { useGlobalContext } from "../../context/global";
import { Link } from 'react-router-dom';


export default function SearchBar() {
  
  
  const {
    handleSubmit, 
    search, 
    searchAnime,
    handleChange ,
    } = useGlobalContext()

  return (
    <div className="search">
      <input type="text" className="search-input" placeholder="Search for animes..." value={search} onChange={handleChange}/>
      <button type= "submit" onClick={handleSubmit} className="search-button"><Link to='/searchresults'><img src={searchicon} alt="" /></Link></button>
    </div>
  );
}