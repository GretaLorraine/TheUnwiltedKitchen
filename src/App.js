import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, withRouter} from 'react-router-dom';
import Main from './component/main/Main';
import UserListComponent from './component/lists/UserListComponent';
import SignUp from './component/sign-up/SignUp';
import Pantry from './component/pantry/Pantry';
import LandingPage from './component/main/LandingPage';
import VeggieListComponent from './component/lists/VeggieListComponent';
import FruitListComponent from './component/lists/FruitListComponent';
import UpdateUser from './component/updates/UpdateUser';
import ComingSoon from './component/main/ComingSoon';

import Axios from 'axios'

class App extends Component {

  state = {
    loggedInUser: undefined,
    pantry: []
  }

  submitLogin =(user) =>{
    let url = 'http://localhost:2300/capstone/api/v1'
      Axios.post(url+'/login', user)
      .then(response =>{
        this.setState({loggedInUser: response.data})
          localStorage.setItem('loggedInUser', response.data.email)
          this.updatepantry(response.data.id)
      })
      .catch(error => {
          this.props.history.push('/error');
      }
      )
      
  }

  updatepantry = (userId) => {
    let url = 'http://localhost:2300/capstone/api/v1'
    Axios.get(`${url}/pantry?userId=${userId}`)
            .then(res => {
              console.log("Pantry returned::> ", res)
              this.setState({pantry: res.data})
              this.props.history.push('/pantry');
            })
            .catch(err => {
              console.log("Error ::> ", err);
              this.props.history.push('/error');
            })
  }

  SignOut = () => {
    localStorage.removeItem("loggedInUser");
    this.setState({loggedInUser: undefined})
    this.props.history.push('/');
  }

  updatePantry = (pantry) => {
    this.setState({pantry: pantry})
  }

  render(){
    return (
              <Switch>
                  <Route path = "/" exact component = {LandingPage}></Route>
                  <Route path = "/sign-in" component = {() => <Main submitLogin={(user) => this.submitLogin(user)} />}></Route>
                  <Route path = "/coming-soon" component = {ComingSoon}></Route>
                  <Route path = "/sign-up" component = {SignUp}></Route>
                  <Route path = "/pantry" component = {() => <Pantry updatepantry={this.updatepantry} {...this.state} {...this.props} />}></Route>

                  <Route path = "/users" component = {UserListComponent}></Route>
                  <Route path = "/update-users/:id" component = {UpdateUser}></Route>
                  
                  <Route path = "/veggies" component = { () => <VeggieListComponent 
                      updatePantry={this.updatePantry} {...this.state} {...this.props} />}>
                  </Route>

                  <Route path = "/fruits" component = {() => <FruitListComponent 
                    updatePantry={this.updatePantry} {...this.state} {...this.props} />}>
                  </Route>
              </Switch>
    );
  }
}

export default  withRouter(App);
