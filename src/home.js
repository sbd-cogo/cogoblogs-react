import axios from 'axios';
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

    function deletBlog( id ){
        axios.post("http://127.0.0.1:3000/blogs/delete/"+id)
        .then(res => {
            console.log(res)
        })
        const update_blog_list = blogs.filter(blog => blog.id !== id);  
        setBlogs(update_blog_list);

    }

    return(
        <div>
        <section>
        <input
            type="text"
            id="blog-search"
            className="form-control search-form"
        ></input>
        <button id="btn" className="btn btn-primary" onClick={searchBlog}>
            Search
        </button>
        {blogs &&
            blogs.map((blog) => (
            <div key={blog.id}>


                <div className="row-md-2">
                <div className="col-md-6">
                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-column position-static">

                    <h3 className="mb-0">{blog.blog_title}</h3>

                    <div className="mb-1 text-muted">Created At : {blog.created_at}</div>

                    <p className="card-text mb-auto">
                        CONTENTS : {blog.blog_content}
                    </p>

                    <Link  className="stretched-link" to={`/viewblog/${blog.id}`}>
                        Read more...
                    </Link>
                    <Link className="btn btn-primary" to={`/editBlog/${blog.id}`} >EditBlog</Link>
                    <button onClick={() => deletBlog(blog.id)} >Delete</button>
                    </div>

                    <div className="col-auto d-none d-lg-block">
                    <svg
                        className="bd-placeholder-img"
                        width="200"
                        height="250"
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        aria-label="Placeholder: Thumbnail"
                        preserveAspectRatio="xMidYMid slice"
                        focusable="false"
                    >
                        <title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#55595c"></rect>
                        <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                        Thumbnail
                        </text>
                    </svg>
                    </div>
                </div>
                </div>
            </div>
            </div>
            ))}
        </section>
        </div>
    );
}

export default Home;