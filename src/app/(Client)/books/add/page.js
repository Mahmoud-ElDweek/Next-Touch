"use client";

import React, { useState } from "react";

const Page = () => {
    const [formData, setFormData] = useState({});
    const [file, setFile] = useState(null);

    const handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        setFormData((formData) => ({ ...formData, [key]: value }));
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const form = new FormData();
        for (const key in formData) {
            form.append(key, formData[key]);
        }
        if (file) {
            form.append("coverImage", file);
        }

        try {
            const res = await fetch("/api/books", {
                method: "POST",
                body: form,
            });
            if (res.ok) {
                console.log("Book added successfully");
            } else {
                console.error("Failed to add book");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <section style={{ maxWidth: "75%", margin: "50px auto", padding: "30px", border: "1px solid black", borderRadius: "4px" }}>
            <h1 className="text-primary">Add New Book</h1>
            <form onSubmit={handleSubmit}>
                <div className="input-group mb-4 mt-4">
                    <span className="input-group-text">Book Title</span>
                    <input
                        type="text"
                        className="form-control"
                        name="title"
                        placeholder="Book Title"
                        aria-label="BookTitle"
                        onChange={handleChange}
                    />
                </div>
                <div className="input-group mb-4 mt-4">
                    <span className="input-group-text">Author Name</span>
                    <input
                        type="text"
                        className="form-control"
                        name="author"
                        placeholder="Author Name"
                        aria-label="AuthorName"
                        onChange={handleChange}
                    />
                </div>
                <div className="input-group mb-4 mt-4">
                    <input
                        type="file"
                        className="form-control"
                        name="coverImage"
                        aria-label="CoverImage"
                        onChange={handleFileChange}
                    />
                    <span className="input-group-text">Cover Image</span>
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
                    <span className="input-group-text">$</span>
                </div>
                <div className="input-group mb-4 mt-4">
                    <button className="btn btn-outline-primary d-block mx-auto" style={{ width: "50%" }}>Submit</button>
                </div>
            </form>
        </section>
    );
};

export default Page;
