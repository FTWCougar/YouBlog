import { useState } from "react";
import CommentPost from "./CommentPost";

const Comments = ({ blog, user, setBlog }) => {
    const [clicked, setClicked] = useState(false);

    const mappedComments = () => {
        const likeHandler = (e) => {
            console.log(e.target.name)
            const postObj = {
                liked: e.target.value,
                user: user.id,
                comment: e.target.name
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
                }else {
                    alert(`You have already reacted`)
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
                    <div>
                        <h1>{comment.user.username}</h1>
                        <p>{comment.body}</p>
                        <button value={true} name={comment.id} onClick={likeHandler}>
                            Like
                        </button>
                        <p>{comment.get_like}</p>
                        <button value={false} name={comment.id} onClick={likeHandler}>
                            Dislike
                        </button>
                        <p>{comment.get_dislike}</p>
                    </div>
                );
            });
            return test;
        } else {
            const test = blog.comments.map((comment) => {
                console.log(comment);
                return (
                    <div key={comment.id}>
                        <h1>{comment.user.username}</h1>
                        <p>{comment.body}</p>
                        <button value={true} name={comment.id} onClick={likeHandler}>
                            Like
                        </button>
                        <p>{comment.get_like}</p>
                        <button value={false} name={comment.id} onClick={likeHandler}>
                            Dislike
                        </button>
                        <p>{comment.get_dislike}</p>
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
                <button onClick={() => setClicked(true)}>Load More</button>
            ) : null}
        </div>
    );
};

export default Comments;
