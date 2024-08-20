"use client"

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const CardFooter = ( {postID} ) => {
  const [counter, setCounter] = useState(0)
  const router = useRouter()

  const increase = () => {
    setCounter(counter + 1)
  }

  const decrease = () => {
    setCounter(counter - 1)
  }

  const goToSinglePost = (id) => {
    router.push(`/post/${id}`)
  }

  return (
    <>
      <div className='card-footer'>
        <div onClick={() => goToSinglePost(postID)}>
          <p>More Details</p>
        </div>
        <div>
          <button onClick={increase}> + </button>
          <span>{counter}</span>
          <button onClick={decrease}> - </button>
        </div>
      </div>
    </>
  )
}

export default CardFooter
