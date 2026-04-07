export default function Login() {
  return (
    <section className="login-container">
      <div className="login-card">
        <h1 className="login-card-header">Login</h1>
        <form className="login-card-form">
          <div className="field-wrapper">
            <label htmlFor="email-field">Enter your email address</label>
            <input
              type="email"
              name="email"
              id="email-field"
              placeholder="Email address"
            />
          </div>
          <div className="field-wrapper">
            <label htmlFor="password-field">Enter your password</label>
            <input
              type="password"
              name="password"
              id="password-field"
              placeholder="Password"
            />
          </div>
          <button type="submit" id="login-button">
            Log in
          </button>
        </form>
        <div className="login-card-footer">
          <a href="">Register</a>
          <a href="">Forgotten password?</a>
        </div>
      </div>
    </section>
  );
}
