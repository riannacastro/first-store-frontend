import './css/App.css';
import { Switch, Route } from 'react-router-dom';
import Login from './components/user/Signin';
import HomePageContainer from './home/HomePageContainer';
import ItemsContainer from './components/items/ItemsContainer';
import WomenItemsContainer from './components/women/WomenItemsContainer';
import MenItemsContainer from './components/men/MenItemsContainer';
import SignUpForm from './components/user/SignUpForm';
import Favorites from './components/Favorites';
import KidItemsContainer from './components/kids/KidItemsContainer';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePageContainer}/>
        <Route path="/items" component={routerProps => < ItemsContainer routerProps={routerProps}/>}/>
        <Route path="/signin" component={Login} />
        <Route path="/signup" component={SignUpForm} />
        <Route path="/men" component={MenItemsContainer} />
        <Route path="/women" component={WomenItemsContainer}/>
        <Route path="/kids" component={KidItemsContainer} />
        <Route path="/favorites" component={Favorites} />
      </Switch>
    </div>
  );
}

export default App;
