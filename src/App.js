import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ItemsContainer from './components/items/ItemsContainer';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/items" component={ItemsContainer} />
      </Switch>
    </div>
  );
}

export default App;
