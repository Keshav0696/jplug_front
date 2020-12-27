import React, { Component, PropTypes } from 'react';
import { Field, reduxForm, getFormSyncErrors } from 'redux-form';
import axios from 'axios';
import moment from 'moment';
import {useSelector, connect} from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

const required = (value) => (value ? undefined : "Required");
const businessEmail = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email address"
    : undefined;
const businessName = (value) => 
  value === " "
    ? "User name required"
    : undefined;
const phone = max =>(value) => 
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
const max1 = phone(10);

const num = (value) => value && isNaN(Number(value)) ? 'Must be a number' : undefined

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div >
      <input {...input} placeholder={label} type={type}/>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
  </div>
)


const StepOne = (props) => {
  const { handleSubmit, reset, setPage } = props;
  const values = useSelector(state => state.form.joinForm && state.form.joinForm.values);

        return (
            <React.Fragment>
                <div className="step_wrap">
                <div className="col-md-8 col-sm-12">
                    <h2>Please fill in your information</h2>
                    <form className="form-container" onSubmit={handleSubmit}>
                      <div className="form-group">
                        <div className="col-md-6">
                            <label htmlFor="businessName">Business Name</label>
                            <Field component={renderField} name="businessName" validate={[required, businessName]} type="text" className="form-control" placeholder="Your Business Name" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="businessEmail">Business Email</label>
                            <Field component={renderField} name="businessEmail" validate={[required, businessEmail]} type="email" className="form-control" id="businessEmail" aria-describedby="emailHelp" placeholder="youremail@domain.com" />
                        </div>
                      </div>
                      <div className="form-group">
                          <div className="col-md-6">
                            <label htmlFor="businessEmail">Phone</label>
                            <Field component={renderField} name="phone" validate={[required, num, phone]} type="text" className="form-control" id="businessEmail" aria-describedby="emailHelp" placeholder="9999999999" />
                          </div>
                          <div className="col-md-6">
                            <label htmlFor="website">Website</label>
                            <Field component={renderField} name="webUrl" validate={[required]} type="text" className="form-control" placeholder="www.example.com"/>
                          </div>
                      </div>
                      <div className="form-group row">
                        <div className="col-md-6" style={{paddingLeft: "28px"}}>
                          <label htmlFor="Business Type">Business Type</label><br/>
                            <Field  component={renderField} className="btype" name="businessType" validate={[required]}>
                              <option value="Dispensary">Dispensary</option>
                              <option value="Delivery Service">Delivery Service</option>
                              <option value="Doctor">Doctor</option>
                              <option value="Shop">Shop</option>
                              <option value="Seed Bank">Seed Bank</option>
                            </Field>
                         </div>
                      </div>
                      <button type="submit" onClick={() => {setPage(2)}}>Next</button>
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

let MainReduxForm = reduxForm({form: 'sellerForm'})(StepOne)

export default MainReduxForm = connect((state) => ({
  synchronousError: getFormSyncErrors("sellerForm")(state), // change name here
}))(MainReduxForm);