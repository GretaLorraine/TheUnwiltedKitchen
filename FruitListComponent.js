import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FruitServices from '../../services/FruitServices';

class FruitListComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            fruits: []
        }
        this.addFruit = this.addFruit.bind(this);
        this.editFruit = this.editFruit.bind(this);
        this.deleteFruit = this.deleteFruit.bind(this);
    }

    addFruit(id) {
        //this.props.history.push("/pantry");
        FruitServices.addFruitToPantry(id, this.props.loggedInUser.id ).then( res => {
            console.log("Update pantry ::> ", res.data)
            this.props.updatePantry(res.data)
            this.props.history.push("/pantry");
        });
    }

    editFruit(id) {
        // this.props.history.push(`/update-veggie/${id}`);
    }

    deleteFruit(id) {
        FruitServices.deleteFruit(id).then( res => {
            this.setState({ fruits: this.state.fruits.filter(fruit => fruit.id !== id)});
        });
    }


    /* addFruit = (e) => {
        e.preventDefault();
        let fruit = {name: this.state.name};
        console.log('fruit =>' + JSON.stringify(fruit));

        FruitServices.getFruitById(fruit)
            .then(res => {
                this.props.history.push('/pantry');
            }).catch(err => {
                console.log(err)
            })
    } */

    componentDidMount() {
        FruitServices.getFruits().then((res) => {
            this.setState({fruits: res.data});
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

            <div className= "container" id="fruit-list">
                <h2 className="text-center">Fruit List</h2>
                <div className="row">
                </div>
                <table className = "table table-striped bordered hover variant= dark">
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
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.fruits.map(
                            fruit =>
                            <tr key = {fruit.id}>
                                <td>{fruit.image}</td>
                                <td>{fruit.name}</td>
                                <td>{fruit.clean}</td>
                                <td>{fruit.storage}</td>
                                <td>{fruit.freshTime}</td>
                                <td>{fruit.freshPrep}</td>
                                <td>{fruit.freezeTime}</td>
                                <td>{fruit.freezePrep}</td>
                                <td>
                                    <button className="btn btn-outline-success" onClick={() => this.addFruit(fruit.id)}>Add</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
                </table>
            </div>
            </div>
        );
    }
}

export default FruitListComponent;