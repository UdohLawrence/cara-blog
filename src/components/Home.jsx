import { useState } from "react";

const Home = () => {

    const [blogs, setBlogs] = useState([
            {
                author: "Ekomobong",
                title: "Best of Winters",
                body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, mollitia.",
                id:1
            },
            {
                author: "Lawrence",
                title: "Strand of Lint",
                body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, mollitia.",
                id:2
            }
        ]
    );
    return(
        <div className="home">
            <h2>Home component</h2>
            <div className="articles">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h3>{blog.title}</h3>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
            </div>
        </div>
    );
}

export default Home;