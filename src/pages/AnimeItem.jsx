import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from "../components/Navbar/Navbar"

const AnimeItem = () => {

    const {id} = useParams()
    

    const [anime, setAnime] = React.useState({})
    const [characters, setCharacters] = React.useState({})
    const [showMore, setShowMore] = React.useState(false)

    //destructure anime
    const {
        title, title_english, synopsis, 
        trailer,duration,aired, 
        season, images, rank, 
        score,scored_by, popularity, 
        status, rating, source } = anime

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
            <div className="anime">
                <h1>{anime.title_english}</h1>
                <img src={anime.images?.jpg.large_image_url} alt="" />
                <div className="info">
                    <p><span>Aired:</span><span> {aired?.string}</span></p>
                    <p><span>Rating:</span><span> {rating}</span></p>
                    <p><span>Rank:</span><span> {rank}</span></p>
                    <p><span>Score:</span><span> {score}</span></p>
                    <p><span>Scored By:</span><span> {scored_by}</span></p>
                    <p><span>Popularity:</span><span> {popularity}</span></p>
                    <p><span>Status:</span><span> {status}</span></p>
                    <p><span>Source:</span><span> {source}</span></p>
                    <p><span>Season:</span><span> {season}</span></p>
                    <p><span>Duration:</span><span> {duration}</span></p>
                </div>
            </div>
        </div>
  )
}

export default AnimeItem