import React from "react";
import { Form, Link, redirect } from "react-router-dom";
import { login } from "../../APIs/API";

export async function action({ request }) {
  const formData = await request.formData();
  const input = Object.fromEntries(formData);
  const response = await login(input);
  return redirect("/trending");
}

export default function LoginPage() {
  return (
    <>
      <div className="login-page">
        <h1>Login</h1>
        <Form method="post">
          <label forHtml="email">Email</label>
          <input type="email" name="email" placeholder="email" />
          <label forHtml="password">Password</label>
          <input type="password" name="password" placeholder="password" />
          <button type="submit">Login</button>
        </Form>
      </div>
      <Link to="/register">Register</Link>
    </>
  );
}
