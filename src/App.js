import './App.css';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SearchPage from './pages/SearchPage';
function App() {
  return (
    <Router>
    <div className="App">
    <Switch>
          
          <Route exact path="/search">
            <SearchPage/>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
    </Switch>  
      
    </div>
    </Router>
  );
}

export default App;
