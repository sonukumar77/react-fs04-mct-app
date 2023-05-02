import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBlog } from "../../redux/action";
import { v4 as uuidv4 } from "uuid";
import "./CreateBlog.css";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const [blogTitle, setBlogTitle] = useState("");
  const [blogDescription, setBlogDescription] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userInfo } = useSelector((store) => store);
  // console.log("storeData", userInfo, blogs, userInfo?.name);

  const handleAddPost = () => {
    // console.log(blogTitle, blogDescription);
    if (blogTitle === "") {
      alert("title is required!");
    } else if (blogDescription === "") {
      alert("blog description is required!");
    } else {
      let blogObj = {
        id: uuidv4(),
        title: blogTitle,
        description: blogDescription,
        author_avatar: "https://picsum.photos/200/300",
        blog_poster: "https://picsum.photos/200/300",
        written_by: userInfo?.name,
        created_at: `${new Date()}`
      };
      dispatch(addBlog(blogObj));
      navigate("/");
    }
  };

  return (
    <div className="create-blog-container">
      <div className="form-container">
        <h1>Recent Blog Post</h1>
        <div className="input-container">
          <input
            type="text"
            placeholder="Title"
            onChange={(e) => setBlogTitle(e.target.value)}
          />
        </div>
        <div className="input-container">
          <textarea
            name="blog-desc"
            id=""
            placeholder="Subject"
            cols="30"
            rows="10"
            onChange={(e) => setBlogDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="input-container">
          <button className="btn" onClick={handleAddPost}>
            Add Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
