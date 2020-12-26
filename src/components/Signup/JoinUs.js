import React, { Component, PropTypes } from 'react';

function Join (props) {

	return (
		<>
			<div className="shadow">
					<div className="content_wrap">
					<form className="joinPage_form">
						<input type="hidden" name="do_signup" />
							<div className="signup_wrap">
							<div className="wrapper main full_page">
							<div className="module c_12 signup_content">
								<h1>Create an account on <span>Joint Plug</span></h1>
								<section className="c_6 register_column">
								<div className="c_12 row">
									<label htmlFor="username">Username</label>
									<span className="input_wrap username">
										<input name="username"  type="text" />
									</span>
								</div>
								<div className="c_12 row">
									<label htmlFor="email">Email</label>
									<span className="input_wrap email">
										<input name="email" type="email" />
									</span>
								</div>
								<div className="c_12 row">
									<label htmlFor="pass1">Password</label>
									<span className="input_wrap password">
										<input name="pass1" id="pass1" type="password" />
									</span>
								</div>
								<div className="c_12 row">
									<label htmlFor="pass2">Verify Password</label>
									<span className="input_wrap password"><input name="pass2" id="pass2" type="password" /></span>
								</div>
									<div className="c_12 row">
										<label className="one_third">Birthday</label>
										<span style={{width: "100%"}}>
											<select name="month">
												<option value="1">1</option>
												<option value="2">2</option>
												<option value="3">3</option>
												<option value="4">4</option>
												<option value="5">5</option>
												<option value="6">6</option>
												<option value="7">7</option>
												<option value="8">8</option>
												<option value="9">9</option>
												<option value="10">10</option>
												<option value="11">11</option>
												<option value="12">12</option>
											</select> /
											<select name="day">
												<option value="1">1</option>
												<option value="2">2</option>
												<option value="3">3</option>
												<option value="4">4</option>
												<option value="5">5</option>
												<option value="6">6</option>
												<option value="7">7</option>
												<option value="8">8</option>
												<option value="9">9</option>
												<option value="10">10</option>
												<option value="11">11</option>
												<option value="12">12</option>
												<option value="13">13</option>
												<option value="14">14</option>
												<option value="15">15</option>
												<option value="16">16</option>
												<option value="17">17</option>
												<option value="18">18</option>
												<option value="19">19</option>
												<option value="20">20</option>
												<option value="21">21</option>
												<option value="22">22</option>
												<option value="23">23</option>
												<option value="24">24</option>
												<option value="25">25</option>
												<option value="26">26</option>
												<option value="27">27</option>
												<option value="28">28</option>
												<option value="29">29</option>
												<option value="30">30</option>
												<option value="31">31</option>
											</select> /
											<select name="year">
												<option value="2003">2003</option>
												<option value="2002">2002</option>
												<option value="2001">2001</option>
												<option value="2000">2000</option>
												<option value="1999">1999</option>
												<option value="1998">1998</option>
												<option value="1997">1997</option>
												<option value="1996">1996</option>
												<option value="1995">1995</option>
												<option value="1994">1994</option>
												<option value="1993">1993</option>
												<option value="1992">1992</option>
												<option value="1991">1991</option>
												<option value="1990">1990</option>
												<option value="1989">1989</option>
												<option value="1988">1988</option>
												<option value="1987">1987</option>
												<option value="1986">1986</option>
												<option value="1985">1985</option>
												<option value="1984">1984</option>
												<option value="1983">1983</option>
												<option value="1982">1982</option>
												<option value="1981">1981</option>
												<option value="1980">1980</option>
												<option value="1979">1979</option>
												<option value="1978">1978</option>
												<option value="1977">1977</option>
												<option value="1976">1976</option>
												<option value="1975">1975</option>
												<option value="1974">1974</option>
												<option value="1973">1973</option>
												<option value="1972">1972</option>
												<option value="1971">1971</option>
												<option value="1970">1970</option><option value="1969">1969</option><option value="1968">1968</option><option value="1967">1967</option><option value="1966">1966</option><option value="1965">1965</option><option value="1964">1964</option><option value="1963">1963</option><option value="1962">1962</option><option value="1961">1961</option><option value="1960">1960</option><option value="1959">1959</option><option value="1958">1958</option><option value="1957">1957</option><option value="1956">1956</option><option value="1955">1955</option><option value="1954">1954</option><option value="1953">1953</option><option value="1952">1952</option><option value="1951">1951</option><option value="1950">1950</option><option value="1949">1949</option><option value="1948">1948</option><option value="1947">1947</option><option value="1946">1946</option><option value="1945">1945</option><option value="1944">1944</option><option value="1943">1943</option><option value="1942">1942</option><option value="1941">1941</option><option value="1940">1940</option><option value="1939">1939</option><option value="1938">1938</option><option value="1937">1937</option><option value="1936">1936</option><option value="1935">1935</option><option value="1934">1934</option><option value="1933">1933</option><option value="1932">1932</option><option value="1931">1931</option><option value="1930">1930</option><option value="1929">1929</option><option value="1928">1928</option><option value="1927">1927</option><option value="1926">1926</option><option value="1925">1925</option><option value="1924">1924</option><option value="1923">1923</option><option value="1922">1922</option><option value="1921">1921</option><option value="1920">1920</option><option value="1919">1919</option><option value="1918">1918</option><option value="1917">1917</option><option value="1916">1916</option><option value="1915">1915</option><option value="1914">1914</option><option value="1913">1913</option><option value="1912">1912</option><option value="1911">1911</option><option value="1910">1910</option><option value="1909">1909</option><option value="1908">1908</option><option value="1907">1907</option><option value="1906">1906</option><option value="1905">1905</option><option value="1904">1904</option><option value="1903">1903</option><option value="1902">1902</option><option value="1901">1901</option></select>
											</span>
										</div>
										<div className="c_12 row">
											<label className="one_third" htmlFor="zip">Zip</label>
											<input name="zip" type="text" style={{width: "100px"}} />
										</div>
										<div className="c_12 row">
											<label className="one_third" htmlFor="newsletter"><input type="checkbox" className="checkbox" name="newsletter" style={{position: "relative", top: "4px"}} /> Newsletter</label>
											<span className="two_thirds">
											<span className="small" style={{display: "inline-block", width: "200px",paddingBottom: "10px"}}>We <u>never</u> sell or give out your email, and you can unsubscribe no hassle at any time!</span>
											</span>
										</div>
										<div className="c_12 row">
										<label className="one_third" htmlFor="sms_specials">Text MSG Specials</label>
										<span className="two_thirds">
										<div className="textmsg">


										<span style={{cursor:"pointer", display: "inline-block"}}  className="small"><input type="checkbox" className="checkbox" name="text_specials" id="text_specials" style={{display: "inline-block"}} />  Receive SMS text message specials</span>
										<br />
										<input type="text" placeholder="Cell Phone..." className="phone" id="cell" name="cell" />
										<ul>

										</ul>
										</div>
										</span>
										</div>
										<div className="c_12 row button_row">
										<br />

										<div>
											{/*<div className="grecaptcha-badge" data-style="bottomright" style={{width: "256px", height: "60px", display: "block", transition: "right 0.3s ease 0s", position: "fixed", bottom: "14px", right: "-186px", boxShadow: "gray 0px 0px 5px", borderRadius: "2px", overflow: "hidden"}}>*/}
											<button className="g-recaptcha button_green">Register</button>
											{/*</div>*/}
										</div>
									</div>
								</section>
							<section className="c_6 social_column">
								<span className="heading">Sign in with a social network:</span>
								<div className="cta_register">

								<div className="actions">
								<span className="social_wrap"><a href="#" className="facebook" rel="nofollow"><span className="icon"><span className="icon-facebook icon2"></span></span><span className="title">Login with Facebook</span></a></span>

								<span className="social_wrap"><a href="#" className="twitter" rel="nofollow"><span className="icon"><span className="icon-twitter icon2"></span></span><span className="title">Login with Twitter</span></a></span>

								<span className="social_wrap"><a href="#" className="google" rel="nofollow"><span className="icon"><span className="icon-google-plus icon2"></span></span><span className="title">Login with Google</span></a></span>
								</div>
								</div>
								<span className="heading">SMS Terms of Service</span>
									<ul style={{fontSize: ".85em"}} className="sms_tos">
										<li>"Message and data rates may apply"</li>
										<li>You can expect up to 1-2 text messages per month</li>
										<li>Text HELP to the number you received your message from for assistance.</li>
										<li>Text STOP to the message you received your message from to stop receiving messages.</li>
										<li><a href="/#">Privacy Policy</a></li>
										<li><a href="/#">Terms of Service</a></li>
									</ul>

							</section>
							</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}

export default Join;
