import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comments from "./Comments";
import likeBtn from "../Images/thumbs-up-icon-white.png"


const ShowBlog = ({ user }) => {
    const [blog, setBlog] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`/api/blogs/${id}`);
            const data = await response.json();
            setBlog(data);
            console.log(data);
        };

        fetchData();
    }, [id]);
    if (!blog) {
        return <div>Loading....</div>;
    }
    const likeHandler = (value) => {
        console.log(value);
        const postObj = {
            liked: value,
            user: user.id,
            blog: blog.id,
        };
        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(postObj),
        };
        fetch("/api/bloglikes", configObj)
            .then((r) => r.json())
            .then((data) => {
                console.log(data);
                if (!data.errors) {
                    setBlog(data);
                } else {
                    alert(`You have already reacted`);
                }
            });
    };
    const saveHandler = () => {
        const postObj = {
            user: user.id,
            blog: blog.id,
        };
        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(postObj),
        };
        fetch("/api/userkeeps", configObj)
            .then((r) => r.json())
            .then((data) => {
                console.log(data);
            });
    };
    return (
        <div>
            <br />
            <br />
            <div className="blog-div">
                <h2>{blog.user.username}</h2>
                <img src={blog.img} alt={blog.title} />
                <div className="blog-buttons">
                    <div className="blog-reactions">
                        <p>{blog.get_like}</p>
                        <div onClick={() => likeHandler(true)}>
                            <img className='blog-like' src={likeBtn} alt="like-btn"/>
                        </div>
                        <div onClick={() => likeHandler(false)}>
                            <img  className="blog-dislike" src={likeBtn} alt="like-btn"/>
                        </div>
     
                        <p>{blog.get_dislike}</p>
                    </div>
                    <div className="blog-save">
                        <button onClick={saveHandler}>Save</button>
                    </div>
                </div>
                <h1>{blog.title}</h1>
                <p>{blog.body}</p>
            </div>
            <br/>
            <div className="blog-comments">
                <h1>Comments</h1>
                <Comments blog={blog} setBlog={setBlog} user={user} />
            </div>
        </div>
    );
};

export default ShowBlog;
