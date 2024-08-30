import React from 'react'
import { MongoClient } from 'mongodb'
import Image from 'next/image'


const BooksData = async () => {
    const mongoClient = new MongoClient("mongodb://localhost:27017")

    const client = await mongoClient.connect()
    const db = client.db("Next-Touch")

    const books = await db.collection("Books").find({}).toArray()
    console.log(books);

    return (
        <section className='container '>
            <h1 className='text-center mt-5'>Got This Data From MongoDB</h1>
            <h3 className='text-center mt-2 text-body-secondary'>Next + Mongo</h3>
            <div className='row'>
                {
                    books && books.map(book => (
                        <div key={book._id} className='col-lg-4 col-md-6 col-sm-12'>
                            <div className="card mt-2 mb-2" >
                                <div className="card-body">
                                    <h5 className="card-title">{book.title}</h5>
                                    <h6 className="card-subtitle mb-2 text-body-secondary">{book.author}</h6>
                                    <div  style={{position: "relative", height: "280px" , overflow: "hidden", paddingBottom: "12px"}}>
                                        <Image
                                            loading='lazy'
                                            src={book.coverImage}
                                            layout="responsive"
                                            width={100}
                                            height={10}
                                            alt={book.title} />
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <span className='text-success text-bold'> Price: {book.price} $</span>
                                        <span className='text-danger text-bold'> Rating: {book.rating}</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default BooksData