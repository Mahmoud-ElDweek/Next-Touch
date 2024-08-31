import BooksData from '@/app/card/BooksData'
import clientPromise from '@/app/lib/mongodb';
import React from 'react'

const Books = async () => {
  const client = await clientPromise;

  const db = client.db("Next-Touch");

  const books = await db.collection("Books").find({}).toArray()

  
  return (
    <>
      <section className='container '>
        <h1 className='text-center mt-5'>Got This Data From MongoDB</h1>
        <h3 className='text-center mt-2 text-body-secondary'>Next + Mongo</h3>
        <div className='row'>
          {
            books && books.map(book => (
              <BooksData
              id={book._id}
              title={book.title}
              author={book.author}
              coverImage={book.coverImage}
              price={book.price}
              rating={book.rating}
              // goToSingleBook={goToSingleBook(book._id)}
              />
            ))
          }
        </div>
      </section>
    </>
  )
}

export default Books