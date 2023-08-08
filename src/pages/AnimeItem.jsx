import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const AnimeItem = () => {

    const {id} = useParams()

    const [anime, setAnime] = React.useState({})
    const [characters, setCharacters] = React.useState({})
    const [showMore, setShowMore] = React.useState(false)

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
        <div>AnimeItem</div>
  )
}

export default AnimeItem