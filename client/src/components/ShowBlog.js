import { useEffect, useState } from "react";

const ShowBlog = ({ blogId }) => {
    const [blog, setBlog] = useState(null)

    useEffect(() => {
        fetch(`/api/blogs/${blogId}`)
            .then((resp) => resp.json())
            .then((data) => {
                setBlog(data);
                console.log(data);
            });
    }, []);

    return (
        <div>
            <h1>Hello</h1>
        </div>
    );
};

export default ShowBlog;
