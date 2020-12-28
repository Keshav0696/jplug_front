import React, { Component, PropTypes } from 'react';
import { Field, reduxForm, getFormSyncErrors } from 'redux-form';
import {useSelector, connect, useDispatch} from 'react-redux';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';

const required = (value) => (value ? undefined : "Required");
const email = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email address"
    : undefined;
const phone = min =>(value) => 
  value && value.length > min ? `Must be ${min} characters or more` : undefined;
const max1 = phone(10);

const num = (value) => value && isNaN(Number(value)) ? 'Must be a number' : undefined
const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
      <input {...input} placeholder={label} type={type} className="error-input"/>
      <span className="text-red" style={{display: 'block', height: '20px'}}>{(touched && error) ? error: ''}</span>
  </div>
)

const StepFour = (props) => {
    const { handleSubmit, reset, setPage } = props;

  const values = useSelector(state => state.form.sellerForm && state.form.sellerForm.values);
  
  const validate = (e) =>{
    e.preventDefault()
    if (!props.valid) {
      // props.touch("address1");
      // props.touch("city");
      // props.touch("state");
    } else {
      setPage(5)
    }
  }
  // const values = useSelector(state => state.form.sellerForm && state.form.sellerForm.values);
  // const dispatch = useDispatch()
  // const history = useHistory()

  // const submit = (e) =>{
  //   e.preventDefault()
  //   if (!props.valid) {
  //     // props.touch("address1");
  //     // props.touch("city");
  //     // props.touch("state");

  //   } else {
  //       let url= "http://18.191.25.242:3000/api/auth/registerForSeller"
  //       let formData = new FormData();
  //       formData.append("businessName", values.businessName);
  //       formData.append("businessEmail", values.businessEmail);
  //       formData.append("phone", values.phone);
  //       formData.append("webUrl", values.webUrl);
  //       formData.append("businessType", values.businessType);
  //       formData.append("address", values.address1);
  //       formData.append("address2", values.address2 || '');
  //       formData.append("city", values.city);
  //       formData.append("state", values.state);
  //       formData.append("operationTime", 1);
  //       return axios.post(url, formData).then(response => {
  //         if(response.status === 200){
  //           toast.success("Registration Successful!");
  //           dispatch(reset('sellerForm'));
  //           history.push('/profile')
  //         }
  //       }).catch(e => {
  //         if (e && e.response && e.response.data.message) {
  //           toast.error(e.response.data.message);
  //         }
  //       })
  //   }
  // }

        return (
            <React.Fragment>
                <form className="step_four">
                  <h2 style={{paddingBottom: '20px', paddingTop: '20px'}}>New Account Login Information</h2>
                  <div className="form-container clearfix">
                      <div className="form-group">
                        <div className="col-md-6">
                            <label htmlFor="userName">User Name</label>
                            <Field  component={renderField} type="text"  className="form-control" id="businessName"  placeholder="xyz123" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="email">Email</label>
                            <Field  component={renderField} type="email"  className="form-control" id="businessEmail" aria-describedby="emailHelp" placeholder="youremail@gmail.com" />
                        </div>
                      </div>
                      <div className="form-group">
                          <div className="col-md-6">
                            <label htmlFor="phone">Password</label>
                            <Field  component={renderField} type="password" className="form-control" id="phone"/>
                          </div>
                          <div className="col-md-6">
                            <label htmlFor="phone">Password(again)</label>
                            <Field  component={renderField} type="password" className="form-control" id="phone"/>
                          </div>
                      </div>
                      </div>


                      <h2 style={{paddingBottom: '20px', paddingTop: '20px'}}>Manager / Owner</h2>
                      <div className="form-container clearfix">
                      <div className="form-group">
                        <div className="col-md-6">
                            <label htmlFor="userName">First Name</label>
                            <Field  component={renderField} type="text"  className="form-control" id="businessName"  placeholder="xyz123" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="email">Last Name</label>
                            <Field  component={renderField} type="text"  className="form-control" id="businessEmail" aria-describedby="emailHelp" placeholder="youremail@gmail.com" />
                        </div>
                      </div>
                      <div className="form-group">
                          <div className="col-md-6">
                            <label htmlFor="phone">Email</label>
                            <Field  component={renderField}  type="email" className="form-control" id="email"/>
                          </div>
                          <div className="col-md-6">
                            <label htmlFor="phone">Phone</label>
                            <Field component={renderField} type="text" className="form-control" id="phone"/>
                          </div>
                      </div>
	                  </div>
                    <button className="btn btn-primary" onClick={() => {props.setPage(3)}}>Prev</button>
                    <button type="submit" onClick={(e) => validate(e)}>Next</button>
                    {/*<button className="btn btn-primary" onClick={(e) => {submit(e)}}>Submit</button>*/}
                </form>
            </React.Fragment>
        );
}

let MainReduxForm = reduxForm({form: 'sellerForm', destroyOnUnmount: false})(StepFour)

export default MainReduxForm = connect((state) => ({
  synchronousError: getFormSyncErrors("sellerForm")(state), // change name here
}))(MainReduxForm);
