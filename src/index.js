import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./layout.js";
import Home  from "./home.js";
import SearchForm from "./SearchForm.js";
import CreateBlog from "./CreateBlog";
import EditBlog from "./editBlog.js";
import Navbar from "./Navbar.js";
import ViewBlog from "./ViewBlog.js";
// import Details from "./moviedetails.js";
import "./css/home.css"
import SignUp from "./Signup.js";
import Login from "./Login.js";

function App(){
    return(
        <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/blog" element={<SearchForm />}></Route>
            <Route path="/createblog" element={<CreateBlog />}></Route>
            <Route path="/editblog/:id" element={<EditBlog />}></Route>
            <Route path="/viewblog/:id" element={<ViewBlog />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/login" element={<Login />}></Route>
        </Routes>
        </BrowserRouter>
        
    );
}

render(<App/>, document.getElementById("root"));
