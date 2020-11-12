import React, { Component }from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import TwitterLogin from 'react-twitter-auth';
import { GoogleLogin } from 'react-google-login';
import config from '../config.json';
import axios from 'axios';
export default class Header extends Component{
   constructor() {
      super();
      this.state = { 
         loginModalVisible:false,
         registerModalVisible : false,
         isAuthenticated: false, user: null, token: ''};

     this.openLoginModal = this.openLoginModal.bind(this);
     this.openRegisterModal = this.openRegisterModal.bind(this);
  }

  logout = () => {
      this.setState({isAuthenticated: false, token: '', user: null})
  };
  
  twitterResponse = (response) => {
   const token = response.headers.get('x-auth-token');
   response.json().then(user => {
       if (token) {
           this.setState({isAuthenticated: true, user, token});
       }
   });
  };

  googleResponse = (response) => {
   const tokenBlob = new Blob([JSON.stringify({access_token: response.accessToken}, null, 2)], {type : 'application/json'});
   const options = {
       method: 'POST',
       body: tokenBlob,
       mode: 'cors',
       cache: 'default'
   };
   fetch('https://jplug.herokuapp.com/api/auth/google', options).then(r => {
       const token = r.headers.get('x-auth-token');
       this.setState({isAuthenticated: true});
       this.openLoginModal();
       r.json().then(user => {
           if (token) {
               this.setState({isAuthenticated: true, user, token})
           }
       });
   })
   
  };
  onFailure = (error) => {
    alert(error);
  }

   openLoginModal() {
      const loginModalVisible = !this.state.loginModalVisible;
      this.setState({
        loginModalVisible
      });
    }

    responseFacebook(response){
      const tokenBlob = new Blob([JSON.stringify({access_token: response.accessToken}, null, 2)], {type : 'application/json'});
      const options = {
          method: 'POST',
          body: tokenBlob,
          mode: 'cors',
          cache: 'default'
      };
      fetch('https://jplug.herokuapp.com/api/auth/facebook', options).then(r => {
          const token = r.headers.get('x-auth-token');
          this.setState({isAuthenticated: true});
          this.openLoginModal();
          r.json().then(user => {
              if (token) {
                  // this.setState({isAuthenticated: true, user, token})
              }
          });
      })
    }


    openRegisterModal() {
      const registerModalVisible = !this.state.registerModalVisible;
      this.setState({
        registerModalVisible
      });
    } 

   render(){
      let loginStyles = this.state.loginModalVisible
      ? { display: "block" }
      : { display: "none" };
      let registerStyles = this.state.registerModalVisible
      ? { display: "block" }
      : { display: "none" };
      return (
    <React.Fragment>
       <div className="header">
	<div className="container">

   

		<div className="row">
			<div className="col-md-3">
				<img alt="true" src="images/logo.png" />
			</div>
			<div className="col-md-6">
				<ul className="topsrch">
					<li>
						<input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Country" />
					</li>
					<li>
						<div className="input-group">
						  <input type="text" className="form-control" placeholder="Type of Business" />
						  <div className="input-group-prepend">
						    <button className="btn tobtn-green">SEARCH</button>
						  </div>
						</div>
					</li>
				</ul>
			</div>
			<div className="col-md-3">
				<ul className="toplinks">

            {this.state.isAuthenticated ?<>
              <h4>Authenticated</h4>
              <li>
              <button onClick={this.logout} className="btn tobtn-green">Logout</button>
            </li>
              
              </> :<><h4>Not Authenticated</h4>

            <li>
            <button class="nmrl" onClick = {this.openLoginModal} ><img alt="true" src="images/login.png"/>Login</button>
          </li>
          <li>
          <button onClick = {this.openRegisterModal} className="btn tobtn-green" href="/var/www/html/iiiii2/register.html">Join</button>

          </li>
              </> } 
				</ul>
			</div>
		</div>
	</div>
</div>
<div className="modal" id="exampleModal" style = {loginStyles} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div className="modal-dialog" role="document">
  <div className="modal-content">
    <div className="modal-header">
      <button type="button" className="close" onClick = {this.openLoginModal} data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div className="modal-body clearfix">
        <div id="first">
            <div className="myform form ">
                 <div className="logo mb-3">
                     <div className="col-md-12 text-center">
                        <h1>Login</h1>
                     </div>
                </div>
               <form  name="login">
                       <div className="form-group">
                          <label htmlFor="exampleInputEmail1">Email address</label>
                          <input type="email" name="email"  className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
                       </div>
                       <div className="form-group">
                          <label htmlFor="exampleInputEmail1">Password</label>
                          <input type="password" name="password" id="password"  className="form-control" aria-describedby="emailHelp" placeholder="Enter Password"/>
                       </div>
                       <div className="col-md-12 text-center ">
                          <button type="submit" className=" btn btn-block mybtn btn-primary tx-tfm">Login</button>
                       </div>
 
                       <div className="col-md-12 text-center mt-2 clearfix" style={{marginTop: '20px'}}>
                          <p className="text-center">By signing up you accept our <a href="/#">Terms Of Use</a></p>
                       </div>
                        {/* <div className="col-md-12 ">
                          <div className="login-or">
                             <hr className="hr-or">
                             <span className="span-or text-center" style="display: block;" >or</span>
                          </div>
                       </div> */}
                       <div className="col-md-4 mb-3">
                          <p className="text-center googlebtn">
                          <GoogleLogin
                              clientId={config.GOOGLE_CLIENT_ID}
                              onSuccess={this.googleResponse}
                              onFailure={this.googleResponse}
                           >
                             <a  className="google btn mybtn"><i className="fa fa-google-plus">
                             </i> Signup using Google
                             </a>
                           </GoogleLogin>
                          </p>
                       </div>


                       <div className="col-md-4 mb-3">
                          <p className="text-center">

                              <FacebookLogin
                               appId={config.FACEBOOK_APP_ID}
                              autoLoad
                              callback={this.responseFacebook.bind(this)}
                              render={renderProps => (
                                 <a   onClick={renderProps.onClick} className="google btn mybtn"><i className="fa fa-facebook-square">
                                 </i> Signin using Facebook
                                 </a>
                               )}
                              />
                       </p>
                       </div>


                       <div className="col-md-4 mb-3">
                          <p className="text-center twitre">
                          <TwitterLogin
                              loginUrl="http://localhost:3400/api/auth/twitter"
                              onFailure={this.twitterResponse}
                              onSuccess={this.twitterResponse}
                              requestTokenUrl="http://localhost:3400/api/auth/twitter/reverse"
                              >
                        <a className="google btn mybtn"><i className="fa fa-twitter">
                             </i> Signup using Twitter
                             </a>
                              </TwitterLogin>
                          </p>
                       </div>
                       <div className="col-md-2 mb-3"></div>


                       <div className="col-md-12 mb-3">
                       <div className="form-group">
                          <p className="text-center">Don't have account? <a href="/#"   id="signup">Sign up here</a></p>
                       </div>
                       </div>
                    </form>
             
            </div>
        </div>
    </div>

  </div>
</div>
</div>

<div className="modal" id="registerModal" style = {registerStyles} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div className="modal-dialog" role="document">
  <div className="modal-content">
    <div className="modal-header">
      <button type="button" className="close"  onClick = {this.openRegisterModal}  data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div className="modal-body">
        <div id="second">
            <div className="myform form ">
                  <div className="logo mb-3">
                     <div className="col-md-12 text-center">
                        <h1 >Signup</h1>
                     </div>
                  </div>
                  <form  name="registration">
                     <div className="form-group">
                        <label htmlFor="exampleInputEmail1">First Name</label>
                        <input type="text"  name="firstname" className="form-control" id="firstname" aria-describedby="emailHelp" placeholder="Enter Firstname" />
                     </div>
                     <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Last Name</label>
                        <input type="text"  name="lastname" className="form-control" id="lastname" aria-describedby="emailHelp" placeholder="Enter Lastname"/>
                     </div>
                     <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" name="email"  className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
                     </div>
                     <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Address</label>
                        <input type="text" name="address"  className="form-control" id="address" aria-describedby="emailHelp" placeholder="Enter address"/>
                     </div>
                     <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Password</label>
                        <input type="password" name="password" id="password"  className="form-control" aria-describedby="emailHelp" placeholder="Enter Password"/>
                     </div>
                     <div className="col-md-12 text-center mb-3">
                        <button type="submit" className=" btn btn-block mybtn btn-primary tx-tfm">Get Started htmlFor Free</button>
                     </div>
                     <div className="col-md-12 ">
                        <div className="form-group">
                           <p className="text-center"><a data-dismiss="modal" href="/#" >Already have an account?</a></p>
                        </div>
                     </div>
                  </form>
               </div>
      </div>
    </div>

  </div>
</div>
</div>
</React.Fragment>
)
                     }}