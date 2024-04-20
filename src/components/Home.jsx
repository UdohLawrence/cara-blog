import BlogList from "./BlogList";
import { useState, useEffect } from "react";
import useFetch from "./useFetch";

const Home = () => {
   const {data, isLoading, error} = useFetch('http://localhost:8080/blogs');
    return(
        <div className="home">
            {error && <div> {error}</div>}
            {isLoading && <h4>Loading....</h4>}
            {data && <BlogList blogs={data} title="All Blogs!"/>}
        </div>
    );
}

export default Home;