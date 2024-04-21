import { Link } from "react-router-dom/cjs/react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h4>Seems like you took a wrong turn there!</h4>
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
