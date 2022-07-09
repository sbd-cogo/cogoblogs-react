import axios from "axios";
import './css/CreateBlog.css'
import {useNavigate} from 'react-router-dom';

function CreateBlog() {
    let navigate = useNavigate();
   const addData = () =>  {
    var title = document.getElementById("blog-title").value;
    var desc = document.getElementById("blog-desc").value;
    var type = document.getElementById("blog-type").value;
    var content = document.getElementById("blog-content").value;

    axios
        .post("http://127.0.0.1:3000/blogs", { 
        blog_title: title,
        blog_desc: desc,
        blog_type: type,
        blog_content: content })
        .then(navigate(-1));
  }


return (
    <>
      <div className="create">
        <div className="fill_details">
          <h1>Please fill the details</h1>
          <div className="form-group">
            <input
              type="text"
              id="blog-title"
              placeholder="Enter the title"
            ></input>
          </div>
          <div className="form-group">
            <input
              type="text"
              id="blog-desc"
              placeholder="A little description"
            ></input>
          </div>
          <div className="form-group">
            <input
              type="text"
              id="blog-type"
              placeholder="Blog Catagory"
            ></input>
          </div>
          <div className="form-group">
            <input
              type="text"
              id="blog-content"
              placeholder="Blog Content"
            ></input>
          </div>
          
          {/* <div className="form-group">
            <button className="btn" onClick={addData}>Upload Image</button>
          </div> */}
          <div className="form-group">
            <button className="btn" onClick={addData}>
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateBlog;
