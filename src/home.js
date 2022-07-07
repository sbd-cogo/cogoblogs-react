import { useState, useEffect } from 'react';
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
                <div key={blog.id}>{ blog.blog_title }</div>
            ))}
            <input type="text" id='blog-search'></input>
            <button id="search-btn" onClick={searchBlog}>Search</button>
        </div>
    );
}

export default Home;