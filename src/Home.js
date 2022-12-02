import BlogList from "./BlogList";
import useFetch from "./useFetch";
import React from "react";

const Home = () => {
  const { data, isPending, error } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {data && <BlogList blogs={data} title="all Blogs" />}
    </div>
  );
};

export default Home;
