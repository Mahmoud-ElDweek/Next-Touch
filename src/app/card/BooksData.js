"use client"
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'


const BooksData = ({id,title,author,coverImage,price,rating,goToSingleBook}) => {

    const router = useRouter()
    goToSingleBook = (BookId) => {
        router.push(`/books/${BookId}`)
    }

    return (

        <div key={id} className='col-lg-4 col-md-6 col-sm-12' style={{ textDecoration: "none", cursor: "pointer" }} onClick={() => goToSingleBook(id)}>
            <div className="card mt-2 mb-2" >
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">{author}</h6>
                    <div style={{ position: "relative", height: "280px", overflow: "hidden" }}>
                        <Image
                            loading='lazy'
                            src={coverImage}
                            fill={true}
                            sizes="(max-width: 768px) 100vw, 33vw"
                            alt={title} />
                    </div>
                    <div className='d-flex justify-content-between pt-3'>
                        <span className='text-success text-bold'> Price: {price} $</span>
                        <span className='text-danger text-bold'> Rating: {rating}</span>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default BooksData