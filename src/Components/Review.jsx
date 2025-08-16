import React, { useState } from "react";

function Review() {
  const [data, setData] = useState({});

  const update = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <div className="review-heading">
        <h1>Review Form</h1>
      </div>

      <div className="Form">
        <input
          type="text"
          placeholder="Enter your name"
          name="fullname"
          onChange={update}
        />
        <p>Your name is {data.fullname}</p>
        <hr />

        <input
          type="email"
          placeholder="Enter your email"
          name="Email"
          onChange={update}
        />
        <p>Your email is {data.Email}</p>
        <hr />

        <input
          type="Contact"
          placeholder="Enter your Contact No."
          name="Contact"
          onChange={update}
        />
        <p>Your Contact No. is {data.Contact}</p>
        <hr />


        <input className="Form4"
          type="text"
          placeholder="Enter your valuable Review"
          name="Review"
          onChange={update}
        />
        <p>Enter Feedback {data.Review}</p>
      </div>
    </>
  );
}

export { Review };
