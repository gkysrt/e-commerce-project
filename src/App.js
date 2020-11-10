import './App.css';
import HomePage from './pages/homepage/homepage.component.jsx'
import {Route, Switch, Link} from 'react-router-dom'


const HatsPage = () => {
  return(
  <div>
    <Link to='/'>
      <input type='button' value='Back'/>
    </Link>
    <h1>HAHAHAHATS</h1>
  </div>
  )
}
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/hats' component={HatsPage}/> 
      </Switch>
    </div>
  );
}

export default App;
