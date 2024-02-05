import React, { useEffect, useState } from "react";
import { Form, Link, redirect } from "react-router-dom";
import { register } from "../../APIs/API";
import PasswordTooltipIcon from "../../components/user/PasswordTooltipIcon";

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
    return redirect("/trending");
  }
}

export default function RegisterPage() {
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [showTooltip, setShowTooltip] = useState(false);
  const [passwordTooShort, setPasswordTooShort] = useState(false);
  const [passwordRequiresNonAlphanumeric, setPasswordRequiresNonAlphanumeric] =
    useState(false);
  const [passwordRequiresLower, setPasswordRequiresLower] = useState(false);
  const [passwordRequiresUpper, setPasswordRequiresUpper] = useState(false);
  const [passwordRequiresDigit, setPasswordRequiresDigit] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    if (password.length >= 6) {
      setPasswordTooShort(true);
    } else {
      setPasswordTooShort(false);
    }
    if (password.match(/[a-z]/)) {
      setPasswordRequiresLower(true);
    } else {
      setPasswordRequiresLower(false);
    }
    if (password.match(/[A-Z]/)) {
      setPasswordRequiresUpper(true);
    } else {
      setPasswordRequiresUpper(false);
    }
    if (password.match(/[0-9]/)) {
      setPasswordRequiresDigit(true);
    } else {
      setPasswordRequiresDigit(false);
    }
    if (password.match(/[^a-zA-Z0-9]/)) {
      setPasswordRequiresNonAlphanumeric(true);
    } else {
      setPasswordRequiresNonAlphanumeric(false);
    }
  }, [password]);

  useEffect(() => {
    console.log(passwordTooShort);
  }, [passwordTooShort]);

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
              <div className="user-register-password-tooltip-wrapper">
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  onChange={(e) => handlePasswordChange(e)}
                  onFocus={() => setShowTooltip(true)}
                  onBlur={() => setShowTooltip(false)}
                  required
                />
                {showTooltip && (
                  <div className="user-register-password-tooltip">
                    <p>
                      <span>
                        <PasswordTooltipIcon condition={passwordTooShort} />
                      </span>{" "}
                      at least 6 characters
                    </p>
                    <p>
                      <span>
                        <PasswordTooltipIcon
                          condition={passwordRequiresNonAlphanumeric}
                        />
                      </span>{" "}
                      at least one non alphanumeric character
                    </p>
                    <p>
                      <span>
                        <PasswordTooltipIcon
                          condition={passwordRequiresLower}
                        />
                      </span>{" "}
                      at least one lowercase ('a'-'z')
                    </p>
                    <p>
                      <span>
                        <PasswordTooltipIcon
                          condition={passwordRequiresUpper}
                        />
                      </span>{" "}
                      at least one uppercase ('A'-'Z')
                    </p>
                    <p>
                      <span>
                        <PasswordTooltipIcon
                          condition={passwordRequiresDigit}
                        />
                      </span>{" "}
                      at least one digit ('0'-'9')
                    </p>
                  </div>
                )}
              </div>
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
