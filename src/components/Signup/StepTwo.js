import React, { Component, PropTypes } from 'react';

class StepTwo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <div className="step_wrap">
                  <div className="col-md-8">
                    <h2>Location</h2>
                    <form className="form-container clearfix">
                      <div className="form-group">
                        <div className="col-md-6">
                            <label htmlFor="businessName">Address</label>
                            <input type="text" className="form-control" id="businessName"  placeholder="Address" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="businessEmail">Address 2</label>
                            <input type="text" className="form-control" id="businessEmail" aria-describedby="emailHelp" placeholder="Address2" />
                        </div>
                      </div>
                      <div className="form-group">
                          <div className="col-md-6">
                            <label htmlFor="businessEmail">City</label>
                            <input type="text" className="form-control" id="businessEmail" aria-describedby="emailHelp" placeholder="City" />
                          </div>
                          <div className="col-md-6">
                            <label htmlFor="phone">State</label>
                            <input type="text" className="form-control" id="phone" placeholder="State"/>
                          </div>
                      </div>

                    </form>
                </div>
                <div className="col-md-3 hideCol">
                    <h5>Location & Amenities Info</h5>
                    <hr/>
                    <p style={{fontSize: '15px'}}>Please fill out some basic information on your business and we'll see if we can find any matching business information to help you complete the registration process more repidly.</p>
                </div>
                </div>
            </React.Fragment>
        );
    }
}

export default StepTwo;
