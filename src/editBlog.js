import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import './css/editBlog.css'
import {useNavigate} from 'react-router-dom';

function EditBlog(){
    let navigate= useNavigate();
    const [blog, setBlog] = useState();
    const [btitle, setBtitle] = useState();
    const [bdesc, setBdesc] = useState();
    const [bcontent, setBcontent] = useState();
    const [btype, setBtype] = useState();
    let params = useParams()
    
    
    useEffect(() => {
        fetch('http://localhost:3000/blogs/view/'+params.id)
        .then((response) => (response.json()))
        .then((data) => {
            setBlog(data); 
            setBtitle(data.blog_title);
            setBdesc(data.blog_desc);
            setBcontent(data.blog_content);
            setBtype(data.blog_type)})
    
    }, [])


    const makeChanges = () => {
        console.log(btitle);

        axios.put('http://127.0.0.1:3000/blogs/edit/'+params.id , {
                blog_title: btitle,
                blog_desc: bdesc,
                blog_content: bcontent,
                blog_type: btype,
            }) 
            .then((navigate(-1)))

    }

    return(
        <>
            <div className="edit-container">
                <div className="edit-form">
                    <div className="title-block block">
                        <p>Title</p>
                        <input className="i-area"  type="text" id="title" value={btitle} onChange={(e) => setBtitle(e.target.value)}></input>
                    </div>
                    <div className="desc-block block">
                        <p>Description</p>
                        <textarea className="i-area" id="desc" value={bdesc} onChange={(e) => setBdesc(e.target.value)} ></textarea>
                    </div>
                    <div className="content-block block">
                        <p>Content</p>
                        <textarea className="i-area"  id="content" value={bcontent} onChange={(e) => setBcontent(e.target.value)}></textarea>
                    </div>
                    <div className="type-block block">
                        <p>Type</p>
                        <input className="i-area" type="text" id="blogtype" value={btype} onChange={(e) => setBtype(e.target.value)}></input>
                    </div>
                    <div className="block btn-block">
                        <button className="btn" onClick={makeChanges}>Make Changes</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditBlog;