import { SlCalender } from "react-icons/sl";
import { BsPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./SingleCard.css";

const SingleCard = ({
  id,
  title,
  description,
  author_avatar,
  blog_poster,
  written_by,
  created_at
}) => {
  return (
    <div className="card">
      <div className="round-avatar-container">
        <img src={blog_poster} alt="blog-poster" />
      </div>
      <div className="card-header">
        <img src={author_avatar} alt="blog-poster" />
      </div>
      <Link to={`/blogDetail/${id}`}>
        <div className="card-body">
          <h3>{title.length > 40 ? `${title.substring(0, 40)}...` : title}</h3>
          <p>
            {description.length > 30
              ? `${description.substring(0, 100)}...`
              : description}
          </p>
        </div>
      </Link>
      <div className="card-footer">
        <p>
          <BsPersonFill />
          <span>{written_by}</span>
        </p>

        <p>
          <SlCalender />
          <span>{created_at.slice(0, 25)}</span>
        </p>
      </div>
    </div>
  );
};

export default SingleCard;
