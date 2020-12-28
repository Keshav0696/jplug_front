import React from 'react';
import './login.css';
import {Link, useHistory} from 'react-router-dom';
import { Field, reduxForm, getFormSyncErrors } from 'redux-form';
import axios from 'axios';
import moment from 'moment';
import {useSelector, connect, useDispatch} from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import TwitterLogin from 'react-twitter-auth';
import { GoogleLogin } from 'react-google-login';
import config from '../../config.json';

const required = (value) => (value ? undefined : "Required");

const email = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
	? "Invalid email address"
	: undefined;

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <React.Fragment>
	  <input {...input} placeholder={label} type={type}/>
	  {touched && ((error && <span className="text-red">{error}</span>) || (warning && <span>{warning}</span>))}
  </React.Fragment>
)




function Login (props) {
	const { handleSubmit, reset } = props;
	const values = useSelector(state => state.form.loginForm && state.form.loginForm.values)
	const dispatch = useDispatch()
	const history = useHistory()

	function responseFacebook(response){
	  console.log('response', response)
	  const tokenBlob = new Blob([JSON.stringify({access_token: response.accessToken}, null, 2)], {type : 'application/json'});
	  const options = {
		  method: 'POST',
		  body: {access_token: response.accessToken},
		 //  mode: 'cors',
		 //  cache: 'default'
	  };
	  fetch('https://jplug.herokuapp.com/api/auth/facebook', options).then(r => {
		  const token = r.headers.get('x-auth-token');
		  // this.setState({isAuthenticated: true});
		  // this.openLoginModal();
		  r.json().then(user => {
			  if (token) {
				history.push('/profile')
				   // this.setState({isAuthenticated: true, user, token})
			  }
		  });
	  })
	}

	const twitterResponse = (response) => {
		if (response) {
			const token = response.headers.get('x-auth-token');
			response.json().then(user => {

				if (token) {
					history.push('/profile')
					// this.setState({isAuthenticated: true, user, token});
				}
			});
		}
	};

	const googleResponse = (response) => {
		const tokenBlob = new Blob([JSON.stringify({access_token: response.accessToken}, null, 2)], {type : 'application/json'});
		const options = {
		   method: 'POST',
		   body: {access_token: response.accessToken},
		  //  mode: 'cors',
		  //  cache: 'default'
		};
		fetch('https://jplug.herokuapp.com/api/auth/google', options).then(r => {
		   const token = r.headers.get('x-auth-token');
		   // this.setState({isAuthenticated: true});
		   // this.openLoginModal();
		   r.json().then(user => {
				if (token) {
					history.push('/login');
				   // this.setState({isAuthenticated: true, user, token})
				}
		   });
		})

	};

	function submit(e) {
		e.preventDefault()
		if (!props.valid) {
			props.touch("email");
			props.touch("password");
		} else {
			axios.post("http://18.191.25.242:3000/api/auth/login",{
				"email" : values.email,
				"password" : values.password,
				}).then(response => {
						// console.log("login response", response)
					if(response.status === 200){
						toast.success("Login Successful!");
						// dispatch(reset('loginForm'));
						const mytoken = response.data.user.token
						history.push('/profile');
						localStorage.setItem('mytoken', mytoken)
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
		<div className="login_css">
			<div className="login_page">
				<form onSubmit={submit}>
					<div className="row">
						<h2 style={{textAlign:"center"}}>Login with Social Media or Manually</h2>
						<div className="vl">
							<span className="vl-innertext">or</span>
						</div>

						<div className="col">
							<FacebookLogin
							 appId={config.FACEBOOK_APP_ID}
							// autoLoad
							callback={responseFacebook}
							render={renderProps => (
								<a href="#" className="fb btn" onClick={renderProps.onClick}>
									<i className="fa fa-facebook fa-fw"></i> Login with Facebook
								</a>
							   /*<a   onClick={renderProps.onClick} className="google btn mybtn"><i className="fa fa-facebook-square">
							   </i> Signin using Facebook
							   </a>*/
							 )}
							/>
							<a href="#" className="twitter btn">
								<TwitterLogin
								  loginUrl="http://localhost:3400/api/auth/twitter"
								  onFailure={twitterResponse}
								  onSuccess={twitterResponse}
								  requestTokenUrl="http://localhost:3400/api/auth/twitter/reverse"
								  >
										<i className="fa fa-twitter fa-fw"></i> Login with Twitter
								</TwitterLogin>
							</a>
								<a href="#" className="google btn">
							<GoogleLogin
							  clientId={config.GOOGLE_CLIENT_ID}
							  onSuccess={googleResponse}
							  onFailure={googleResponse}
						   >
									<i className="fa fa-google fa-fw"></i> Login with Google+
						   </GoogleLogin>
								</a>
						</div>
						<div className="col">
						<div className="hide-md-lg">
							<p>Or sign in manually:</p>
						</div>
							<Field name="email" component={renderField} type="email" validate={[required, email]} />
							<Field name="password"component={renderField} type="password" validate={[required]}/>
							<input type="submit"/>
						</div>
						</div>
						<div className="bottom-container">
							<div className="row">
								<div className="col m-2">
									<a href="#" style={{color:"white", background: '#dd4b39'}} className="btn" onClick={() => {history.push('/signup')}}>Sign up</a>
								</div>
								<div className="col m-2">
									<a href="#" style={{color:"white", background: '#dd4b39'}} className="btn" onClick={() => {history.push('/')}}>Forgot password?</a>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</React.Fragment>
		);
}



let MainReduxForm = reduxForm({
	form: 'loginForm',
	destroyOnUnmount: true
})(Login)

export default MainReduxForm = connect((state) => ({
  synchronousError: getFormSyncErrors("loginForm")(state), // change name here
}))(MainReduxForm);
