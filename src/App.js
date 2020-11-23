import './App.css';
import React from 'react'
import HomePage from './pages/homepage/homepage.component.jsx'
import ShopPage from './pages/shoppage/shoppage.component.jsx'
import {Route, Switch, Link} from 'react-router-dom'
import  Header from './components/header/header.component.jsx'
import SignInAndSignUpPage from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component';
import {auth} from './firebase/firebase.utils'


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      currentUser: null
    }

    this.unsubscribeFromAuth = null;
  }

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user})
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/> 
          <Route path='/signin' component={SignInAndSignUpPage}/> 
        </Switch>
      </div>
    );
  }

}

export default App;
