import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
    const [user_email, setUseremail] = useState('');
    const [user_password, setUserpassword] = useState('');
    const [error,setError] = useState()
    const navigate = useNavigate();

    const check = async(user_email,user_password) => {
            const {data} = await axios.post("http://127.0.0.1:3000/users/login",{
                user_email: user_email,
                user_password: user_password
            })

            if(data.text){
                setError(data.text)
            }else{
                localStorage.setItem("userInfo", JSON.stringify(data));
                navigate("/")
            }
    }

    let login=()=>{
        if(user_email !== "" && user_password !== '' ){
            check(user_email,user_password)
        }else {
            alert("all fields are required")
        }
        
    }
    return (
        <div className="login-block">
            <div className="login-form">
                <h2 className="text-center">Login Form</h2>
                <div className="login-content">
                        <div className="tb tb-login">
                        {error  && <><h5>{error}</h5></>}
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" onChange={(e) => setUseremail(e.target.value)} className="ib" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="tb tb-login tb-password">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" onChange={(e) => setUserpassword(e.target.value)} className="ib" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <div className="tb">
                            <button type="button" className="ib ib-btn" onClick={() => login()}>Login</button>
                        </div>
                </div>
            </div>
        </div>
    )
}
export default Login