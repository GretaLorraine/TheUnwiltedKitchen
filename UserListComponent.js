import React, { Component } from 'react';
import UserServices from '../../services/UserServices';

class UserListComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: []
        }

        this.addUser = this.addUser.bind(this);
        this.editUser = this.editUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
    }

    addUser() {
        this.props.history.push("/sign-up");
    }

    editUser(id) {
        this.props.history.push(`/update-user/${id}`);
    }

    deleteUser(id) {
        UserServices.deleteUser(id).then( res => {
            this.setState({ users: this.state.users.filter(user => user.id !== id)});
        });
    }

    componentDidMount() {
        UserServices.getUsers().then((res) => {
            this.setState({users: res.data});
        });
    }

    render() {
        return (
            <div className= "container">
                <h2 className="text-center">User List</h2>
                <div className="row">
                <button className="btn btn-outline-success" onClick={this.addUser}>Add</button>
                </div>
                <table className = "table table-striped bordered hover variant= dark">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Password2</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.users.map(
                            user =>
                            <tr key = {user.id}>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.email}</td>
                                <td>{user.password}</td>
                                <td>{user.password2}</td>
                                <td>
                                    <button onClick = { () => this.editUser(user.id)} className="btn btn-info">Update</button>
                                    <button style={{marginLeft: "10px"}} onClick = { () => this.deleteUser(user.id)} className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
                </table>

            </div>
        );
    }
}

export default UserListComponent;