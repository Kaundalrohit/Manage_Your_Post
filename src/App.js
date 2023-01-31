import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  const [mode, setMode] = useState("dark");
  const changeTheme = () => {
    if (mode === "dark") {
      document.body.style.backgroundColor = "black";
      setMode("light");
    } else {
      document.body.style.backgroundColor = "white";
      setMode("dark");
    }
  };
  return (
    <>
      <Router>
        <Navbar mode={mode} changeTheme={changeTheme} />
        <Routes>
          <Route
            path="/"
            element={<News country="in" mode={mode} category="general" />}
          />
        </Routes>
        <Routes>
          <Route
            path="/sports"
            element={<News country="in" mode={mode} category="sports" />}
          />
        </Routes>
        <Routes>
          <Route
            path="/business"
            element={<News country="in" mode={mode} category="business" />}
          />
        </Routes>
        <Routes>
          <Route
            path="/technology"
            element={<News country="in" mode={mode} category="technology" />}
          />
        </Routes>
        <Routes>
          <Route
            path="/science"
            element={<News country="in" mode={mode} category="science" />}
          />
        </Routes>
        <Routes>
          <Route
            path="/health"
            element={<News country="in" mode={mode} category="health" />}
          />
        </Routes>
        <Routes>
          <Route
            path="/entertainment"
            element={<News country="in" mode={mode} category="entertainment" />}
          />
        </Routes>
        <Routes>
          <Route
            path="/general"
            element={<News country="in" mode={mode} category="general" />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
