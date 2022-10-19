import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import AnimatedRoutes from "./routes/AnimatedRoutes";
import 'antd/dist/antd.css'

function App() {
  return (
    <div className="App">
      <div className="parent bg-white">
        <Router>
          <div className="sticky top-0 bg-slate-800">
            <Navbar />
          </div>
          <div className="justify-center flex items-center">
            <AnimatedRoutes></AnimatedRoutes>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
