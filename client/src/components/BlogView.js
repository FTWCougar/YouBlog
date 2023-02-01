import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comments from "./Comments";
import likeBtn from "../Images/thumbs-up-icon-purple.png";
import saveBtn from "../Images/bookmark-icon-gold.png";
import { toast } from "react-toastify";

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
                    toast.success("Reaction Successful", {
                        position: "top-center",
                        autoClose: 2500,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        theme: "dark",
                    });
                } else {
                    toast.error("You have already reacted", {
                        position: "top-center",
                        autoClose: 2500,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        theme: "dark",
                    });
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
                if (!data.errors) {
                    toast.success("Blog Saved", {
                        position: "top-center",
                        autoClose: 2500,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        theme: "dark",
                    });
                } else {
                    if (data.errors[0] === "User has already been taken") {
                        data.errors[0] = "You already saved this blog";
                    }
                    toast.error(data.errors[0], {
                        position: "top-center",
                        autoClose: 2500,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        theme: "dark",
                    });
                }
            });
    };

    return (
        <div>
            <br />
            <br />
            <div className="blog-div">
                <h1>{blog.user.username}</h1>
                <h4>{blog.title}</h4>
                <img className="blog-img" src={blog.img} alt={blog.title} />
                <div className="blog-buttons">
                    <div className="blog-reactions">
                        <p>{blog.get_like}</p>
                        <div onClick={() => likeHandler(true)}>
                            <img
                                className="blog-like"
                                src={likeBtn}
                                alt="like-btn"
                            />
                        </div>
                        <div onClick={() => likeHandler(false)}>
                            <img
                                className="blog-dislike"
                                src={likeBtn}
                                alt="like-btn"
                            />
                        </div>

                        <p>{blog.get_dislike}</p>
                    </div>
                    <div onClick={saveHandler}>
                        <img
                            className="blog-save"
                            src={saveBtn}
                            alt="save-btn"
                        />
                    </div>
                </div>
                <p>{blog.body}</p>
            </div>
            <br />
            <div className="blog-comments">
                <h1>Comments</h1>
                <Comments blog={blog} setBlog={setBlog} user={user} />
            </div>
        </div>
    );
};

export default ShowBlog;
