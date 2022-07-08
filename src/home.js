import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
function Home() {
    const [blogs, setBlogs] = useState();
    useEffect(() => {
        fetch("http://127.0.0.1:3000/blogs")
        .then((response) => response.json())
        .then((data) => setBlogs(data));
    }, [])
 

    console.log(blogs);

    function searchBlog(){
        var blogSearched = document.getElementById('blog-search').value.toString();
       
        fetch("http://127.0.0.1:3000/blogs/ids/" + blogSearched)
        .then((response) => response.json())
        .then((data) => {setBlogs([data]); console.log(data)});
    }

    return(
        <div>
            {blogs && blogs.map(blog=>(
                <div key={blog.id}>
                    <h1> { blog.blog_title } </h1>
                    <Link to={`/editBlog/${blog.id}`} >EditBlog</Link>
                </div> 
            ))}
            <input type="text" id='blog-search'></input>
            <button id="search-btn" onClick={searchBlog}>Search</button>
            <Link to="/createblog" >CreateBlog</Link>
        </div>
    );
}

export default Home;