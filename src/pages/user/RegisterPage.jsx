import React from "react";
import { Form, Link, redirect } from "react-router-dom";
import { register } from "../../APIs/API";

export async function action({ request }) {
  const formData = await request.formData();
  const input = Object.fromEntries(formData);
  const response = await register(input);
  return redirect("/trending");
}

export default function RegisterPage() {
  return (
    <>
      <div className="user-register-page-wrapper">
        <h1>Register</h1>
        <div className="user-register-form">
          <Form method="post">
            <label forHtml="email">Email</label>
            <input type="email" name="email" placeholder="email" />
            <label forHtml="password">Password</label>
            <input type="password" name="password" placeholder="password" />
            <button type="submit">Register</button>
          </Form>
        </div>
        <div className="user-login-register">
          <p>Already have an account?</p>
          <Link to="/login"> Login</Link>
        </div>
      </div>
    </>
  );
}
