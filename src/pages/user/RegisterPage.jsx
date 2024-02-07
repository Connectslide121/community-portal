import React, { useState } from "react";
import { Form, Link, redirect } from "react-router-dom";
import { register } from "../../APIs/API";
import PasswordInput from "password-input-component";

export async function action({ request }) {
  const formData = await request.formData();
  const input = Object.fromEntries(formData);
  if (input.password !== input.confirmPassword) {
    alert("Passwords don't match");
    return 0;
  } else if (
    input.password.length < 6 ||
    !input.password.match(/[a-z]/) ||
    !input.password.match(/[A-Z]/) ||
    !input.password.match(/[0-9]/) ||
    !input.password.match(/[^a-zA-Z0-9]/)
  ) {
    alert("Password doesn't meet requirements");
    return 0;
  } else {
    await register(input);
    return redirect("/login");
  }
}

export default function RegisterPage() {
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <div className="user-register-page-wrapper">
        <h1>Register</h1>
        <div className="user-register-form">
          <Form method="post">
            <div className="user-register-form-group">
              <label forHtml="email">Email</label>
              <input type="email" name="email" placeholder="email" required />
            </div>
            <div className="user-register-form-group">
              <label forHtml="password">Password</label>
              <PasswordInput
                inputPlaceholder="password"
                onInputChange={(e) => handlePasswordChange(e)}
              />
            </div>
            <div className="user-register-form-group">
              <label forHtml="password">Confirm password</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="password"
                onChange={(e) => setPassword2(e.target.value)}
                required
              />
              <div className="passwords-dont-match-placeholder">
                {password !== password2 && (
                  <p className="passwords-dont-match">
                    *passwords do not match
                  </p>
                )}
              </div>
            </div>
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
