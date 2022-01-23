import './css/App.css';
import { Switch, Route } from 'react-router-dom';
import ItemsContainer from './components/items/ItemsContainer';
import Login from './components/user/Signin';
import HomePageContainer from './home/HomePageContainer';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePageContainer}/>
        <Route path="/items" component={ItemsContainer} />
        <Route path="/signin" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
