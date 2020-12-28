import React, { Component, PropTypes, useState } from 'react';
import MultiStep from 'react-multistep';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';
// import StepFive from './StepFive';
import  './index.css';


function Signup (props) {
    // const { onSubmit } = props
    const [step, setStep] = useState(1);

    const steps = [
      {name: 'StepOne', component: <React.Fragment />},
      {name: 'StepTwo', component: <React.Fragment/>},
      {name: 'StepThree', component: <React.Fragment/>},
      {name: 'StepFour', component: <React.Fragment/>}
    ];

    const prevStyle = {'background': '#33c3f0', color: '#fff'}
    const nextStyle = {'background': '#33c3f0', color: '#fff'}

    return (
    <React.Fragment>
        <div className="body_wrap">
              <div className="navigation">
              {step === 4 ?
                <div className="step_five-heading"> 
                  <h2>Almost Done!</h2>
                  <p>Please confirm your package in order to complete your profile.</p>
                </div> :
                <MultiStep 
                  showNavigation={true} 
                  steps={steps}  
                  prevStyle={prevStyle} 
                  nextStyle={nextStyle}
                />
              }
              </div>
            <div className="multi_form">
                {(step === 1) && <StepOne setPage={(_step) => {setStep(_step)}} />}
                {(step === 2) && <StepTwo setPage={(_step) => {setStep(_step)}} />}
                {(step === 3) && <StepThree setPage={(_step) => {setStep(_step)}} />}
                {(step === 4) && <StepFour setPage={(_step) => {setStep(_step)}} submit={() => {
                  console.log('submitting')
                }}/>}
            </div>
        </div>
    </React.Fragment>

    );
}


export default Signup;



