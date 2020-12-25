import React from 'react';
import './login.css';
import Footer from '../Footer';
import {Link, useHistory} from 'react-router-dom';

function Login (props) {
	const history = useHistory()
				return (
						<React.Fragment>
						<div className="login_css">
									<div className="login_container">
										<form>
											<div className="row">
												<h2 style={{textAlign:"center"}}>Login with Social Media or Manually</h2>
												<div className="vl">
													<span className="vl-innertext">or</span>
												</div>

												<div className="col">
													<a href="#" className="fb btn">
														<i className="fa fa-facebook fa-fw"></i> Login with Facebook
													 </a>
													<a href="#" className="twitter btn">
														<i className="fa fa-twitter fa-fw"></i> Login with Twitter
													</a>
													<a href="#" className="google btn"><i className="fa fa-google fa-fw">
														</i> Login with Google+
													</a>
												</div>

												<div className="col">
													<div className="hide-md-lg">
														<p>Or sign in manually:</p>
													</div>

													<input type="text" name="username" placeholder="Username" required />
													<input type="password" name="password" placeholder="Password" required/>
													<input type="submit" value="Login"/>
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
								<Footer />
						</React.Fragment>
				);
}

export default Login;
