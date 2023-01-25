import React, { useState } from "react";
import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

const CommentPost = ({user, setBlog, blog}) => {
    const [body, setBody] = useState("")
    // const navigate = useNavigate()
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const postObj = {
            body: body,
            user: user.id,
            blog: blog.id
        }

        fetch("/api/comments",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(postObj)
        }).then(r => r.json())
        .then(data => {
            console.log(data)
            setBlog(data)
            toast.success("Comment Posted", {
                position: "top-center",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "dark",
            })
        })
        
    }
  return(
    <div className="comment-form">
        <p>Leave a comment...</p>
        <form>
            <input className="comment-input" value={body} placeholder="Body" onChange={(e) => setBody(e.target.value)}/>
            <br/>
            <br/>
            <button className="comment-post-button" onClick={handleSubmit}>Post</button>
        </form>
    </div>
  )
};

export default CommentPost;
