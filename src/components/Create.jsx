import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("Ekomobong");
  const [body, setBody] = useState("");
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const blog = { title, body, author };

    setIsPending(true);

 fetch('http://localhost:8080/blogs', {
    method:'POST',
    headers:{"Content-type": "application/json"},
    body: JSON.stringify(blog)
 }).then(() => {
    console.log('New Blog Added');
    setIsPending(false);
 })
    
  };

  return (
    <div className="create">
      <h2>Add a New Blog Post!</h2>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label>Blog Body</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />

        <label>Author</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="Ekomobong">Ekomobong</option>
          <option value="Lawrence">Lawrence</option>
          <option value="Etimbuk">Etimbuk</option>
          <option value="Rutherford">Rutherford</option>
          <option value="GuestAuthor">Guest Author</option>
        </select>

        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Adding Blog...</button>}
      </form>
      
    </div>
  );
};

export default Create;
