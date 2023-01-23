import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comments from "./Comments";

const ShowBlog = ({user}) => {
    const [blog, setBlog] = useState(null)
    const { id } = useParams();

        useEffect(() => {
            const fetchData = async () => {
                const response = await fetch(`/api/blogs/${id}`);
                const data = await response.json();
                setBlog(data);
                console.log(data)
		};

		fetchData();
	}, [id]);
    if (!blog){
        return <div>Loading....</div>
    }
    const likeHandler = (e) => {
        console.log(e.target.name)
        const postObj = {
            liked: e.target.value,
            user: user.id,
            blog: blog.id
        }
        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(postObj)
        }
        fetch("/api/bloglikes", configObj)
        .then(r => r.json())
        .then(data => {
            console.log(data)
            if(!data.errors){
                setBlog(data)
            }else {
                alert(`You have already reacted`)
            }
        })
    }
    const saveHandler = () => {
        const postObj = {
            user: user.id,
            blog: blog.id
        }
        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(postObj)
        } 
        fetch("/api/userkeeps", configObj)
        .then(r => r.json())
        .then(data => {
            console.log(data)
        })
    }
    return (
        <div>
            <h2>{blog.user.username}</h2>
            <img src={blog.img} alt={blog.title}/>
            <br/>
            <button value={true}onClick={likeHandler}>Like</button>
            <p>{blog.get_like}</p>
            <button value={false}onClick={likeHandler}>Dislike</button>
            <p>{blog.get_dislike}</p>
            <button onClick={saveHandler}>Save</button>
            <h1>{blog.title}</h1>
            <p>{blog.body}</p>
            <hr/>
            <h1>Comments</h1>
            <Comments blog={blog} setBlog={setBlog} user={user}/>
        </div>
    );
};

export default ShowBlog;
