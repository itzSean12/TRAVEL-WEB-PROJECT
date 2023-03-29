import { useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Discover from "./components/Discover";
import Flights from "./components/Flights";
import Search from "./components/Search";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

function App() {
  const [count, setCount] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <Router>
        {isLoggedIn === false ? (
          <>
            <SignUp />
            <br />
            <br />
            <br />
            <SignIn setIsLoggedIn={setIsLoggedIn} />
          </>
        ) : (
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/discover" element={<Discover />} />
              <Route path="/flights" element={<Flights />} />
              <Route path="/search" element={<Search />} />
            </Routes>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
