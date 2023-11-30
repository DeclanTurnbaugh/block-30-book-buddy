import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home";
import Explore from "./components/Explore/Explore";
import SearchResult from "./components/SearchResult";
import SingleBook from "./components/SingleBook/SingleBook";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/search-result" element={<SearchResult />} />
          <Route path="/single-book/:id" element={<SingleBook />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
