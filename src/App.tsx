// React & 3rd Party Imports
import { lazy, useState, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import { Navpane } from "./components/";

// Types
import { View } from "./custom";

// Styles
import "./App.css";

function App() {
  // Load Views
  const Home = lazy(() => import("./views/Home"));
  const Resume = lazy(() => import("./views/Resume"));

  const views: Array<View> = [
    {
      title: "Home",
      url: "/",
      component: <Home />,
    },
    {
      title: "Resume",
      url: "/resume",
      component: <Resume />,
    },
  ];

  const [navOpen, setNavOpen] = useState(false)

  const menuIconClickHandler = () => {
    setNavOpen((prevState) => !prevState)
  }

  return (
    <BrowserRouter>
      {navOpen && <Navpane icon="" views={views} />}
      <button type="button" onClick={menuIconClickHandler} className="menu-icon-button">
        <img alt="menu-icon" src="/Hamburger.png"/>
      </button>
      <Suspense>
        <div id="routes-container">
        <Routes>
          {views.map((view: View) => (
            <Route key={view.title} path={view.url} element={view.component} />
          ))}
        </Routes>
        </div>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
