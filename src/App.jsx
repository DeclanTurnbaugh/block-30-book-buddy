import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home";
import SearchResult from "./components/SearchResult";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/search-results" element={<SearchResult />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
