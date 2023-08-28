import "./searchbar.css"
import searchicon from "../../images/searchicon.png";
import { useGlobalContext } from "../../context/global";
import { Link, useNavigate } from 'react-router-dom';

export default function SearchBar() {
  
  const {
    handleSubmit, 
    search,
    searchAnime,
    handleChange ,
    } = useGlobalContext()

    const navigate = useNavigate()

    const handleEnterKeyPress = async (event) => {
      if (event.key === 'Enter') {
          navigate('/searchresults');
          handleSubmit(event)
      }
    };

  return (
    <div className="search">
      <input type="text" className="search-input" placeholder="Search for animes..." value={search} onChange={handleChange} onKeyDown={handleEnterKeyPress}/>
      <button type= "submit" onClick={handleSubmit} className="search-button"><Link to='/searchresults'><img src={searchicon} alt="" /></Link></button>
    </div>
  );
}