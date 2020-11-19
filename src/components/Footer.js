import React, { Component }from 'react';

export default class Footer extends Component{
   
   render(){
      return (
    <React.Fragment>
     <footer className="footer">
	<div className="container">
		<div className="row">
			<div className="col-md-7">
			<h1 className="heading2">CORPRATE OFFICE</h1>
				<p><img src="images/ft0.png" /> 111, Tower A1, Loremlpsume Park, Gurugram India</p>
			</div>
			<div className="col-md-5">				
				<h1 className="heading2">CONNECT WITH US</h1>
				<ul className="footer-socil">
					<li className=""><a href="#"><img src="images/ft1.png" /></a></li>
					<li><a href="#"><img src="images/footer/ft2.png" /></a></li>
					<li><a href="#"><img src="images/footer/ft3.png" /></a></li>
					<li><a href="#"><img src="images/footer/ft4.png" /></a></li>
					<li><a href="#"><img src="images/footer/ft5.png" /></a></li>
				</ul>
			</div>
	      		<ul className="footer-socil2">
			  <li><a href="#"><i className="fa fa-facebook"></i></a></li>
			  <li><a href="#"><i className="fa fa-twitter"></i></a></li>
			  <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
			  <li><a href="#"><i className="fa fa-pinterest-p"></i></a></li>
			  <li><a href="#"><i className="fa fa-reddit-alien"></i></a></li>
			  <li><a href="#"><i className="fa fa-maxcdn"></i></a></li>
			  <li><a href="#"><i className="fa fa-whatsapp"></i></a></li>
			</ul>
			<div className="col-md-12">
				<ul className="footelink">
					<li>COMPANY</li>
					<li><a href="#">Contact Us</a></li>
					<li><a href="#">Blog</a></li>
					<li><a href="#">Career</a></li> 
				</ul>
				<ul className="footelink">
					<li>USERS</li>
					<li><a href="#">Login</a></li>
					<li><a href="#">Register</a></li>
					<li><a href="#">Forget Password?</a></li> 
				</ul>
 
				<p className="text-center">JointPlug Pvt.Ltd. © 2012-2020</p>
			</div>
		</div>
	</div>
</footer>
</React.Fragment>
)
                     }}
