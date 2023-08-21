import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Popular from "./pages/Popular";
import Upcoming from "./pages/Upcoming";
import Airing from "./pages/Airing";
import AnimeItem from './pages/AnimeItem';
import SearchResults from './pages/ResultsPage';
import Genres from './pages/Genres';

function App() {

  

  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/anime/:id" Component={AnimeItem} />
        <Route path="/popular" Component={Popular}/>
        <Route path="/airing" Component={Airing}/>
        <Route path="/upcoming" Component={Upcoming}/>
        <Route path="/searchresults" Component={SearchResults}/>
        <Route path="/genres" Component={Genres}/>
      </Routes>
    </Router>
  )
}

export default App
