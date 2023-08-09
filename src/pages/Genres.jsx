import React from 'react'
import { useGlobalContext } from '../context/global'
import Navbar from '../components/Navbar/Navbar'
import { Link } from 'react-router-dom'

const Genres = () => {

    const {getGenres, genres, isSearch} = useGlobalContext()

    React.useEffect(() => {
        getGenres();
    }, [])
    
    const conditionalRender = () => {
        if(!isSearch){
          return genres.map((genre) => {
            console.log(genre)
            console.log(genre.url)
            return <Link to={`/genre/${genre.mal_id}`} key={genre.mal_id}>
                <p>{genre.name}</p>
            </Link> 
                   
          })
        }
      }

    return (
        <div>
            <Navbar></Navbar>
            <div className="genres">
                {conditionalRender()}
            </div>
        </div>
    )
}

export default Genres