import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import airing from "../../images/airing.png"

const MyCar = (characters) => {

  console.log(characters)

  return (

    
    <div>
      {characters?.map((character, index) => {
      const {role} = character
      const {images, name} = character.character
      return <Carousel>
                <Carousel.Item>
                  <img src={images?.jpg.image_url} alt="" />
                  <Carousel.Caption>
                    <h3>{name}</h3>
                    <p>{role}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
      })}
        
    </div>
  )
}

export default MyCar