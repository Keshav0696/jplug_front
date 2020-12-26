import React, { Component, PropTypes } from 'react';

const weekday = [
{
	name: "Monday",
	value: true
}, {
	name: "Tuesday",
	value: true
}, {
	name: "Wednesday",
	value: true
}, {
	name: "Thursday",
	value: true
}, {
	name: "Friday",
	value: true
}, {
	name: "Saturday",
	value: true
}, {
	name: "Sunday",
	value: true
}]
const amenities = [
{
	name: "Delivery",
	value: true
}, {
	name: "Credit Card Accepted",
	value: true
}, {
	name: "Security",
	value: true
}, {
	name: "On-Site Smoking",
	value: true
}, {
	name: "Terminal Paitent Discount",
	value: true
}, {
	name: "On-site ATM",
	value: true
}, {
	name: "Wheelchair Accessible",
	value: true
}, {
	name: "Veteran Paitent Discount",
	value: true
}]
class StepThree extends Component {
	constructor(props) {
		super(props);
		this.state = {
			weekday,
			amenities
		}
	}
	render() {
		return (
			<div className="step_wrap">
			<div>
				<div className="profile_wrap">
					<div className="profile_img">
						<i class="fa fa-camera" aria-hidden="true"></i>
					</div>
					<div>
						<button color="success">Upload Image</button>
						<p><span style={{color: 'red'}}>Note</span>: Uploading a profile image will greatly increase the clicks to your profile!</p>
					</div>
				</div>
				<div className="step_three-hours">
					<h2>Hours of Operation</h2>
					<form className="form-container clearfix">
						{this.state.weekday.map((w, i) => <div key={i}>
							<span className="name_css">{w.name}</span>
							<label className="switch">
								<input type="checkbox" />
								<span className="slider round"></span>
							</label>
							<input type="time" className="time_css"/>
						</div>
						)}
					</form>
				</div>
				<div className="social_section">
					<h2>Social Media</h2>
					<div className="form-container clearfix">
						<div className="form-group">
							<div className="col-md-6">
								 <label><i className="fa fa-facebook fa-fw"></i>facebook.com/</label><br />
							<input type="text" name="fb"/>
							</div>
							<div className="col-md-6">
								 <label><i class="fa fa-twitter"></i>Twitter.com/</label><br />
								<input type="text" name="fb"/>
							</div>
						</div>
						<div className="form-group">
								<div className="col-md-6">
									 <label><i className="fa fa-google fa-fw"></i>plus.google.com/</label><br />
									<input type="text" name="fb"/>
								</div>
								<div className="col-md-6">
									<label><i className="fa fa-pinterest fa-fw"></i>pinterest.com/</label><br />
									<input type="text" name="fb"/>
								</div>
						</div>
					</div>
				</div>
				<section>
					<h2>Amenities & Menu</h2>
					<form className="form-container clearfix">
						{this.state.amenities.map((w, i) => <div key={i}>
							<span style={{width: '180px'}}>{w.name}</span>
							<label className="switch">
								<input type="checkbox" />
								<span className="slider round"></span>
							</label>
						</div>
						)}
					</form>
				</section>
				<section className="strain_css">
					<h2>Add your strains & products</h2>
					<div>
						<input type="radio" id="" name="SaleSoftware" />
  						<label htmlFor="SaleSoftware">Sync my point-of-sale software</label>
					</div>
					<div>
						<input type="radio" id="" name="AddMenu" />
  						<label htmlFor="AddMenu">I'll add my menu afterwards</label>
					</div>
					<button>Continue</button>
				</section>
				</div>
				<div className="col-md-3 hideCol">
					<h5>Business Information</h5>
					<hr/>
					<p style={{fontSize: '15px'}}>
						Make sure to set your hours of operation 
						and fill out as much as you can on this page.
						While things like profile image and
						socila media accounts aren't required,
						they will help you gain transaction on site and
						make ypur profile more visible in search result.
					</p>
				</div>
			</div>
		);
	}
}

export default StepThree;
