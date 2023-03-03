import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../styles/RegisterStyles.css";
import { Form, message } from "antd";

const login = () => {
  const navigate = useNavigate();

  // form handler
  const onFinishHandler = async (values) => {
    try {
      const res = await axios.post("/api/v1/user/login", values);

      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        message.success("Login Successfully");
        navigate("/");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      message.error("Something Went Wrong");
    }
  };
  return (
    <>
      <div className="form-container">
        <Form
          layout="vertical"
          onFinish={onFinishHandler}
          className="register-form"
        >
          <h3 className="text-center">Login From</h3>

          <Form.Item label="Email" name="email">
            <input type="email" required />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <input type="password" required />
          </Form.Item>
          <Link to="/register" className="m-2">
            Not a user Register here
          </Link>
          <button className="btn btn-primary" type="submit">
            Login
          </button>
        </Form>
      </div>
    </>
  );
};

export default login;
