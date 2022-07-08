import axios from "axios";

function CreateBlog() {
   const addData = () =>  {
    var title = document.getElementById("blog-title").value;

    axios
      .post("http://127.0.0.1:3000/blogs", { blog_title: title });
  }

  return (
    <>
      <h1>Hello</h1>
      <input type="text" id="blog-title"></input>
      <button onClick={addData}>Send</button>
    </>
  );
}

export default CreateBlog;
