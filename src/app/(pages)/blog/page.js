import React from 'react'
import Card from './components/Card';

const Blog = async () => {
  const allPosts = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
  const posts = await allPosts.json()
  return (
    <>
     <div>
      {
        posts.map((x) => (
          <Card key={x.id} title={x.title} body={x.body} postID= {x.id}/>
        ))
      }
     </div>
    </>
  )
}

export default Blog