import React, { useState } from "react";
import "./App.css";
import GenreMovieList from "./components/GenreMovieList";
import Header from "./components/Header";
import ProductionHouse from "./components/ProductionHouse";
import Slider from "./components/Slider";
import Footer from "./components/footer";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  const [user, setUser] = useState(null);
  const [showSignup, setShowSignup] = useState(false);

  const handleLogin = (email) => setUser(email);
  const handleSignup = (email) => {
    setUser(email);
    setShowSignup(false);
  };

  if (!user) {
    return showSignup ? (
      <>
        <Signup onSignup={handleSignup} />
        <p style={{ textAlign: "center" }}>
          Already have an account?{" "}
          <button onClick={() => setShowSignup(false)}>Login</button>
        </p>
      </>
    ) : (
      <>
        <Login onLogin={handleLogin} />
        <p style={{ textAlign: "center" }}>
          Don't have an account?{" "}
          <button onClick={() => setShowSignup(true)}>Sign Up</button>
        </p>
      </>
    );
  }

  return (
    <div>
      <Header />
      <Slider />
      <ProductionHouse />
      <GenreMovieList />
      <Footer />
    </div>
  );
}

export default App;
