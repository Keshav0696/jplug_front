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

class StepThree extends Component {
		constructor(props) {
				super(props);
				this.state = {
					weekday
				}
		}
		render() {
				return (
						<React.Fragment>
								<div className="step_wrap">
									<div>
										<h2>Hours of Operation</h2>
										<form className="form-container clearfix">
											{this.state.weekday.map((w, i) => <div key={i}>
													<span style={{width: "200px"}}>{w.name}</span>
													<label className="switch">
														<input type="checkbox" />
														<span className="slider round"></span>
													</label>
											</div>
											)}
										</form>
									</div>
								</div>
						</React.Fragment>
				);
		}
}

export default StepThree;
