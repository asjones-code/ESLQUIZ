import React , {Fragment} from 'react'
import {Helmet} from 'react-helmet'
import CubeOutlineIcon from 'mdi-react/CubeOutlineIcon';
import {Link} from 'react-router-dom';

import { FunctionalComponent } from './quiz/Play'


const Home = () => (
    <Fragment>
        <Helmet><title>ESL Quiz - Home</title></Helmet>
        <div id ="home">
            <section>
                <div style={{ textAlign:'center'}}>
                    <CubeOutlineIcon color="orange" size={48}/>
                </div>
                <h1>ESL Quiz</h1>
                
                <FunctionalComponent name="Moto"></FunctionalComponent>
                <div className="play-button-container">
                    <ul>
                        <li><Link className="play-button" to="/play/instructions">Play</Link>

                        </li>
                    </ul>

                </div>
                <div className="login-container">
                    <Link to="/login" className="login-buttons" id="login-button">Login</Link>
                    <Link to="/register" className="login-buttons" id="signup-button">Sign Up</Link>
                </div>

            </section>
        </div>
    </Fragment>
);


export default Home