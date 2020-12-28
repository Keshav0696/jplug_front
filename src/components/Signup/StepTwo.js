import React, { Component, PropTypes } from 'react';
import { Field, reduxForm, getFormSyncErrors } from 'redux-form';
import moment from 'moment';
import {useSelector, connect} from 'react-redux';
import GMap from './GMap'

const required = (value) => (value ? undefined : "Required");


const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
      <input {...input} placeholder={label} type={type} className="error-input"/>
      <span className="text-red" style={{display: 'block', height: '20px'}}>{(touched && error) ? error: ''}</span>
  </div>
)

const StepTwo = (props) => {
  // let map=google.maps.Map;

  // function initMap() {
  //   map = new google.maps.Map(document.getElementById("map"), {
  //     center: { lat: -34.397, lng: 150.644 },
  //     zoom: 8,
  //   });
  // }



  const { handleSubmit, reset, setPage } = props;
  const values = useSelector(state => state.form.sellerForm && state.form.sellerForm.values);
  const validate = (e) =>{
    e.preventDefault()
    if (!props.valid) {
      props.touch("address1");
      // props.touch("address2");
      props.touch("city");
      props.touch("state");
    } else {
      setPage(3)
    }
  }

        return (
            <React.Fragment>
                <div className="step_wrap">
                  <div className="col-md-8">
                    <h2>Location</h2>
                    <form className="form-container clearfix" onSubmit={handleSubmit}>
                      <div className="form-group clearfix">
                        <div className="col-md-6">
                            <label htmlFor="businessName">Address</label>
                            <Field component={renderField} type="text" className="form-control" name="address1"  placeholder="Address" validate={[required]}/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="businessEmail">Address 2</label>
                            <Field component={renderField} type="text" className="form-control" name="address2" placeholder="Address2" />
                        </div>
                      </div>
                      <div className="form-group clearfix">
                          <div className="col-md-6">
                            <label htmlFor="businessEmail">City</label>
                            <Field component={renderField} type="text" className="form-control" name="city"  validate={[required]}placeholder="City" />
                          </div>
                          <div className="col-md-6">
                            <label htmlFor="phone">State</label>
                            <Field component={renderField} type="text" className="form-control" name="state" placeholder="State" validate={[required]}/>
                          </div>
                      </div>
                      <div class="map_style">
                        <GMap />
                      </div>
                    </form>
                </div>
                <div className="col-md-3 hideCol">
                    <h5>Location & Amenities Info</h5>
                    <hr/>
                    <p style={{fontSize: '15px'}}>Please fill out some basic information on your business and we'll see if we can find any matching business information to help you complete the registration process more repidly.</p>
                    <button style={{ width: '100%', background: "#00cc66", color: "white" }} type="submit">Continue</button>
                    <button style={{ width: '100%', color: '#aaa', background: '#f7f7f7', border: '2px solid #aaa', marginTop: '0px' }} type="submit">Back</button>
                </div>
                </div>
                <button type="button" onClick={() => {props.setPage(1)}}>Prev</button>
                <button type="submit" onClick={(e) => validate(e)}>Next</button>
            </React.Fragment>
        );
}

let MainReduxForm = reduxForm({form: 'sellerForm', destroyOnUnmount: false})(StepTwo)

export default MainReduxForm = connect((state) => ({
  synchronousError: getFormSyncErrors("sellerForm")(state), // change name here
}))(MainReduxForm);
