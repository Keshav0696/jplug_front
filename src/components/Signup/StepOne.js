import React, { Component, PropTypes } from 'react';

class StepOne extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>

                <div className="f_container">
                <div className="col-md-8 col-sm-12">
                    <h2>Please fill in your information</h2>
                    <form className="form-container">
                      <div className="form-group">
                        <div className="col-md-6">
                            <label htmlFor="businessName">Business Name</label>
                            <input type="text" className="form-control" id="businessName"  placeholder="your business name" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="businessEmail">Business Email</label>
                            <input type="email" className="form-control" id="businessEmail" aria-describedby="emailHelp" placeholder="youremail@gmail.com" />
                        </div>
                      </div>
                      <div className="form-group">
                          <div className="col-md-6">
                            <label htmlFor="businessEmail">Business Email</label>
                            <input type="email" className="form-control" id="businessEmail" aria-describedby="emailHelp" placeholder="youremail@gmail.com" />
                          </div>
                          <div className="col-md-6">
                            <label htmlFor="phone">Phone</label>
                            <input type="number" className="form-control" id="phone" placeholder="9876543210"/>
                          </div>
                      </div>
                      <div className="form-group row">
                        <div className="col-md-6" style={{paddingLeft: "28px"}}>
                          <label htmlFor="Business Type">Business Type</label><br/>
                            <select className="btype" id="businesstype" name="businesstype">
                              <option value="Dispensary">Dispensary</option>
                              <option value="Delivery Service">Delivery Service</option>
                              <option value="Doctor">Doctor</option>
                              <option value="Shop">Shop</option>
                              <option value="Seed Bank">Seed Bank</option>
                            </select>
                         </div>
                      </div>
                    </form>
                </div>
                <div className="col-md-3 hideCol">
                    <h5>General Information</h5>
                    <hr/>
                    <p style={{fontSize: '15px'}}>Please fill out some basic information on your business and we'll see if we can find any matching business information to help you complete the registration process more repidly.</p>
                </div>
                </div>
            </React.Fragment>
        );
    }
}

export default StepOne;
