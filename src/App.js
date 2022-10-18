import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import AnimatedRoutes from "./routes/AnimatedRoutes";

function App() {
  return (
    <div className="App">
      <div className="parent bg-white h-screen">
        <Router>
          <div>
            <Navbar NavProp="bg-github-blue flex px-8 justify-center items-center space-x-4 h-12" />
          </div>
          <div className="justify-center flex items-center ">
            <AnimatedRoutes></AnimatedRoutes>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
