import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ComingSoon.css';

class ComingSoon extends Component {
    render() {
        return (

            <body className="green-onions">
            <div>
                <div className="sidenav">
                    <Link to="/pantry">Home</Link>
                    <Link to="/fruits">Fruits</Link>
                    <Link to="/veggies">Veggies</Link>
                    <Link to="/coming-soon">Coming Soon</Link>
                    <button style={{marginLeft: "35px", marginTop: "50px"}} type="button" class="btn btn-outline-light"onClick={(e) => this.Signout(e)}>Log Out</button>
                </div>
                
                <div className="hey-o">
                <div className="card col-md-5 offset-md-4 offset-md-3" id="coming-soon-card">
                    <h2 className="do-this">Coming Soon!</h2>
                    <ul className="offset-sm-1">
                        <li>Progress trackers to help you know freshness at a glance.</li>
                        <li>Text notifications for freshness updates.</li>
                        <li>More categories to add to your pantry!</li>
                        <li>Nutrition information to help track your needs.</li>
                        <li>Recipe suggestions for items about to go bad.</li>
                    </ul>
                </div>
                </div>
                
            </div>
            </body>
        );
    }
}

export default ComingSoon;