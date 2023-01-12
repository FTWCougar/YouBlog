
import BlogCard from "./BlogCard";

const HomePage = ({ user }) => {

    return <div className="home-page">{user ? <BlogCard /> : null}</div>;
};
export default HomePage;
