import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const fetchBlogs = async () => {
    const blogs = await fetch("/api/blogs");
    return blogs.json();
};
const fetchUser = async () => {
    const user = await fetch("/api/me");
    return user.json();
};

const deleteUserBlog = async (blog) =>
    fetch(`/api/blogs/${blog.id}`, {
        method: "DELETE",
    });
const deleteSavedBlog = async (blog) =>
    fetch(`/api/userkeeps/${blog.id}`, {
        method: "DELETE",
    });

const UserBlog = ({ user, setUser }) => {
    const [blogs, setBlogs] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchBlogs().then(setBlogs);
    }, []);

    const mappedTitles = blogs
        .filter((blog) => blog.user.id === user.id)
        .map((blog) => {
            const handleUserDelete = (e) => {
                e.stopPropagation();
                deleteUserBlog(blog).then(() => {
                    fetchBlogs()
                        .then(setBlogs)
                        .then(() =>
                            toast.success("Blog Deleted", {
                                position: "top-center",
                                autoClose: 2500,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                theme: "dark",
                            })
                        );
                });
            };
            return (
                <div
                    onClick={() => navigate(`/blogs/${blog.id}`)}
                    key={blog.id}
                    className="user-card"
                >
                    <button
                        className="delete-button"
                        onClick={handleUserDelete}
                    >
                        Delete Blog
                    </button>
                    <h1 className="blog-title">{blog.title}</h1>
                    <h4 className="blog-username">{blog.user.username}</h4>
                </div>
            );
        });
    const mappedSaves = user.userkeeps.map((userkeep) => {
        const handleSavedDelete = (e) => {
            e.stopPropagation();
            deleteSavedBlog(userkeep).then(() => {
                fetchUser()
                    .then(setUser)
                    .then(() =>
                        toast.success("Save Removed", {
                            position: "top-center",
                            autoClose: 2500,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            theme: "dark",
                        })
                    );
            });
        };
        return (
            <div
                onClick={() => navigate(`/blogs/${userkeep.blog.id}`)}
                key={userkeep.blog.id}
                className="user-card"
            >
                <button className="delete-button" onClick={handleSavedDelete}>
                    Remove Save
                </button>
                <h1 className="blog-title">{userkeep.blog.title}</h1>
                <h4 className="blog-username">{userkeep.bloguser.username}</h4>
            </div>
        );
    });

    return (
        <div className="profile-blogs">
            <div className="user-blog">
                <h1>Your Blogs</h1>
                {mappedTitles}
            </div>
            <div className="user-saves">
                <h1>Saved</h1>
                {mappedSaves}
            </div>
        </div>
    );
};
export default UserBlog;
