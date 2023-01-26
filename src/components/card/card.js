import React,{memo} from 'react'
import {CardWrapper} from "./style";

const Card = memo( (props) =>{
  const {cardWidth,cardHeight ,surface ,backface} = props
  // console.log(surface.title ,backface.title)

  return (
    <CardWrapper wid={cardWidth} heit={cardHeight}>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <p className="title">{surface.title !== undefined? surface.title:'' }</p>
          </div>
          <div className="flip-card-back">
            <p className="title">{backface.title !== undefined  ? backface.title:''}</p>
          </div>
        </div>
      </div>
    </CardWrapper>
  )
})

export default Card