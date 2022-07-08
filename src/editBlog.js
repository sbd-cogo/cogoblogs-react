import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

function EditBlog(){

    const [blog, setBlog] = useState();
    let params = useParams()
    useEffect(() => {
        fetch('http://localhost:3000/blogs/ids/'+params.id)
        .then((response) => (response.json()))
        .then((data) => setBlog(data))
    }, [])

    document.getElementById('title').value = blog?.blog_title ? blog.blog_title : ""
    const makeChanges = () => {
        var edited_title = document.getElementById('title').value;
        var edited_desc = document.getElementById('desc').value;
        var edited_content = document.getElementById('content').value;
        var edited_blogtype = document.getElementById('blogtype').value;

        

        // fetch('http://127.0.0.1:3000/blogs/edit/'+params.id, method)
        // axios.put('http://127.0.0.1:3000/blogs/edit/'+params.id , {
        //         blog_title: edited_title,
        //         blog_desc: edited_desc,
        //         blog_content: edited_content,
        //         blog_type: edited_blogtype
        //     })
    }

    return(
        <>
            <input type="text" id="title" ></input>
            <textarea id="desc" value={blog?.blog_desc}></textarea>
            <textarea id="content" value={blog?.blog_content}></textarea>
            <input type="text" id="blogtype" value={blog?.blog_type} ></input>
            <button onClick={makeChanges}>Make Changes</button>
        </>
    )
}

export default EditBlog;