import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    let [data, setdata] = useState({});
    let goto = useNavigate();

    let update = (e) => {
        setdata({
            ...data,
            [e.target.name]: e.target.value
        });
    };

    let login = () => {
        let existingUsers = JSON.parse(localStorage.getItem("signupdata")) || [];
                const isValidate = data.email && data.password;


        let validUser = existingUsers.find(
            user => user.email === data.email && user.password === data.password
        );
        if(!isValidate){
        alert("All fields are required");

        }
        else if (validUser) {
            alert("Login Successful");
            goto("/Products");
        } else {
            alert("Invalid Email or Password");
        }
    };

    return (
        <div className="login-container">
            <form className="login-form">
                <h1>Login Page</h1>
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="Enter your Email" name="email"  onChange={update}/>
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Enter your password" name="password" onChange={update}/>
                <button type="button" onClick={login}>Login</button>
            </form>
        </div>
    );
}

export { Login };
