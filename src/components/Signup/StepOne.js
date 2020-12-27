import React, { Component, PropTypes } from 'react';
import { Field, reduxForm, getFormSyncErrors } from 'redux-form';
import axios from 'axios';
import moment from 'moment';
import { useSelector, connect } from 'react-redux';
import GoogleMapReact from 'google-map-react';

const required = (value) => (value ? undefined : "Required");
const businessEmail = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email address"
    : undefined;
const businessName = (value) =>
  value === ""
    ? "User name required"
    : undefined;
const phone = min => (value) =>
  value && value.length > min ? `Must be ${min} characters or more` : undefined;
const max1 = phone(10);

const num = (value) => value && isNaN(Number(value)) ? 'Must be a number' : undefined

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <input {...input} placeholder={label} type={type} className="error-input" />
    <span className="text-red" style={{ display: 'block', height: '20px' }}>{(touched && error) ? error : ''}</span>
  </div>
)
const renderSelectField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <select {...input} type={type} className="error-input">
      <option value="">Select </option>
      <option value="dispensary">Dispensary</option>
      <option value="delivery service">Delivery Service</option>
      <option value="doctor">Doctor</option>
      <option value="smoke shop">Shop</option>
      <option value="send bank">Seed Bank</option>
    </select>
    <span className="text-red" style={{ display: 'block', height: '20px' }}>{(touched && error) ? error : ''}</span>
  </div>
)

const StepOne = (props) => {
  const { handleSubmit, reset, setPage } = props;
  const values = useSelector(state => state.form.sellerForm && state.form.sellerForm.values);
  const validate = (e) => {
    e.preventDefault()
    if (!props.valid) {
      props.touch("businesEmail");
      props.touch("businessName");
      props.touch("businessType");
      props.touch("phone");
      props.touch("webUrl");
    } else {
      // console.log(formValues)
      // axios.post("http://18.191.25.242:3000/api/auth/registerForBuyer",{
      //   "username" : values.username,
      //   "address1" : "test address",
      //   "email" : values.email,
      //   "password" : values.pass1,
      //   "dob" : moment(`${values.year}-${values.month}-${values.day}`,'YYYY-M-DD').format('YYYY-MM-DD[T]HH:ss:mm'),
      //   "is_newsletter" : values.newsletter,
      //   "zip_code": values.zip,
      //    "receive_message" : values.text_specials
      //   }).then(response => {
      //     if(response.status === 200){
      //       toast.success("Registration Successful!");
      //       dispatch(reset('joinForm'));
      //     }
      //   }).catch(console.log)
      setPage(2)
    }
  }

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
                <Field component={renderField} name="phone" validate={[required]} type="text" className="form-control" id="businessEmail" aria-describedby="emailHelp" placeholder="9999999999" />
              </div>
              <div className="col-md-6">
                <label htmlFor="website">Website</label>
                <Field component={renderField} name="webUrl" validate={[required]} type="text" className="form-control" placeholder="www.example.com" />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-md-6" style={{ paddingLeft: "28px" }}>
                <label htmlFor="Business Type">Business Type</label><br />
                <Field component={renderSelectField} type="select" className="btype" name="businessType" validate={[required]} />
              </div>
            </div>
            <button type="submit" onClick={(e) => { validate(e) }}>Next</button>
          </form>
        </div>
        <div className="col-md-3 hideCol">
          <h5>General Information</h5>
          <hr />
          <p style={{ fontSize: '15px' }}>Please fill out some basic information on your business and we'll see if we can find any matching business information to help you complete the registration process more repidly.</p>
          <button style={{ width: '100%', background: "#00cc66", color: "white" }} type="submit">Continue</button>
          <button style={{ width: '100%', color: '#aaa', background: '#f7f7f7', border: '2px solid #aaa', marginTop: '0px' }} type="submit">Back</button>
        </div>
        {/* <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDjmXvaXlbAaZfhzg-pLphXIlZVcLMMkJY'}}
          defaultCenter={ {
            lat: 59.95,
            lng: 30.33
          }}
          defaultZoom={11}
        /> */}
      </div>
    </React.Fragment>
  );
}

let MainReduxForm = reduxForm({ form: 'sellerForm', destroyOnUnmount: false })(StepOne)

export default MainReduxForm = connect((state) => ({
  synchronousError: getFormSyncErrors("sellerForm")(state), // change name here
}))(MainReduxForm);