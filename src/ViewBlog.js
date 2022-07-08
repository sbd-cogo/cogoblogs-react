import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

function ViewBlog(){
    var params = useParams();
    const [blog, setBlog] = useState()

    useEffect(() => {
        fetch('http://127.0.0.1:3000/blogs/ids/'+params.id)
        .then(response => (response.json()))
        .then(data => setBlog(data))
    }, [])


    return(
        <>
            <div>
                {blog?.blog_title}
            </div>
        </>
    )
}

export default ViewBlog;