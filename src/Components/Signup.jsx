import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
    let [userdata, setUserdata] = useState({});
    let navigate = useNavigate();

    let inputvalue = (e) => {
        setUserdata({ ...userdata, [e.target.name]: e.target.value });
    };

    let signup = () => {

        const isValidate = userdata.email && userdata.password && userdata.firstname && userdata.lastname;

        let existingUser = JSON.parse(localStorage.getItem("signupdata")) || [];
        let existingEmail = existingUser.filter(user => user.email === userdata.email);

        if (!isValidate) {
            alert("All fields are required");
        }
        else if (existingEmail.length > 0) {
            alert("User already signed up");
            navigate('/login');
        } else {
            existingUser.push(userdata);
            localStorage.setItem("signupdata", JSON.stringify(existingUser));
            alert("Signup successful!");
            navigate('/login');
        }
    };


    return (
        <div className="signup-container">
            <form className="signup-form">
                <h1>Sign up</h1>

                <label htmlFor="firstname">First Name</label>
                <input type="text" name="firstname" placeholder="Enter your first name" onChange={inputvalue} />

                <label htmlFor="lastname">Last Name</label>
                <input type="text" name="lastname" placeholder="Enter your last name" onChange={inputvalue} />

                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="Enter your email" onChange={inputvalue} />

                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="Enter your password" onChange={inputvalue} />

                <button type="button" onClick={signup}>Signup</button>
            </form>
        </div>
    );
}

export default Signup;
