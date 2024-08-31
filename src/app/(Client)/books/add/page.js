"use client"

import React, { useState } from "react";



const page = () => {
    const [formData, setFormData] = useState({})

    const handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        setFormData((formData) => ({ ...formData, [key]: value }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const res = fetch("http://localhost:3000/api/books", {
            method: "POST",
            headers: {
                Accept: "application/json",
            },
            body: JSON.stringify(formData)
        })
        console.log(res);

    }
    console.log(formData);
    return (
        <section style={{ maxWidth: "75%", margin: " 50px auto", padding: "30px", border: "1px solid black", borderRadius: "4px" }}>
            <h1 className="text-primary">Add New Book</h1>
            <form onSubmit={handleSubmit}>

                <div className="input-group mb-4 mt-4">
                    <span className="input-group-text" id="basic-addon1">
                        Book Title
                    </span>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Book Title"
                        aria-label="BookTitle"
                        name="title"
                        aria-describedby="basic-addon1"
                        onChange={handleChange}
                    />
                </div>
                <div className="input-group mb-4 mt-4">
                    <span className="input-group-text" id="basic-addon1">
                        Author Name
                    </span>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Author Name"
                        aria-label="AuthorName"
                        name="author"
                        aria-describedby="basic-addon1"
                        onChange={handleChange}
                    />
                </div>
                <div className="input-group mb-4 mt-4">
                    <input
                        type="file"
                        className="form-control"
                        aria-label="CoverImage"
                        name="coverImage"
                        aria-describedby="basic-addon1"
                        onChange={handleChange}
                    />
                    <span className="input-group-text" id="basic-addon1">
                        Cover Image
                    </span>
                </div>

                <div className="input-group mb-4 mt-4">
                    <span className="input-group-text">Price</span>
                    <input
                        type="text"
                        className="form-control"
                        name="price"
                        aria-label="Amount (to the nearest dollar)"
                        onChange={handleChange}
                    />
                    <span className="input-group-text"> $</span>
                </div>
                <div className="input-group mb-4 mt-4">
                    <button className="btn btn-outline-primary d-block mx-auto" style={{ width: "50%" }}>Submit</button>
                </div>

            </form>
        </section>
    );
};

export default page;
