import { useState } from "react";
import { toast } from "react-toastify";
import CommentPost from "./CommentPost";
import likeBtn from "../Images/thumbs-up-icon-purple.png";

const Comments = ({ blog, user, setBlog }) => {
    const [clicked, setClicked] = useState(false);

    const mappedComments = () => {
        const likeHandler = (value, comment) => {
            const postObj = {
                liked: value,
                user: user.id,
                comment: comment
            }
            const configObj = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(postObj)
            }
            fetch("/api/commentlikes", configObj)
            .then(r => r.json())
            .then(data => {
                console.log(data)
                if(!data.errors){
                    setBlog(data)
                    toast.success("Reaction Successful", {
                        position: "top-center",
                        autoClose: 2500,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        theme: "dark",
                    })
                }else {
                    toast.error("You have already reacted", {
                        position: "top-center",
                        autoClose: 2500,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        theme: "dark",
                    })
                }
            })
        }
        const newArr = [];
        for (let i = 0; i < blog.comments.length; i++) {
            if (i < 5) {
                newArr.push(blog.comments[i]);
            }
        }
        if (blog.comments.length > 5 && !clicked) {
            const test = newArr.map((comment) => {
                console.log(comment);
                return (
                    <div key={comment.id} className="comment-card">
                    <h1>{comment.user.username}</h1>
                    <p>{comment.body}</p>
                    <div className="comment-buttons">
                    <p>{comment.get_like}</p>
                    <div onClick={() => likeHandler(true, comment.id)}>
                        <img
                            className="blog-like"
                            src={likeBtn}
                            alt="like-btn"
                        />
                    </div>
                    <div onClick={() => likeHandler(false, comment.id)}>
                        <img
                            className="blog-dislike"
                            src={likeBtn}
                            alt="like-btn"
                        />
                    </div>
                    <p>{comment.get_dislike}</p>
                    </div>
                    <br/>
                </div>
                );
            });
            return test;
        } else {
            const test = blog.comments.map((comment) => {
                console.log(comment);
                return (
                    <div key={comment.id} className="comment-card">
                        <h1>{comment.user.username}</h1>
                        <p>{comment.body}</p>
                        <div className="comment-buttons">
                        <p>{comment.get_like}</p>
                        <div onClick={() => likeHandler(true, comment.id)}>
                            <img
                                className="blog-like"
                                src={likeBtn}
                                alt="like-btn"
                            />
                        </div>
                        <div onClick={() => likeHandler(false, comment.id)}>
                            <img
                                className="blog-dislike"
                                src={likeBtn}
                                alt="like-btn"
                            />
                        </div>
                        <p>{comment.get_dislike}</p>
                        </div>
                        <br/>
                    </div>
                );
            });
            return test;
        }
    };

    return (
        <div>
            <CommentPost setBlog={setBlog} blog={blog} user={user} />
            {mappedComments()}
            {!clicked && blog.comments.length > 5 ? (
                <button className="load-button" onClick={() => setClicked(true)}>Load More</button>
            ) : null}
        </div>
    );
};

export default Comments;
