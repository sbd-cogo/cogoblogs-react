import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import blog_img  from './green-img.webp';

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
       
        fetch("http://127.0.0.1:3000/blogs/search/" + blogSearched)
        .then((response) => response.json())
        .then((data) => {setBlogs(data); console.log(data)});
    }

    

    return(
        <div>
            <div className='main'>
                <div className='head-quote'>
                    <p>Blogging isn't about publishing much as you can. It's about publishing as smart as you can.</p>
                    <p className='quote-author'>-John Marrow</p>
                </div>
            </div>
            <section className='home-container'>
                <div className='search-container'>
                    <input type="text" id="blog-search" className='search-input' placeholder='Search for blogs'></input>
                    <button id="btn" className="search-btn" onClick={searchBlog}>Search</button>
                </div>
                {blogs && blogs.map((blog) => (
                    <div key={blog.id}>
                        <div className="blog-container">
                            <div className='blog-left'>
                                <div className="blog-title">{blog?.blog_title}</div>
                                <p className=""> {blog.blog_desc} </p>
                                <div className="">Created At : {blog.created_at}</div>
                                <div className='read-more-container'>
                                    <Link  className="read-more" to={`/viewblog/${blog.id}`}>Read more...</Link>
                                </div>
                            </div>
                            <div className='blog-right'>
                                <img src={blog_img} className="blog-img" />
                            </div>
                        </div>
                    </div>
                    ))}
            </section>
        </div>
    );
}

export default Home;