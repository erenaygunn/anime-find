import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Popular from "./pages/Popular";
import Upcoming from "./pages/Upcoming";
import Airing from "./pages/Airing";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/popular" Component={Popular}/>
        <Route path="/airing" Component={Airing}/>
        <Route path="/upcoming" Component={Upcoming}/>
      </Routes>
    </Router>
  )
}

export default App
