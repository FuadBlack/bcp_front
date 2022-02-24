import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.sass";
import { Home } from "./Component/Home";
import { Header } from "./Component/Header";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
