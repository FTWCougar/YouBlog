import { useState } from "react";

const Comments = ({ blog }) => {
    const [clicked, setClicked] = useState(false);

    const newArr = [];
    for (let i = 0; i < blog.comments.length; i++) {
        if (i < 5) {
            newArr.push(blog.comments[i]);
        }
    }
    const mappedComments = () => {
        if (blog.comments.length > 5 && !clicked) {
            const test = newArr.map((comment) => {
                console.log(comment);
                return (
                    <div>
                        <h1>{comment.user.username}</h1>
                        <p>{comment.body}</p>
                    </div>
                );
            });
            return test;
        } else {
            const test = blog.comments.map((comment) => {
                console.log(comment);
                return (
                    <div>
                        <h1>{comment.user.username}</h1>
                        <p>{comment.body}</p>
                    </div>
                );
            });
            return test;
        }
    };

    return (
        <div>
            {mappedComments()}
            {!clicked ? <button onClick={() => setClicked(!clicked)}>Load More</button> : null}
        </div>
    );
};

export default Comments;
