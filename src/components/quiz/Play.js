import React, {Component, Fragment} from 'react';
import { Helmet } from 'react-helmet'
import CubeOutlineIcon from 'mdi-react/CubeOutlineIcon';


class Play extends Component{
    constructor (props){
        super(props);
        this.state = {
            counter: 0
        };
    }

    increaseCount = () => {
        this.setState({
            counter: 5
        });
    };

    render () {
        return(
            <Fragment>
                <Helmet><title>ESL Diagnostic Quiz</title></Helmet>
                    <div className="questions">
                        <div className="hint-container">
                            <p>
                                <span className="test"> <CubeOutlineIcon color="orange" size={48}/>Hint</span>
                            </p>
                        </div>
                            <div>
                                <p>
                                    <span>questioncount</span>
                                    <span>timer</span>
                                </p>
                        </div>
                        <h5>This is a test question.</h5>
                        <div className="options-container">
                            <p className="option">Whatever.</p>
                            <p className="option">I don't care.</p>
                        </div>
                        <div className="options-container">
                            <p className="option">IDGAF.</p>
                            <p className="option">OK.</p>
                        </div>
                        <div className="button-container">
                            <button>Next</button>
                            
                        </div>
                    </div>


            </Fragment>
        );
    }
}



export default Play;