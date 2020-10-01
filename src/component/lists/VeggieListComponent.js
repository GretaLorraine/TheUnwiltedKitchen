import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import VeggieServices from '../../services/VeggieServices';
import './Lists.css';

class VeggieListComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            veggies: []
        }

        this.addVeggie = this.addVeggie.bind(this);
        this.editVeggie = this.editVeggie.bind(this);
        this.deleteVeggie = this.deleteVeggie.bind(this);
    }

    addVeggie(id) {
        //this.props.history.push("/pantry");
        VeggieServices.addVeggieToPantry(id, this.props.loggedInUser.id ).then( res => {
            console.log("Update pantry ::> ", res.data)
            this.props.updatePantry(res.data)
            this.props.history.push("/pantry");
        });
    }

    editVeggie(id) {
        // this.props.history.push(`/update-veggie/${id}`);
    }

    deleteVeggie(id) {
        VeggieServices.deleteVeggie(id).then( res => {
            this.setState({ veggies: this.state.veggies.filter(veggie => veggie.id !== id)});
        });
    }

    /* addVeggie = (e) => {
        e.preventDefault();
        let veggie = {name: this.state.name};
        console.log('veggie =>' + JSON.stringify(veggie));

        VeggieServices.getVeggieById(veggie)
            .then(res => {
                this.props.history.push('/pantry');
            }).catch(err => {
                console.log(err)
            })
    } */

    componentDidMount() {
        VeggieServices.getVeggies().then((res) => {
            this.setState({veggies: res.data});
        });
    }
    render() {
        return (

            <div>

                <div className="sidenav">
                    <Link to="/pantry">Home</Link>
                    <Link to="/fruits">Fruits</Link>
                    <Link to="/veggies">Veggies</Link>
                    <Link to="/coming-soon">Coming Soon</Link> 
                    <button style={{marginLeft: "35px", marginTop: "50px"}} type="button" class="btn btn-outline-light"onClick={(e) => this.Signout(e)}>Log Out</button>   
                </div>

            <body id="veggie-list">   
            <div className= "container">
                <h2 className="text-center">Veggie List</h2>
                <div className="row">
                </div>
                <table className ="table table-striped bordered hover variant= dark">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Clean</th>
                        <th>Storage</th>
                        <th>Fresh Time</th>
                        <th>Fresh Prep</th>
                        <th>Freeze Time</th>
                        <th>Freeze Prep</th>
                        <th>Add to Pantry</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.veggies.map(
                            veggie =>
                            <tr key = {veggie.id}>
                                <td>{veggie.image}</td>
                                <td>{veggie.name}</td>
                                <td>{veggie.clean}</td>
                                <td>{veggie.storage}</td>
                                <td>{veggie.freshTime}</td>
                                <td>{veggie.freshPrep}</td>
                                <td>{veggie.freezeTime}</td>
                                <td>{veggie.freezePrep}</td>
                                <td>
                                    <button className="btn btn-outline-success" onClick={() => this.addVeggie(veggie.id)}>Add</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
                </table>
            </div>
            </body> 
            </div>
        );
    }
}

export default VeggieListComponent;