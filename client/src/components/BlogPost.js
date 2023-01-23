import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BlogPost = ({user}) => {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [img, setImg] = useState("")
    const navigate = useNavigate()
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const postObj = {
            title: title,
            body: body,
            img: img,
            user: user.id
        }

        fetch("/api/blogs",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(postObj)
        }).then(r => r.json())
        .then(data => {
            console.log(data)
            navigate("/")
        })
        
    }
  return(
    <div>
        <br/>
        <br/>
        <form>
            <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title"/>
            <br/>
            <br/>
            <input value={img} onChange={(e) => setImg(e.target.value)} placeholder="Img"/>
            <br/>
            <br/>
            <textarea value={body} placeholder="Body" onChange={(e) => setBody(e.target.value)}/>
            <br/>
            <button onClick={handleSubmit}>Post</button>
        </form>
    </div>
  )
};

export default BlogPost;
