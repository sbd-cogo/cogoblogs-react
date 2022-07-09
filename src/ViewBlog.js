import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router";
import blog_img from './green-img.webp';
import axios from 'axios';

function ViewBlog(){
    var params = useParams();
    const [blog, setBlog] = useState()
    let navigate = useNavigate();

    useEffect(() => {
        fetch('http://127.0.0.1:3000/blogs/view/'+params.id)
        .then(response => (response.json()))
        .then(data => {setBlog(data); console.log(data)})
    }, [])


    function deletBlog( id ){
        axios.post("http://127.0.0.1:3000/blogs/delete/"+id)
        .then(res => {
            console.log(res)
        })
        .then(navigate(-1));
        const update_blog_list = blog.filter(blog => blog.id !== id);  
        setBlog(update_blog_list);

    } 
    
    return(
        <>
            <div>
                <img src={blog_img} className="view-page-img" />
                
                <div className="view-container">
                    <div className="view-title">
                        { blog?.blog_title }
                    </div>
                    <div className="view-content">
                        { blog?.blog_content }
                    </div>
                    <div className='blog-function'>
                        <Link className="edit-btn btn" to={`/editBlog/${blog?.id}`} >EditBlog</Link>
                        <button className='del-btn btn' onClick={() => deletBlog(blog?.id)} >Delete</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewBlog;