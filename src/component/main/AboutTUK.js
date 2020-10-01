import React, { Component } from 'react';
import FruitListComponent from './../lists/FruitListComponent';

class AboutTUK extends Component {
    render() {
        return (
            <div>

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
                    <h2 className="do-this">Hello! And welcome to The Unwilted Kitchen!</h2>
                    <div className="offset-sm-1">
                        <p>Have you ever bought fresh produce only to find it squishy and limp in what feels like no time? How long ago did you 
                            purchase that broccoli in the crisper? Why are your potatoes going bad so fast? Who wants banana bread? ...again... We 
                            waste so much food and money trying to be healthy and save on groceries that often times we end up forgetting each 
                            item has it's own shelf life. And as if that wasn't enough, some fruits and veggies don't necessarily play nice 
                            together. Keeping everything straight can be a chore in itself!
                        </p>
                        <p>Maybe you are well aware of weird food science and keeping your food fresh but there still seems to be a disconnect. 
                            How many times have you had to look up how to keep artichokes fresh? Did you buy that lettuce last week or the week
                            bfore? Was it seriously the week before that...? It takes time and energy to look up each fruit and vegetable, prep 
                            it for storage and keep tabs on it all. Not to mention realizing you just used your last freezer bag at the beginning 
                            of prep and are now furiously wrapping cheap plastic wrap around half your groceries until you can stop by the store 
                            in two days when you forget both freezer bags and plastic wrap, which you are now also out of. Just me then?
                        </p>
                    <h3>Don't worry we're here to help!</h3>
                        <p>The Unwilted Kitchen was made in response to these very issues. After watching lettuce brown and apples get soft over 
                            and over (every time promising to all gods vegetation or karma or whatever to not do the same to future similar produce), 
                            enough was enough! I would not be the cause of death for another fruit or vegetable! I put my head together with a friend 
                            and came up with a list of things we wish were readily available:
                            <li>What is the best way to prep produce so it stays fresh as long as possible?</li>
                            <li>How long will each item keep if prepared this way?</li>
                            <li>What are the best practices for freezer prep?</li>
                    
                        </p>
                        <li>Recipe suggestions for items about to go bad.</li>
                    </div>
                </div>
                </div>
                
            </div>
            </body>
                
            </div>
        );
    }
}

export default AboutTUK;