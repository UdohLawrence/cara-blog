import BlogList from "./BlogList";
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
            <BlogList blogs={blogs} title="All Blogs!"/>
        </div>
    );
}

export default Home;