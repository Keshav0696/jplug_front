import React, { Component, PropTypes } from 'react';
import Footer from '../Footer';
import MultiStep from 'react-multistep';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';
import  './index.css';


function Signup (props) {

    const steps = [
      {name: 'StepOne', component: <StepOne/>},
      {name: 'StepTwo', component: <StepTwo/>},
      {name: 'StepThree', component: <StepThree/>},
      {name: 'StepFour', component: <StepFour/>}
    ];

    const prevStyle = {'background': '#33c3f0', color: '#fff'}
    const nextStyle = {'background': '#33c3f0', color: '#fff'}

    return (
    <React.Fragment>
        <div className="body_wrap">
            <div className="multi_form">
                <MultiStep showNavigation={true} steps={steps}  prevStyle={prevStyle} nextStyle={nextStyle}/>
            </div>
        </div>
        <Footer />
    </React.Fragment>

    );
}

export default Signup;



