import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const UserBlog = ({user}) => {
    const [blogs, setBlogs] = useState([])
    const navigate = useNavigate()

     useEffect(() => {
         fetch("/api/blogs")
             .then((resp) => resp.json())
             .then((data) => {
                 setBlogs(data)
                 console.log(data)
             });
     }, []);

     const mappedTitles = blogs.map(blog => {
        console.log(user)
        if(blog.user.id === user.id){
            return (
                <div onClick={() => navigate(`/blogs/${blog.id}`)} key={blog.id} className="blog-card">
                    <h2 className="blog-username">{blog.user.username}</h2>
                    <h1 className="blog-title">{blog.title}</h1>
                </div>
            )
        }
        return true
     })
     const mappedSaves = user.userkeeps.map(userkeep => {
        console.log(user)
            return (
                <div onClick={() => navigate(`/blogs/${userkeep.blog.id}`)} key={userkeep.blog.id} className="blog-card">
                    <h2 className="blog-username">{userkeep.bloguser.username}</h2>
                    <h1 className="blog-title">{userkeep.blog.title}</h1>
                </div>
            )
        })


    return (
    <div className="blogs">
        <h1>Your Blogs</h1>
        {mappedTitles}
        <h1>Saved</h1>
        {mappedSaves}
    </div>
    )
};
export default UserBlog;
