import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comments from "./Comments";

const ShowBlog = () => {
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

    return (
        <div>
            <h2>{blog.user.username}</h2>
            <img src={blog.img} alt={blog.title}/>
            <h1>{blog.title}</h1>
            <p>{blog.body}</p>
            <hr/>
            <h1>Comments</h1>
            <Comments blog={blog}/>
        </div>
    );
};

export default ShowBlog;
