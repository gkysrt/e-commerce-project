import './App.css';
import HomePage from './pages/homepage/homepage.component.jsx'
import ShopPage from './pages/shoppage/shoppage.component.jsx'
import {Route, Switch, Link} from 'react-router-dom'
import  Header from './components/header/header.component.jsx'
import SignInAndSignUpPage from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/> 
        <Route path='/signin' component={SignInAndSignUpPage}/> 
      </Switch>
    </div>
  );
}

export default App;
