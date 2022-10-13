import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import News from "./pages/homePage/News";

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<News />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;