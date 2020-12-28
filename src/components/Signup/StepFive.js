import React from 'react'
import { Field, reduxForm, getFormSyncErrors } from 'redux-form';
import {useSelector, connect, useDispatch} from 'react-redux';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';

const required = (value) => (value ? undefined : "Required");

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div >
      <input {...input} placeholder={label} type={type}/>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
  </div>
)



function StepFive(props) {

  const { handleSubmit, reset, setPage } = props;

  const values = useSelector(state => state.form.sellerForm && state.form.sellerForm.values);
  const dispatch = useDispatch()
  const history = useHistory()

  const submit = (e) =>{
    e.preventDefault()
    if (!props.valid) {
      // props.touch("address1");
      // props.touch("city");
      // props.touch("state");

    } else {
        let url= "http://18.191.25.242:3000/api/auth/registerForSeller"
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
          if(response.status === 200){
            toast.success("Registration Successful!");
            dispatch(reset('sellerForm'));
            history.push('/profile')
          }
        }).catch(e => {
          if (e && e.response && e.response.data.message) {
            toast.error(e.response.data.message);
          }
        })
    }
  }

    return (
        <div className="tour4 step_five">
            <div className="package_overview">
            <div className="wrapper">
            <div className="short_grid">
            <div className="grid_column featured value selected">
                <div className="ribbon-wrapper">
                    <div className="ribbon">Best Value</div>
                </div>
                <div className="title">Premium</div>
                    <span className="price"><span>$</span>999</span><span className="term" data-cents=""> /mo</span>
                    <ul className="details">
                        <li><strong>15 Mile Local</strong> Exposure</li>

                        <li><strong>Premium</strong> Map Icon</li>

                        <li><strong>Advanced</strong> Menus &amp; Products</li>

                        <li><strong>Promoted</strong> Daily Deals</li>
                        <li>Page 1 of Results</li>
                        <li>Online Pre-Ordering</li>
                        <li>Business Analytics </li>
                        <li>Call Tracking</li>
                        <li>Marketing Materials</li>
                    </ul>
                    <div className="cta">
                        <div className="trybtn">
                            <button color="warning">
                                Try
                            </button>
                            <button color="warning">
                                Buy
                            </button>
                        </div>
                        <span className="trial">7 DAY FREE TRIAL!</span>
                    </div>
                </div>
                <div className="grid_column premium">
                    <div className="ribbon-wrapper">
                        <div className="ribbon"></div>
                    </div>
                <div className="title">Featured</div>
                <span className="price"><span>$</span>549</span>
                <span className="term" data-cents=""> /mo</span>
                <ul className="details">
                    <li><strong>10 Mile Local</strong> Exposure</li>
                    <li><strong>Featured</strong> Map Icon</li>
                    <li><strong>Advanced</strong> Menus &amp; Products</li>
                    <li><strong>Promoted</strong> Daily Deals</li>
                    <li>Page 1 of Results</li>
                    <li>Online Pre-Ordering</li>
                    <li>Business Analytics </li>
                    <li>Call Tracking</li>
                    <li>Marketing Materials</li>
                </ul>
                <div className="cta">
                    <div className="trybtn">
                            <button color="warning">
                                Try
                            </button>
                            <button color="warning">
                                Buy
                            </button>
                        </div>
                        <span className="trial">7 DAY FREE TRIAL!</span></div>
                    </div>
                    <div className="grid_column verified">
                    <div className="ribbon-wrapper">
                    <div className="ribbon"></div>
                    </div>
                    <div className="title">Verified</div>
                    <span className="price"><span>$</span>249</span>
                    <span className="term" data-cents=""> /mo</span>
                    <ul className="details">
                        <li><strong>5 Mile Local</strong> Exposure</li>
                        <li><strong>Verified</strong> Map Icon</li>
                        <li><strong>Advanced</strong> Menu &amp; Products</li>
                        <li><strong>Promoted</strong> Daily Deals</li>
                        <li>Page 1 of Results</li>
                        <li>Online Pre-Ordering</li>
                        <li>Business Analytics </li>
                        <li>Call Tracking</li>
                        <li>Marketing Materials</li>
                   </ul>
                <div className="cta">
                    <div className="trybtn">
                            <button>
                                Buy
                            </button>
                        </div>
                    <span className="trial">&nbsp;</span>
                </div>
                </div>
                <div className="grid_column claimed">
                <div className="ribbon-wrapper">
                    <div className="ribbon"></div>
                </div>
                <div className="title">Claimed</div>
                    <span className="price"><span>$</span>0</span>
                    <span className="term" data-cents=""> /mo</span>
                    <ul className="details">          
                        <li><strong>Local</strong> Exposure</li>
                        <li><strong>Standard</strong> Map Icon</li>
                        <li><strong>Limited</strong> Menu &amp; Products</li>
                        <li>Page 2+ of Results</li>
                        <li>Business Analytics </li>
                   </ul>
                <div className="cta">
                <ul>
                    <li><a href="#">CHOOSE</a></li>
                </ul>
                 <span className="trial">&nbsp;</span>
                </div>
                </div>
            </div>
            <button className="btn btn-primary" onClick={() => {props.setPage(4)}}>Prev</button>
            <button className="btn btn-primary" onClick={(e) => {submit(e)}}>Submit</button>
            </div>
            </div>
        </div>
    )
}

let MainReduxForm = reduxForm({form: 'sellerForm', destroyOnUnmount: false})(StepFive)

export default MainReduxForm = connect((state) => ({
  synchronousError: getFormSyncErrors("sellerForm")(state), // change name here
}))(MainReduxForm);
