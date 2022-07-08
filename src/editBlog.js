import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

function EditBlog(){

    const [blog, setBlog] = useState();
    const [btitle, setBtitle] = useState();
    const [bdesc, setBdesc] = useState();
    const [bcontent, setBcontent] = useState();
    const [btype, setBtype] = useState();
    let params = useParams()
    
    
    useEffect(() => {
        fetch('http://localhost:3000/blogs/ids/'+params.id)
        .then((response) => (response.json()))
        .then((data) => {
            setBlog(data); 
            setBtitle(data.blog_title);
            setBdesc(data.blog_desc);
            setBcontent(data.blog_content);
            setBtype(data.blog_type)})
    }, [])


    const makeChanges = () => {
        // var edited_title = document.getElementById('title').value;
        console.log(btitle);
        // var edited_desc = document.getElementById('desc').value;
        // var edited_content = document.getElementById('content').value;
        // var edited_blogtype = document.getElementById('blogtype').value;

        axios.put('http://127.0.0.1:3000/blogs/edit/'+params.id , {
                blog_title: btitle,
                blog_desc: bdesc,
                blog_content: bcontent,
                blog_type: btype
            })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        makeChanges();
    }

    return(
        <>
            <input type="text" id="title" value={btitle} onChange={(e) => setBtitle(e.target.value)}></input>
            <textarea id="desc" value={bdesc} onChange={(e) => setBdesc(e.target.value)} ></textarea>
            <textarea id="content" value={bcontent} onChange={(e) => setBcontent(e.target.value)}></textarea>
            <input type="text" id="blogtype" value={btype} onChange={(e) => setBtype(e.target.value)}></input>
            <button onClick={submitHandler}>Make Changes</button>
        </>
    )
}

export default EditBlog;