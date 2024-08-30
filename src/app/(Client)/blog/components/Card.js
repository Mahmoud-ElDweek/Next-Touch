import React from 'react'
import './Card.css'
import CardFooter from './CardFooter'

const Card = ({ title, body, postID }) => {

  return (
    <div className='card' >
      <h4>{title}</h4>
      <p>{body}</p>
      <CardFooter postID={postID} />
    </div>
  )
}

export default Card