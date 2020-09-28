import React, { Component } from 'react';
import UserServices from '../../services/UserServices';

class UpdateUser extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            password2: ''
        }
        
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.changePassword2Handler = this.changePassword2Handler.bind(this);
        this.updateUser = this.updateUser.bind(this);
    }

    componentDidMount() {
        UserServices.getUserById(this.state.id).then( (res) => {
            let user = res.data;
            this.setState({firstName: user.firstName,
            lastName: user.lastName,
            email: user.email, 
            password: user.password, 
            password2: user.password2
        });
        });
    }

    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({email: event.target.value});
    }

    changePasswordHandler= (event) => {
        this.setState({password: event.target.value});
    }

    changePassword2Handler= (event) => {
        this.setState({password2: event.target.value});
    }

    updateUser= (e) => {
        e.preventDefault();
        let user= {firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email, password: this.state.password, password2: this.state.password2};
        console.log('user =>' + JSON.stringify(user));

        UserServices.updateUser(user, this.state.id).then( res => {
            this.props.history.push('/users');
        })
    }

    render() {
        return (
            <div className="container main-wrapper">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                    <h2 className="text-center">Update User Pantry</h2>
                        <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="formGroupExampleInput">First Name</label>
                            <input className="form-control" name="firstName" value= {this.state.firstName} onChange={this.changeFirstNameHandler} placeholder="First Name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="formGroupExampleInput2">Last Name</label>
                            <input className="form-control" name="lastName" value= {this.state.lastName} onChange={this.changeLastNameHandler} placeholder="Last Name" />
                        </div>
                    </form>
                    <form>
                        <div className="form-group">
                            <label htmlFor="formGroupExampleInput">Email</label>
                            <input className="form-control" name="email" value= {this.state.email} onChange={this.changeEmailHandler} placeholder="Email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="formGroupExampleInput2">Password</label>
                            <input className="form-control" name="password" value= {this.state.password} onChange={this.changePasswordHandler} placeholder="Password" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="formGroupExampleInput">Re-enter Password</label>
                            <input className="form-control" name="password2" value= {this.state.password2} onChange={this.changePassword2Handler} placeholder="Password 2" />
                        </div>
                        <button className="btn btn-outline-success" onClick={this.updateUser}>Save</button>
                    </form>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UpdateUser;