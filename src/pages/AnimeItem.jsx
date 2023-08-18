import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from "../components/Navbar/Navbar"
import "./info.css"
import Carousel from 'react-bootstrap/Carousel';

const AnimeItem = () => {

    const {id} = useParams()
    

    const [anime, setAnime] = React.useState({})
    const [characters, setCharacters] = React.useState()
    const [showMore, setShowMore] = React.useState(false)

    //destructure anime
    const {
        title, title_english, synopsis, 
        trailer,duration,aired, 
        season, images, rank, 
        score,scored_by, popularity, 
        status, rating, source, episodes, genres } = anime

        function getGenres() {
            return genres?.map((genre, index) => {
                return index === genres.length - 1 ? genre.name : `${genre.name}, `;
            });
        }
        

    const getAnime = async(anime) => {
        const response = await fetch(`https://api.jikan.moe/v4/anime/${anime}`)
        const data = await response.json()
        setAnime(data.data)
        console.log(data.data)
    }

    const getCharacters = async(anime) => {
        const response = await fetch(`https://api.jikan.moe/v4/anime/${anime}/characters`)
        const data = await response.json()
        setCharacters(data.data)
        console.log(data.data)
    }

    useEffect(() => {
        getAnime(id)
        getCharacters(id)
    }, [])


    return (
        <div>
            <Navbar></Navbar>
            <div className='anime-container'>
                <h1>{title_english}</h1>
                <ul className='info-container'>
                    <li><img src={images?.jpg.large_image_url} alt="" /></li>
                    <li className="info">
                        <p><span>Aired:</span><span> {aired?.string}</span></p>
                        <p><span>Rating:</span><span> {rating}</span></p>
                        <p><span>Episodes:</span><span> {episodes}</span></p>
                        <p><span>Score:</span><span> {score}</span></p>
                        <p><span>Scored By:</span><span> {scored_by != null ? scored_by : 0} users</span></p>
                        <p><span>Genres:</span><span> {getGenres()}</span></p>
                        <p><span>Status:</span><span> {status}</span></p>
                        <p><span>Source:</span><span> {source}</span></p>
                        <p><span>Alternate title:</span><span> {title}</span></p>
                        <p><span>Duration:</span><span> {duration}</span></p>
                    </li>
                    <ul>
                        <li className='description'>
                            <h5>Description:</h5>
                            <p className='synopsis'>{synopsis}</p>
                        </li>
                        <li className='chars'>
                        <Carousel>
                            {characters?.map((character, index) => {
                            const {role} = character
                            const {images, name} = character.character
                            return  <Carousel.Item>
                                        <img src={images?.jpg.image_url} alt="" />
                                        <Carousel.Caption>
                                            <h3>{name}</h3>
                                            <p>{role}</p>
                                        </Carousel.Caption>
                                        </Carousel.Item>
                                    
                            })}
                            </Carousel>
                        </li>
                    </ul>                        
                </ul>                 
            </div>
        </div>
  )
}

export default AnimeItem