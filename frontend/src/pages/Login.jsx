import { EyeIcon, EyeSlashIcon } from "@phosphor-icons/react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import Header from "../components/Header.jsx";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const {
    mutate: login,
    isPending,
    error,
  } = useMutation({
    mutationFn: (credentials) =>
      fetch("/api/v1/auth/login", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      }).then((res) => {
        if (!res.ok) throw new Error("Login failed");
        return res.json();
      }),
    onSuccess: (data) => {
      navigate({ to: "/price-list" });
    },
  });

  function handleLogin(e) {
    e.preventDefault();
    if (email.trim() === "" || password.trim() === "") {
      return;
    }

    login({ email, password });
  }

  return (
    <div id="background-image">
      <Header />
      <section className="login-container">
        <div className="login-card">
          <h1 className="login-card-header">Login</h1>
          <form onSubmit={handleLogin} className="login-card-form">
            <div className="field-wrapper">
              <label htmlFor="email-field">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                id="email-field"
                placeholder="janedoe@example.com"
              />
            </div>
            <div className="field-wrapper">
              <label htmlFor="password-field">Password</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={isPasswordShown ? "text" : "password"}
                name="password"
                id="password-field"
                placeholder="Enter your password"
              />
              <div className="show-password-wrapper">
                <button
                  type="button"
                  onClick={() => setIsPasswordShown(!isPasswordShown)}
                  id="show-password-button"
                >
                  {isPasswordShown ? (
                    <EyeSlashIcon color="#868686" weight="fill" size={24} />
                  ) : (
                    <EyeIcon color="#868686" weight="fill" size={24} />
                  )}
                </button>
              </div>
            </div>
            <button type="submit" id="login-button">
              Login
            </button>
          </form>
          <div className="login-card-footer">
            <a href="">Register</a>
            <a href="">Forgot your password?</a>
          </div>
        </div>
      </section>
    </div>
  );
}
