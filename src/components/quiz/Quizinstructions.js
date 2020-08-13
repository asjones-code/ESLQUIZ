import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet'

import img1 from '../../assets/img/img1.png';
import img2 from '../../assets/img/img2.png';
import img3 from '../../assets/img/img3.png';
import img4 from '../../assets/img/img4.png';

const QuizInstructions = () => (
    <Fragment>
        <Helmet><title>ESL Diagnostic Quiz</title></Helmet>
        <div className="instructions container">
            <h1>About this Quiz</h1>
            <p>This Quiz will give you your English level based on the CEFR. The CEFR (Common European Framework of Reference for Languages) is an international standard for language level and ability</p>
            <ul className="browser-default" id="main-list">
                <li>The first part of this quiz will be 8 minutes long and ends as soon as the time elapses</li>
                <li>There are 15 questions on the quiz</li>
                <li>Each question has 3 or 4 answer choices</li>
                    <img src={img1} alt="placeholder image" />
                <li>Ignore the following 3 images</li>
                    <img src={img2} alt="placeholder image" />
                <li>Ignore the following 3 images</li>
                    <img src={img3} alt="placeholder image" />
                    <ul id="sublist">
                        <li>literally just words</li>
                        <img src={img4} alt="placeholder image" />
                    </ul>
            </ul>
            <div>
                <span className="left"><Link to="/">No Let's Go Back</Link> </span>
                <span className="left"><Link to="/play/quiz">Let's Take Quiz</Link> </span>
            </div>

        </div>
    </Fragment>
);

export default QuizInstructions