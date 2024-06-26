import { useParams } from "react-router-dom/cjs/react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const BlogDetails = () => {
  const history = useHistory();
  const { id } = useParams();

  const {data: blog, error, isLoading} = useFetch('http://localhost:8080/blogs/' + id);

  const handleDelete = () => {
    fetch('http://localhost:8080/blogs/' + blog.id, {
      method:'DELETE'
    }).then(() => {
      history.push('/')
    })
  }
  return (
    <div className="blog-details">
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
            <div>{blog.body}</div>
            <button onClick={handleDelete}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
