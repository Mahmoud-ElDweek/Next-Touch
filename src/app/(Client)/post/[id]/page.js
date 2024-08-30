"use client"
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const SinglePost = () => {
  const pathname = usePathname()
  const id = pathname.split('/').pop()

  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        const data = await response.json()
        setPost(data)
      } catch (error) {
        console.error("Error fetching post:", error)
      }
    }

    fetchPost()
  }, [id])
  return (
    <>
      {
        post ? (
          <>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </>
        ) : null
      }
    </>
  )
}

export default SinglePost
