import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Protected = ({ children }) => {
  const { user } = useSelector((store) => store);

  if (user?.isLoggedIn) {
    return children;
  } else {
    <Navigate to="/" />;
  }
};

export default Protected;
