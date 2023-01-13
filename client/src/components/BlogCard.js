import { useEffect, useState } from "react";


const BlogCard = ({navigate, setBlogId}) => {
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
        const handleClick = () => {
            setBlogId(blog.id)
            navigate(`/blogs/${blog.id}`)
        }
        return (
            <div onClick={handleClick} key={blog.id} className="blog-card">
                <h2 className="blog-username">{blog.user.username}</h2>
                <h1 className="blog-title">{blog.title}</h1>
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
