import './css/App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ItemsContainer from './components/items/ItemsContainer';
import Login from './components/user/Login';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/items" component={ItemsContainer} />
        <Route path="/signin" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
