import React, { useState } from "react";

const coolGradient = "linear-gradient(135deg, #ff6ec4 0%, #7873f5 100%)";
const inputStyle = {
  width: "100%",
  marginBottom: 16,
  padding: "12px 16px",
  border: "none",
  borderRadius: 8,
  fontSize: 16,
  background: "#222",
  color: "#fff",
  outline: "none",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
};
const buttonStyle = {
  width: "100%",
  padding: "12px 0",
  border: "none",
  borderRadius: 8,
  background: coolGradient,
  color: "#fff",
  fontWeight: "bold",
  fontSize: 18,
  cursor: "pointer",
  boxShadow: "0 4px 16px rgba(120,115,245,0.2)",
  transition: "transform 0.1s",
};
const formStyle = {
  maxWidth: 340,
  margin: "4rem auto",
  padding: 32,
  borderRadius: 16,
  background: "rgba(34,34,34,0.95)",
  boxShadow: "0 8px 32px rgba(120,115,245,0.15)",
  backdropFilter: "blur(8px)",
  border: "2px solid #7873f5",
  position: "relative",
  zIndex: 1,
};
const headingStyle = {
  textAlign: "center",
  marginBottom: 24,
  fontSize: 32,
  fontWeight: 900,
  letterSpacing: 1,
  background: coolGradient,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  textShadow: "0 2px 8px #7873f555",
  fontFamily: "'Montserrat', 'Poppins', sans-serif",
};

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    onLogin(email);
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: coolGradient,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'Montserrat', 'Poppins', sans-serif",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Fun floating shapes */}
      <div style={{
        position: "absolute",
        top: 40,
        left: 60,
        width: 80,
        height: 80,
        background: "#fff2",
        borderRadius: "50%",
        filter: "blur(2px)",
        zIndex: 0,
        animation: "float1 6s ease-in-out infinite alternate",
      }} />
      <div style={{
        position: "absolute",
        bottom: 80,
        right: 100,
        width: 120,
        height: 120,
        background: "#ff6ec488",
        borderRadius: "50%",
        filter: "blur(4px)",
        zIndex: 0,
        animation: "float2 8s ease-in-out infinite alternate",
      }} />
      <form onSubmit={handleSubmit} style={formStyle}>
        <h2 style={headingStyle}>👾 Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={e => setEmail(e.target.value)}
          style={inputStyle}
          autoComplete="username"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={e => setPassword(e.target.value)}
          style={inputStyle}
          autoComplete="current-password"
        />
        <button
          type="submit"
          style={buttonStyle}
          onMouseDown={e => (e.target.style.transform = "scale(0.97)")}
          onMouseUp={e => (e.target.style.transform = "scale(1)")}
        >
          🚀 Login
        </button>
        <div style={{
          marginTop: 18,
          textAlign: "center",
          color: "#aaa",
          fontSize: 14,
        }}>
          <span>Not a member? <a href="#" style={{ color: "#ff6ec4", textDecoration: "underline" }}>Sign up</a></span>
        </div>
      </form>
      {/* Keyframes for floating shapes */}
      <style>
        {`
          @keyframes float1 {
            0% { transform: translateY(0); }
            100% { transform: translateY(30px); }
          }
          @keyframes float2 {
            0% { transform: translateY(0); }
            100% { transform: translateY(-40px); }
          }
        `}
      </style>
    </div>
  );
};

export default Login;