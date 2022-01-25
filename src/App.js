import './css/App.css';
import { Switch, Route } from 'react-router-dom';
import Login from './components/user/Signin';
import HomePageContainer from './home/HomePageContainer';
import ItemsContainer from './components/items/ItemsContainer';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePageContainer}/>
        <Route path="/items" component={routerProps => < ItemsContainer routerProps={routerProps}/>}/>
        <Route path="/signin" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
