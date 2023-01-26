import { useEffect, useState } from "react";


const BlogCard = ({navigate}) => {
    const [blogs, setBlogs] = useState([])
     useEffect(() => {
         fetch("/api/blogs")
             .then((resp) => resp.json())
             .then((data) => {
                 setBlogs(data)
                 console.log(data)
             });
     }, []);

     const mappedTitles = blogs.map(blog => {
        return (
            <div onClick={() => navigate(`/blogs/${blog.id}`)} key={blog.id} className="blog-card">
                <h1 className="blog-title">{blog.title}</h1>
                <h4 className="blog-username">{blog.user.username}</h4>
            </div>
        )
     })

    return (
    <div className="blogs">
        {mappedTitles}
    </div>
    )
};
export default BlogCard;
