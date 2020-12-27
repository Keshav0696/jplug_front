import React, { Component, PropTypes } from 'react';
import { Field, reduxForm, getFormSyncErrors } from 'redux-form';
import { useSelector, connect, useDispatch } from 'react-redux';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';

const required = (value) => (value ? undefined : "Required");

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div >
    <input {...input} placeholder={label} type={type} />
    {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
  </div>
)


const pass1 = max => (value) =>
  value && value.length < max ? `Must be ${max} characters or more` : undefined;
const max1 = pass1(5);
const renderPasswordField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <React.Fragment>
    <span className="input_wrap username">
      <input {...input} placeholder={label} type={type} />
    </span>
    {touched && ((error && <span className="text-red">{error}</span>) || (warning && <span className="text-red">{warning}</span>))}
  </React.Fragment>
)


const StepFour = (props) => {
  const { handleSubmit, reset, setPage } = props;

  const values = useSelector(state => state.form.sellerForm && state.form.sellerForm.values);
  const dispatch = useDispatch()
  const history = useHistory()

  const submit = (e) => {
    e.preventDefault()
    if (!props.valid) {
      // props.touch("address1");
      // props.touch("city");
      // props.touch("state");

    } else {
      let url = "http://18.191.25.242:3000/api/auth/registerForSeller"
      let formData = new FormData();
      formData.append("businessName", values.businessName);
      formData.append("businessEmail", values.businessEmail);
      formData.append("phone", values.phone);
      formData.append("webUrl", values.webUrl);
      formData.append("businessType", values.businessType);
      formData.append("address", values.address1);
      formData.append("address2", values.address2 || '');
      formData.append("city", values.city);
      formData.append("state", values.state);
      formData.append("operationTime", 1);
      return axios.post(url, formData).then(response => {
        if (response.status === 200) {
          toast.success("Registration Successful!");
          dispatch(reset('sellerForm'));
          history.push('/login')
        }
      }).catch(e => {
        if (e && e.response && e.response.data.message) {
          toast.error(e.response.data.message);
        }
      })
    }
  }

  return (
    <React.Fragment>
      <form className="form-container clearfix">
        {/* <div className="col-md-8">
                    <h2 style={{paddingBottom: '30px'}}>Please fill in your information</h2>
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
                    <button className="btn btn-primary" onClick={() => {props.setPage(3)}}>Prev</button>
                    <button className="btn btn-primary" onClick={(e) => {submit(e)}}>Submit</button>
                  </div> */}

        <div className="col-md-8">
          <h2 style={{ paddingBottom: '30px' }}>New Account Login Information</h2>
          <div className="form-group">
            <div className="col-md-6">
              <label htmlFor="businessName">Username</label>
              <input type="text" className="form-control" id="Username" placeholder="your business name" />
            </div>
            <div className="col-md-6">
              <label htmlFor="businessEmail">Email</label>
              <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="youremail@gmail.com" />
            </div>
            <div className="col-md-6" style={{ marginTop: "5%" }}>
              <label htmlFor="pass1">Password</label>
              <input type="password" className="form-control" id="email" aria-describedby="emailHelp" placeholder="******" validate={[required, max1]} />
            </div>
            <div className="col-md-6" style={{ marginTop: "5%" }}>
              <label htmlFor="pass1">Password(again)</label>
              <input type="password" className="form-control" id="email" aria-describedby="emailHelp" placeholder="******" validate={[required, max1]} />
            </div>
          </div>
        </div>



        <div className="col-md-8" style={{ marginTop: "5%" }}>
          <h2 style={{ paddingBottom: '30px' }}>Manager/Owner</h2>
          <div className="form-group">
            <div className="col-md-6">
              <label htmlFor="businessName">First Name</label>
              <input type="text" className="form-control" id="Username" placeholder="your business name" />
            </div>
            <div className="col-md-6">
              <label htmlFor="businessEmail">Last Name</label>
              <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="youremail@gmail.com" />
            </div>
            <div className="col-md-6" style={{ marginTop: "5%" }}>
              <label htmlFor="pass1">Email</label>
              <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="******" validate={[required, max1]} />
            </div>
            <div className="col-md-6" style={{ marginTop: "5%" }}>
              <label htmlFor="pass1">Phone</label>
              <input type="phone" className="form-control" id="email" aria-describedby="emailHelp" placeholder="******" validate={[required, max1]} />
            </div>
          </div>
          <button className="btn btn-primary" onClick={() => { props.setPage(3) }}>Prev</button>
          <button className="btn btn-primary" onClick={(e) => { submit(e) }}>Submit</button>
        </div>
        <div className="col-md-3 hideCol">
          <h5>Business Information</h5>
          <hr />
          <p style={{ fontSize: '15px' }}>
            Make sure to set your hours of operation
            and fill out as much as you can on this page.
            While things like profile image and
            socila media accounts aren't required,
            they will help you gain transaction on site and
            make ypur profile more visible in search result.
					</p>
          <button style={{ width: '100%', background: "#00cc66", color: "white" }} type="submit">Continue</button>
          <button style={{ width: '100%', color: '#aaa', background: '#f7f7f7', border: '2px solid #aaa', marginTop: '0px' }} type="submit">Back</button>
        </div>
      </form>
    </React.Fragment>
  );
}

let MainReduxForm = reduxForm({ form: 'sellerForm', destroyOnUnmount: false })(StepFour)

export default MainReduxForm = connect((state) => ({
  synchronousError: getFormSyncErrors("sellerForm")(state), // change name here
}))(MainReduxForm);
