import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function SignUp() {
    const [user_email, setUseremail] = useState('');
    const [user_name, setUsername] = useState('');
    const [user_password, setUserpassword] = useState('');
    const navigate = useNavigate();
    let signup=()=>{
        if(user_email !== "" && user_password !== '' && user_name !== ""){
            axios.post("http://127.0.0.1:3000/users/signup",{
                user_email: user_email,
                user_password: user_password,
                user_name: user_name
            } ).then(()=>{
            navigate("/");
        })
        }else {
            alert("all fields are required")
        }
        
    }
    return (
        <div className="login-block">
            <div className="login-form">
                <h2 className="text-center">Sign Up</h2>
                    <div className="login-content">
                        <div className="tb">
                            <input type="text" onChange={(e) => setUsername(e.target.value)} required className="ib" id="exampleInputName" aria-describedby="emailHelp" placeholder="Enter your name" />
                        </div>
                        <div className="tb">
                            <input type="email" onChange={(e) => setUseremail(e.target.value)} required className="ib" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        </div>
                        <div className="tb">
                            <input type="password" className="ib" required id="exampleInputPassword1" onChange={(e) => setUserpassword(e.target.value)}placeholder="Set Your Password" />
                        </div>
                        <div className="tb">
                            <button type="submit" className="ib ib-btn" onClick={() => signup()}>Sign up</button>
                        </div>
                    </div>
            </div>
        </div>
    )
}
export default SignUp