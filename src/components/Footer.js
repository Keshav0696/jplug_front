import React, { Component }from 'react';
import { Link }from 'react-router-dom';

export default class Footer extends Component{

   render(){
      return (
    <React.Fragment>
     <footer className="footer">
	<div className="container">
		<div className="row">
			<div className="col-md-7">
			<h1 className="heading2">CORPRATE OFFICE</h1>
				<p><img alt='' src="images/ft0.png" /> 111, Tower A1, Loremlpsume Park, Gurugram India</p>
			</div>
			<div className="col-md-5">
				<h1 className="heading2">CONNECT WITH US</h1>
				<ul className="footer-socil">
					<li className=""><a href="#"><img alt='' src="images/ft1.png" /></a></li>
					<li><a href="#"><img alt='' src="images/footer/ft2.png" /></a></li>
					<li><a href="#"><img alt='' src="images/footer/ft3.png" /></a></li>
					<li><a href="#"><img alt='' src="images/footer/ft4.png" /></a></li>
					<li><a href="#"><img alt='' src="images/footer/ft5.png" /></a></li>
				</ul>
			</div>
	      		<div className="footer-new">
	      			<div className="suggested-text-home-page">
        <p>Suggested in Washington</p>
    </div>

    <div className="suggested-iteams-container">

      <div className="suggested-iteams">
		  <a href="/#">
        <img alt='' src="images/11-n.png" />
          <label>Strains</label>
		  </a>
    </div>

             <div className="suggested-iteams">
		<a href="/#">
        <img alt='' src="images/22-n.png" />
          <label>Deals</label>
		  </a>
    </div>

             <div className="suggested-iteams">
			 <a href="/#">
        <img alt='' src="images/33-n.png" />
          <label>Recreational</label>
		  </a>
    </div>

             <div className="suggested-iteams">
			 <a href="/#">
        <img alt='' src="images/44-n.png" />
          <label>Dispensaries</label>
		  </a>
    </div>

             <div className="suggested-iteams">
				 <a href="/#">
        <img alt='' src="images/55-n.png" />
          <label>Deliveries</label>
		  </a>
    </div>

             <div className="suggested-iteams">
				 <a href="/#">
        <img alt='' src="images/66-n.png" />
          <label>Doctors</label>
		  </a>
    </div>

    </div>
	      		</div>
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
					<li><Link to="/tour">Add your Business</Link></li>
				</ul>

				<p className="text-center">JointPlug Pvt.Ltd. © 2012-2020</p>
			</div>
		</div>
	</div>
</footer>
</React.Fragment>
)
                     }}
