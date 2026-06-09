function Login() {
    return (
      <div className="login-page">
        <h1>Login</h1>
  
        <form>
          <input
            type="email"
            placeholder="Enter your email"
          />
  
          <br /><br />
  
          <input
            type="password"
            placeholder="Enter your password"
          />
  
          <br /><br />
  
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
  
  export default Login;