import React, { Component } from 'react';
import './LandingPage.css';

class LandingPage extends Component {

    constructor(props){
        super(props) 
            setTimeout(() => {
                props.history.push('/sign-in')
            }, 4000)
    }
    
    render() {
        return (
            <div className="main-wrapper">
                <div className="animated-title">
                    <div className="text-top">
                        <div>
                            <span>The</span>
                            <span>Unwilted</span>
                        </div>
                    </div>
                    <div className="text-bottom">
                        <div>Kitchen</div>
                    </div>
                </div>
                
            </div>

        );
    }
}

export default LandingPage;