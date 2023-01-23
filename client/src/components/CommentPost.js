import React, { useState } from "react";
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
        })
        
    }
  return(
    <div>
        <form>
            <input value={body} placeholder="Body" onChange={(e) => setBody(e.target.value)}/>
            <br/>
            <button onClick={handleSubmit}>Post</button>
        </form>
    </div>
  )
};

export default CommentPost;
