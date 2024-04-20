import BlogList from "./BlogList";
import { useState, useEffect } from "react";

const Home = () => {
    const [blogs, setBlogs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8080/blogs')
            .then(res => {
                if (!res.ok){
                    throw Error ("Could not fetch data from that resource");
                }
                return res.json();
            })
            .then(data => {
                console.log(data);
                setBlogs(data);
                setIsLoading(false)
                setError(null)
            }).catch(err => {
                setError(err.message);
                setIsLoading(false)
            })
    }, []);
    return(
        <div className="home">
            {error && <div> {error}</div>}
            {isLoading && <h4>Loading....</h4>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!"/>}
        </div>
    );
}

export default Home;