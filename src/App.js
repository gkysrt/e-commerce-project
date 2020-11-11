import './App.css';
import HomePage from './pages/homepage/homepage.component.jsx'
import ShopPage from './pages/shoppage/shoppage.component.jsx'
import {Route, Switch, Link} from 'react-router-dom'
import  Header from './components/header/header.component.jsx'

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/> 
      </Switch>
    </div>
  );
}

export default App;
