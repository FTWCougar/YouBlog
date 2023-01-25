import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const BlogPost = ({ user }) => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [img, setImg] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const postObj = {
            title: title,
            body: body,
            img: img,
            user: user.id,
        };

        fetch("/api/blogs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(postObj),
        })
            .then((r) => r.json())
            .then((data) => {
                console.log(data);
                navigate("/");
                toast.success("Blog Posted", {
                    position: "top-center",
                    autoClose: 2500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "dark",
                })
            });
    };
    return (
        <div className="post-container">
            <form className="post-form">
            <h1>Create A Blog Here</h1>
                <input
                    className="post-input"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                />

                <input
                    className="post-input"
                    value={img}
                    onChange={(e) => setImg(e.target.value)}
                    placeholder="Img"
                />

                <textarea
                    className="post-textarea"
                    value={body}
                    placeholder="Body"
                    onChange={(e) => setBody(e.target.value)}
                />

                <button className="post-button" onClick={handleSubmit}>
                    Post
                </button>
            </form>
        </div>
    );
};

export default BlogPost;
