import './App.css';
import React from "react";
import Home from './pages/Home';
import { BrowserRouter as Router , Routes , Route, Link } from "react-router-dom";
import Search from './pages/Search';
import SearchPage from './components/SearchPage';

function App() {
  return (
    <div className="app">
      <Router>
       <Routes>
         <Route path="/" element={<Home/>}></Route>
         <Route path="/search" element={<SearchPage/>}></Route>
       </Routes>
      </Router>
    </div>
  );
}

export default App;
