import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FruitServices from '../../services/FruitServices';
import VeggieServices from '../../services/VeggieServices';
import './Pantry.css'

class Pantry extends Component {

    constructor(props) {
        super(props)

        this.state = {
            users: '',
            fruits: '',
            veggies: ''
        }

        

    }

    addProduceToPantry = event => {
        event.preventDefault()
    }

    componentDidMount() {
        console.log("Pantry ::> ", this.props)
        // UserServices.getUsers().then((res) => {
        //     this.setState({users: res.data});
        // });
        // VeggieServices.getVeggies().then((res) => {
        //     this.setState({veggies: res.data});
        // });
        // FruitServices.getFruits().then((res) => {
        //     this.setState({fruits: res.data});
        // });
    } 

    deleteFruit = (id) => {
        FruitServices.deleteFruit(id)
            .then(res => {
                this.props.updatepantry(this.props.loggedInUser? this.props.loggedInUser.id : null)
            })
    }

    deleteVeggie = (id) => {
        VeggieServices.deleteVeggie(id)
            .then(res => {
                this.props.updatepantry(this.props.loggedInUser? this.props.loggedInUser.id : null)
            })
    }

    render() {
        return (

            <body className="pantrystuff">
                <div>

                    <div className="sidenav">
                        <Link to="/pantry">Home</Link>
                        <Link to="/fruits">Fruits</Link>
                        <Link to="/veggies">Veggies</Link>
                        <Link to="/coming-soon">Coming Soon</Link>
                        <button style={{marginLeft: "35px", marginTop: "50px"}} type="button" class="btn btn-outline-light" SignOut={(user) => this.updatepantry(user)}>Log Out</button>
                    </div>

                    <div className="container col-md-9 offset-md-2 offset-md-1">
                        <div className="card-deck">
                            <div className="card">
                                <img className="fruit-pic" src="/images/closeUpBlueberries.jpg" alt="Close up of blueberries" />
                                <div className="card-body">
                                    <h1 className="card-title-fruit">Fruits</h1>
                                    <h3 className="card-title-fruit">Get juicy!</h3>
                                    <table className="table table-striped bordered hover variant= dark">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Fresh Time</th>
                                                <th>Wasted</th>
                                            </tr>
                                        </thead>
                        
                                        <tbody>
                                        {
                                            this.props.pantry == undefined? "" :
                                                this.props.pantry.map( item => {
                                                    return item.fruit == undefined || item.fruit ==null ? "" :
                                                    <tr>
                                                        <td>{item.fruit.name}</td>
                                                        <td>{item.fruit.freshTime}</td>
                                                        <td>
                                                            <button className="btn btn-outline-warning" onClick={() => this.deleteFruit(item.id)}>Delete</button>
                                                        </td>
                                                    </tr>
                                                })
                                        }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        
                            <div className="card ">
                                <img className="veggie-pic" src="/images/peasLight.jpg" alt="Peas" />
                                <div className="card-body">
                                    <h1 className="card-title-veggie">Veggies</h1>
                                    <h3 className="card-title-veggie">Feeling crunchy...</h3>
                                    <table className="table table-striped bordered hover variant= dark">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Fresh Time</th>
                                                <th>Wasted</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            this.props.pantry == undefined? "" :
                                                this.props.pantry.map( item => {
                                                    return item.veggie == undefined || item.veggie ==null? "" :
                                                    <tr>
                                                        <td>{item.veggie.name}</td>
                                                        <td>{item.veggie.freshTime}</td>
                                                        <td>
                                                            <button className="btn btn-outline-warning" onClick={() => this.deleteVeggie(item.id)} >Delete</button>
                                                        </td>
                                                    </tr>
                                                })
                                        }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                
                    </div>
                </div>
            </body>
        );
    }
}

export default Pantry;