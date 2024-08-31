import { notFound } from 'next/navigation';
import React from 'react';
import { ObjectId } from 'mongodb';
import clientPromise from '@/app/lib/mongodb';

const SingleBook = async ({ params }) => {
  try {
    const client = await clientPromise;
    const db = client.db("Next-Touch");

    const book = await db.collection("Books").findOne({ _id: new ObjectId(params._id) });

    if (!book) {
      throw new Error("Not Found");
    }

    return (
      <div>
        <p>{book._id}</p>
        <h1>{book.title}</h1>
      </div>
    );

  } catch (error) {
    notFound();
  }
};

export default SingleBook;
