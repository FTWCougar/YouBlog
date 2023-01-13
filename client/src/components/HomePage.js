
import BlogCard from "./BlogCard";

const HomePage = ({ user, navigate, setBlogId}) => {

    return <div className="home-page">{user ? <BlogCard setBlogId={setBlogId} navigate={navigate}/> : null}</div>;
};
export default HomePage;
