import React from "react";
import { Form, Link, redirect } from "react-router-dom";
import { login } from "../../APIs/API";

export async function action({ request }) {
  const formData = await request.formData();
  const input = Object.fromEntries(formData);
  const response = await login(input);
  if (response === undefined) return 0;
  else if (response.status === 200) {
    return redirect("/user");
  } else return 0;
}

export default function LoginPage() {
  return (
    <>
      <div className="user-login-page-wrapper">
        <h1>Login</h1>
        <div className="user-login-form">
          <Form method="post">
            <div className="user-login-form-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" placeholder="email" required />
            </div>
            <div className="user-login-form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="password"
                required
              />
            </div>
            <button type="submit">Login</button>
          </Form>
        </div>
        <div className="user-login-register">
          <p>Are you new here?</p>
          <Link to="/register"> Register</Link>
        </div>
      </div>
    </>
  );
}
