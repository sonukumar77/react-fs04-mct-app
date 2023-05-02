import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SingleCard from "../SingleCard/SingleCard";

import "./Home.css";

const Home = () => {
  const { blogs } = useSelector((store) => store);

  return (
    <div className="home-container">
      <div className="button-container">
        {/* <button className="btn" >New Post</button> */}
        <Link to="/createBlog" className="btn">
          New Post
        </Link>
      </div>
      <div className="card-container">
        {blogs.length !== 0 ? (
          blogs.map((element) => {
            return <SingleCard key={element.id} {...element} />;
          })
        ) : (
          <p style={{ color: "red", margin: "4rem", textAlign: "center" }}>
            Sorry , No any Blog Posts are available now!!
          </p>
        )}
      </div>
    </div>
  );
};

export default Home;
