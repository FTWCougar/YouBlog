
import BlogCard from "./BlogCard";

const HomePage = ({ user, navigate}) => {

    return <div className="home-page">{user ? <BlogCard navigate={navigate}/> : null}</div>;
};
export default HomePage;
