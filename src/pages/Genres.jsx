import React from 'react'
import { useGlobalContext } from '../context/global'
import Navbar from '../components/Navbar/Navbar'
import { Link } from 'react-router-dom'
import "../styles/genres.css";
import Card from '../components/Card/Card';
import action from "../images/genres/action.png"
import fantasy from "../images/genres/fantasy.png"
import girl from "../images/genres/girl.png"
import boy from "../images/genres/boy.png"
import award from "../images/genres/award.png"
import sports from "../images/genres/sports.png"
import supernatural from "../images/genres/supernatural.png"
import suspense from "../images/genres/suspense.png"
import horror from "../images/genres/horror.png"
import mystery from "../images/genres/mystery.png"
import slice from "../images/genres/slice.png"
import scifi from "../images/genres/scifi.png"
import heart from "../images/genres/heart.png"
import drama from "../images/genres/drama.png"
import comedy from "../images/genres/comedy.png"
import avant from "../images/genres/avant.png"
import adventure from "../images/genres/adventure.png"
import gourmet from "../images/genres/gourmet.png"
import PrevButton from "../components/PrevButton/PrevButton"

const Genres = () => {

    const genreImages = {
        1: action,
        24: scifi,
        10: fantasy,
        26: girl,
        28: boy,
        46: award,
        30: sports,
        37: supernatural,
        41: suspense,
        14: horror,
        7: mystery,
        36: slice,
        22: heart,
        8: drama,
        4: comedy,
        5: avant,
        2: adventure,
        47: gourmet
      };
      
    
    const {getGenres, genres, isSearch} = useGlobalContext()

    React.useEffect(() => {
        getGenres();
    }, [])
    
    const conditionalRender = () => {
        if(!isSearch){
          return genres.map((genre) => {
            return <Link to={genre.url} key={genre.mal_id} target='_blank'>
                <Card source={genreImages[genre.mal_id]} text={genre.name}></Card>
            </Link> 
                   
          })
        }
      }

    return (
        <div>
            <Navbar></Navbar>
            <div className="genres">
            <div className='genres-title'>
              <PrevButton></PrevButton>
              <h1>Genres</h1>
            </div>
                <div className='genre-cards'>{conditionalRender()}</div>
            </div>
        </div>
    )
}

export default Genres