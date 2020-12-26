import React, { Component, PropTypes } from 'react';

class StepFour extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <form className="form-container clearfix">
                  <div className="col-md-8">
                    <h2>Please fill in your information</h2>
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
                    </div>

                  <button class="btn btn-primary">Submit</button>
                </form>
            </React.Fragment>
        );
    }
}

export default StepFour;
