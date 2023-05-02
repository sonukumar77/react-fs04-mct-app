import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import "./BlogDetail.css";

const BlogDetail = () => {
  const { id } = useParams();

  const { blogs } = useSelector((store) => store);
  const filterData = blogs.find((element) => element.id === id);

  return (
    <div className="blogDetail-container">
      <div className="blog-poster">
        <img src={filterData?.blog_poster} alt="blog-poster" />
      </div>
      <div className="button-container">
        <button className="btn back-btn">
          <Link to="/">&lt;&lt; Back</Link>
        </button>
      </div>
      <div className="post-detail">
        <h1>{filterData?.title}</h1>
        <p>{filterData?.description}</p>
      </div>
    </div>
  );
};

export default BlogDetail;
