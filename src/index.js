import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./layout.js";
import Home  from "./home.js";
import SearchForm from "./SearchForm.js";
import CreateBlog from "./CreateBlog";
import EditBlog from "./editBlog.js";
// import Details from "./moviedetails.js";
// import "./style.css"

function App(){
    return(
        <BrowserRouter>
        {/* <Layout /> */}
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/blog" element={<SearchForm />}></Route>
            <Route path="/createblog" element={<CreateBlog />}></Route>
            <Route path="/editblog/:id" element={<EditBlog />}></Route>
        </Routes>
        </BrowserRouter>
        
    );
}

render(<App/>, document.getElementById("root"));
