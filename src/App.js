import './App.css';
import Resturent from './components/Resturent/Resturent';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Mealcard from './components/Mealcard/Mealcard';
import Notfound from './components/Notfound.js/Notfound';

function App() {
  return (
    <div className="App">      
      <Router>
        <Switch>
          <Route exact path="/">
          <Resturent></Resturent>
          </Route>
          <Route path='/meals/:mealId'>
            <Mealcard></Mealcard>
          </Route>
          <Route path='*'>
            <Notfound></Notfound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
