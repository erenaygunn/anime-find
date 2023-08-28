import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import Navbar from "../components/Navbar/Navbar"
import "../styles/info.css"
import Carousel from 'react-bootstrap/Carousel';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import PrevButton from '../components/PrevButton/PrevButton';

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


    const [key, setKey] = useState('description');
        

    const getAnime = async(anime) => {
        const response = await fetch(`https://api.jikan.moe/v4/anime/${anime}`)
        const data = await response.json()
        setAnime(data.data)
    }

    const getCharacters = async(anime) => {
        const response = await fetch(`https://api.jikan.moe/v4/anime/${anime}/characters?limit=10`)
        const data = await response.json()
        setCharacters(data.data)
    }

    useEffect(() => {
        getAnime(id)
        getCharacters(id)
    }, [])


    return (
        <div className='anime'>
            <Navbar></Navbar>
            <div className='anime-container'>
                <div className='title'>
                    <PrevButton></PrevButton>
                    <h1>{title_english != null ? title_english : title}</h1>
                </div>
                <ul className='info-container'>
                    <li className='jpg'><img src={images?.jpg.large_image_url} alt="" /></li>
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
                    <li className='container'>
                        <Tabs
                        id="tab"
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                        className="mb-3"
                        >
                        <Tab eventKey="description" title="Description">
                            <div className='desc'>
                                <p className='synopsis'>{synopsis}</p>
                            </div>
                        </Tab>
                        <Tab eventKey="characters" title="Characters">
                        <Carousel >
                            {characters?.map((character, index) => {
                                while(index < 11) {
                                    const {role} = character
                                    const {images, name} = character.character
                                    return  <Carousel.Item key={index}>
                                            <img src={images?.jpg.image_url} alt="" />
                                            <Carousel.Caption>
                                                <h3>{name}</h3>
                                                <p>{role}</p>
                                            </Carousel.Caption>
                                            </Carousel.Item>
                                        }
                            
                            })}
                            </Carousel>
                        </Tab>
                        </Tabs>
                    </li>                        
                </ul>                 
            </div>
        </div>
  )
}

export default AnimeItem