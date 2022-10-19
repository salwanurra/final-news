import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import AnimatedRoutes from "./routes/AnimatedRoutes";
import "antd/dist/antd.css";
import ScrollToTop from "./routes/ScrollToTop";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  }, []);
  return (
    <div className="App">
      <div className="parent bg-white">
        <Router>
          <ScrollToTop />

          <div className="w-screen top-0 bg-slate-800 fixed z-10">
            <Navbar />
          </div>
          <div className="justify-center flex items-center mt-12">
            <AnimatedRoutes></AnimatedRoutes>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
