import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Main.css";

class Main extends Component {

  constructor(props) {
    super(props)

      this.state = {
          email: '',
          password: ''
      }
      
  }

  onChange = (e) => {
    let temp = {...this.state}
    temp[e.target.name] = e.target.value
    this.setState(temp)
  }

  loginUser = (e) => {
    e.preventDefault();
    this.props.submitLogin(this.state)
  }
  
    render() {
        return (
          <body className="this-one">
            <section>
    <div className="container main-wrapper-main">
      <div className="row">
        <div className="col-lg-6">
          <h1 className="mt-5">The Unwilted Kitchen</h1>
          <h3 className="mt-5">All your produce in one place to help you track freshness!</h3>
            <div className="card" id="yo-son">
              <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input type="email" name="email" value={this.state.email} onChange={this.onChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input type="password" name="password" value={this.state.password} onChange={this.onChange} className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-success" onClick={(e) => this.loginUser(e)}>Submit</button>
                  <div>
                    <Link className="card-link" to="/sign-up">New to the site? Sign up!</Link>
                  </div>
              </form>
              </div>
            </div>
        </div>
      </div>
    </div>
  </section>
  </body>
        );
    }
}

export default Main;