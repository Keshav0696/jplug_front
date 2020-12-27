import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import $ from 'jquery';
const $ = window.$;


export default class Homepage extends Component {
	constructor() {
		super()
		this.state = {

		}
	}

	render() {
		return (

			<React.Fragment>

			<div className="body_wrap">
			<div className="shadow">
			<div className="content_wrap">
			<div className="c_12 module tour tour3">
			<div className="slide new_intro2" data-position="60">
				<span className="wrapper max1200">
					<span className="intro_text">
						<h1>Grow your business with Where's Weed</h1>
					</span>
					<form>
						<div className="intro_location">
							<p>Please enter your city or zip-code to find business solutions in your area.</p>
							<input type="text" placeholder="eg: Denver, CO" name="usec" value="Lucknow, UP" />
							<input type="submit" className="intro_submit" value="Go" />
						</div>
					</form>
				</span>
			</div>
			<div className="slide business_select" data-position="285">
			<span className="wrapper max1200">
				<ul id="types_tab_holder">
					<li data-type="dispensary" className="active">
						<a href="#" onClick="change_tab('dispensary'); return false;" className="active">
						<span className="icon-store5"></span>
						<span className="label">Dispensaries</span>
						</a>
					</li>
					<li data-type="delivery">
						<a href="#" onClick="change_tab('delivery'); return false;">
						<span className="icon-logistics3"></span>
						<span className="label">Deliveries</span>
						</a>
					</li>
					<li data-type="clinic">
						<a href="#" onClick="change_tab('clinic'); return false;">
						<span className="icon-medical88"></span>
						<span className="label">Doctors &amp; Clinics</span>
						</a>
					</li>
				</ul>
			</span>
			</div>
			</div>
			<div className="c_12 module tour bg_white">
			<div>
				<div className="tour_right">
				<div className="package_tab dispensary" data-tab="dispensary" style={{}}>
				<div className="c12 tour4">
				<div className="package_preview">
				<div className="wrapper">
				<div className="c_4 package_selection">
					<h2>Select a package:</h2>
					<ul>
						<li className="premium package_select active" data-package="premium">
							<div className="title">Premium <span> Listing</span></div>
							<div className="price"><span className="price"><span>$</span>999</span><span className="term" data-cents=""> /mo</span></div>
						</li>

						<li className="featured package_select" data-package="featured">
							<div className="title">Featured <span> Listing</span></div>
							<div className="price"><span className="price"><span>$</span>549</span><span className="term" data-cents=""> /mo</span></div>
						</li>

						<li className="verified package_select" data-package="verified">
							<div className="title">Verified <span> Listing</span></div>
							<div className="price"><span className="price"><span>$</span>249</span><span className="term" data-cents=""> /mo</span></div>
						</li>

						<li className="claimed package_select" data-package="claimed">
							<div className="title">Claimed <span> Listing</span></div>
							<div className="price"><span className="price"><span>$</span>0</span><span className="term" data-cents=""> /mo</span></div>
						</li>
					</ul>
				</div>

			<div className="c_4 listing_preview">
			<h2>Listing Preview</h2>

			<ul className="results specials_listings">
			<li className="card  dispensary verified premium featured" data-result="277" id="result_277" itemScope="" itemType="http://schema.org/LocalBusiness">

			<a href="" itemProp="url" title="Your Business Here" data-value="1" style={{display: "block"}}>
			<div className="entry">

			<div className="card_contents">
			<span className="tag_order">PRE-ORDER</span>
			<div className="entry_pic_wrap">
			<span className="entry_pic_banner">
			<span className="featured_star orange"></span>
			<img src="/images/temp_disp2.jpg" /></span>
			<meta itemProp="image" content="https://wheresweed.com/listing_images/160x90/default_new.png" />


			<span className="icons"></span><img src="/images/temp_disp2.jpg" className="main_t" />
			</div>
			<span className="entry_title" itemProp="name">Your Business Here</span>
			<span className="entry_address">
			<span className="specials_address" itemProp="address" itemScope="" itemType="http://schema.org/PostalAddress">

			<span itemProp="addressLocality">Denver</span>, <span itemProp="addressRegion">CO</span>
			</span> <span className="entry_category">Dispensary</span>
			</span>
			<div className="entry_right">

			<div className="stars_wrap small" itemProp="aggregateRating" itemScope="" itemType="http://schema.org/AggregateRating">
			<div className="stars_empty"><span className="icon-5stars"></span></div>
			<div className="stars_full" style={{width: "79%" }}>
			<div className="stars_full_inner"><span className="icon-5stars"></span></div>
			</div>
			<meta itemProp="ratingValue" content="3.9" /><meta itemProp="ratingCount" content="31" />
			</div>

			</div>

			<div className="featured_reviews_container">
			<div className="featured_review">
			<span className="review_thumb"><img alt="trouzy" src="/listing_images/full/default_new.png" /></span>
			<p className="review_content" itemProp="description">This place is the greatest!</p>
			<div className="bottom_row">
			<div className="stars_wrap small">
			<div className="stars_empty"><span className="icon-5stars"></span></div>
			<div className="stars_full" style={{ width: "100%" }} content="5" itemProp="ratingValue">
			<div className="stars_full_inner"><span className="icon-5stars"></span></div>
			</div>
			</div>
			<span className="author">Posted by <span className="name" itemProp="author">sample_user</span></span>
			</div>
			</div>
			<div className="featured_review">
			<span className="review_thumb"><img alt="trouzy" src="/listing_images/full/default_new.png" /></span>
			<p className="review_content" itemProp="description">Best product in town, i'll be a regular here!</p>
			<div className="bottom_row">
			<div className="stars_wrap small">
			<div className="stars_empty"><span className="icon-5stars"></span></div>
			<div className="stars_full" style={{ width: "100%" }} content="5" itemProp="ratingValue">
			<div className="stars_full_inner"><span className="icon-5stars"></span></div>
			</div>
			</div>
			<span className="author">Posted by <span className="name" itemProp="author">sample_user</span></span>
			</div>
			</div>
			</div>
			</div>
			</div>
			</a>
			<a className="close_btn" href="" data-ct="filter_close"> <span className="icon-cancel-circle"></span></a>
			</li>

			</ul>




			</div>

			<div className="c_4 map">
			<h2>Local Reach</h2>
			<div className="map_wrap">
			<img className="map_image" src="/images/map_preview_premium.jpg" />
			</div>
			</div>
			</div>
			</div>

			<div className="package_overview">

			<div className="wrapper">
			<h2>Pricing Guide</h2>


			<div className="short_grid">
			<div className="grid_column premium">
			<div className="ribbon-wrapper">
			<div className="ribbon"></div>
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
			<ul>

			<li className="buy"><Link to="/signup">CHOOSE</Link></li>
			</ul>
			<span className="trial">7 DAY FREE TRIAL!</span>
			</div>
			</div><div className="grid_column featured value selected">
			<div className="ribbon-wrapper">
			<div className="ribbon">Best Value</div>
			</div>
			<div className="title">Featured</div>
			<span className="price"><span>$</span>549</span><span className="term" data-cents=""> /mo</span>
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
			<ul>

			<li className="buy"><Link to="/signup">CHOOSE</Link></li>
			</ul>
			<span className="trial">7 DAY FREE TRIAL!</span>
			</div>
			</div><div className="grid_column verified">
			<div className="ribbon-wrapper">
			<div className="ribbon"></div>
			</div>

			<div className="title">Verified</div>
			<span className="price"><span>$</span>249</span><span className="term" data-cents=""> /mo</span>
			<ul className="details">										<li><strong>5 Mile Local</strong> Exposure</li>
			<li><strong>Verified</strong> Map Icon</li>
			<li><strong>Advanced</strong> Menu &amp; Products</li>
			<li><strong>Promoted</strong> Daily Deals</li>
			<li>Page 1 of Results</li>
			<li>Online Pre-Ordering</li>
			<li>Business Analytics </li>
			<li>Call Tracking</li>
			<li>Marketing Materials</li>											</ul>

			<div className="cta">
			<ul>
			<li><Link to="/signup?package=verified">CHOOSE</Link></li>
			</ul>
			<span className="trial">&nbsp;</span>
			</div>
			</div><div className="grid_column claimed">
			<div className="ribbon-wrapper">
			<div className="ribbon"></div>
			</div>

			<div className="title">Claimed</div>
			<span className="price"><span>$</span>0</span><span className="term" data-cents=""> /mo</span>
			<ul className="details">										<li><strong>Local</strong> Exposure</li>
			<li><strong>Standard</strong> Map Icon</li>
			<li><strong>Limited</strong> Menu &amp; Products</li>

			<li>Page 2+ of Results</li>
			<li>Business Analytics </li>

			</ul>
			<div className="cta">
			<ul>
			<li><Link to="/signup?package=claimed">CHOOSE</Link></li>
			</ul>
			<span className="trial">&nbsp;</span>
			</div>								</div>
			</div>

			</div>
			</div>
			<div className="package_comparison">
			<div className="wrapper">

			<div className="compare_select" style={{display: "none"}}>
			<ul>
			<li className="selected">Feature Comparison</li><li>Feature Details</li>
			</ul>
			</div>


			<div className="comparison_wrap">
			<div className="comparison_table_wrap">
			<table cellSpacing="0" className="ad">
			<thead>
			<tr>
			<th className="title outreach">
			Local Outreach
			</th>

			<th className="premium">
			<div className="package">Premium</div>
			<span className="price"><span>$</span>999</span><span className="term" data-cents=""> /mo</span>
			<div className="cta"><Link to="/signup?package=premium&amp;&amp;type=">Choose </Link></div>
			</th>

			<th className="featured">
			<div className="package">Featured</div>
			<span className="price"><span>$</span>549</span><span className="term" data-cents=""> /mo</span>
			<div className="cta"><Link to="/signup?package=featured&amp;type=">Choose</Link></div>
			</th>

			<th className="verified">
			<div className="package">Verified</div>
			<span className="price"><span>$</span>249</span><span className="term" data-cents=""> /mo</span>
			<div className="cta"><Link to="/signup?package=verified&amp;type=">Choose</Link></div>
			</th>

			<th className="claimed">
			<div className="package">Claimed</div>
			<span className="price"><span>$</span>0</span><span className="term" data-cents=""> /mo</span>
			<div className="cta"><Link to="/signup?type=">Choose</Link></div>
			</th>
			</tr>
			</thead>
			<tbody>
			<tr data-toggle="expand" data-target=".full_detail.lsize" className="expanded">
			<td className="feature">
			Listing Size
			</td>
			<td className="option">
			4x size
			</td>
			<td className="option">
			2x size
			</td>
			<td className="option">
			Standard
			</td>
			<td className="option">
			Standard
			</td>
			</tr>
			<tr className="full_detail lsize expand">
			<td colSpan="5">
			<span className="icon-graphic icon"></span>
			<span className="detail_desc">

			<p>Featured &amp; Premium businesses benefit from a listing size 2-4x as large as a standard listing in search results, greatly improving profile visibility. Additionally, Premium businesses get the chance to showcase reviews on their business in the search results. </p>

			</span>
			</td>
			</tr>

			<tr className="trbg" data-toggle="expand" data-target=".full_detail.isize">
			<td className="feature iconsize">
			Icon Size
			</td>
			<td className="option">
			<img src="/images/icon_new_premium.png" />
			</td>
			<td className="option">
			<img src="/images/icon_new_featured.png" />
			</td>
			<td className="option">
			<img src="/images/icon_new_standard.png" />
			</td>
			<td className="option">
			<img src="/images/icon_new_unclaimed.png" />
			</td>
			</tr>
			<tr className="full_detail isize trbg">
			<td colSpan="5">
			<span className="icon-location2 icon"></span>
			<span className="detail_desc">

			<p>Stand out with larger map icons when users are searching locally on the map. A larger Map Icon will help your listing stand out and drive more traffic. </p>

			</span>
			</td>
			</tr>

			<tr data-toggle="expand" data-target=".full_detail.reach">
			<td className="feature reach">
			Extended Reach
			</td>
			<td className="option">
			15 miles
			</td>
			<td className="option">
			10 miles
			</td>
			<td className="option">
			5 Miles
			</td>
			<td className="option">
			None
			</td>
			</tr>
			<tr className="full_detail reach">
			<td colSpan="5">
			<span className="icon-broadcast icon"></span>
			<span className="detail_desc">

			<p>Business exposure is based off of a radius from your map marker. The larger the radius, the more patient exposure you get. Unlike our competitors, we do not have pre-defined regions for businesses. Everything works off of your map marker location and the patient's current location. </p>

			</span>
			</td>
			</tr>

			<tr className="trbg" data-toggle="expand" data-target=".full_detail.rank">
			<td className="feature">
			Ranking Tier
			</td>
			<td className="option">
			1st Tier
			</td>
			<td className="option">
			2nd Tier
			</td>
			<td className="option">
			3rd Tier
			</td>
			<td className="option">
			4th Tier
			</td>
			</tr>
			<tr className="full_detail rank trbg">
			<td colSpan="5">
			<span className="icon-business icon"></span>
			<span className="detail_desc">

			<p>Where's Weed utilizes a custom built algorithm to determine where your business falls within search results. It first takes into your account package level then locality, business activity, and customer attributes. You can ensure top exposure in search results by selecting a premium or featured package. </p>

			</span>
			</td>
			</tr>

			</tbody>
			</table>
			</div>

			<div className="comparison_table_wrap">
			<table cellSpacing="0">
			<thead>
			<tr className="expand_head">
			<th className="title menus">
			Menus &amp; Products
			</th>

			<th>&nbsp;</th>
			<th>&nbsp;</th>
			<th>&nbsp;</th>
			<th>&nbsp;</th>
			</tr>
			</thead>
			<tbody>
			<tr data-toggle="expand" data-target=".full_detail.pos" className="expanded">
			<td className="feature">
			POS Integration
			</td>
			<td className="option">
			<span className="icon-checkmark-2"></span>
			</td>
			<td className="option">
			<span className="icon-checkmark-2"></span>
			</td>
			<td className="option">
			<span className="icon-checkmark-2"></span>
			</td>
			<td className="option">
			<span className="icon-checkmark-2"></span>
			</td>
			</tr>
			<tr className="full_detail pos expand">
			<td colSpan="5">
			<span className="icon-commerce icon"></span>
			<span className="detail_desc">

			<p>Where's Weed integrates with a number of popular industry point-of-sale systems including MJ Freeway, GreenBits, Proteus420 and more. Save time by automatically syncing strain and product information directly from your POS system to your Where's Weed menu.</p>

			</span>
			</td>
			</tr>
			<tr className="trbg" data-toggle="expand" data-target=".full_detail.syndi">
			<td className="feature">
			Menu Syndication
			</td>
			<td className="option">
			<span className="icon-checkmark-2"></span>
			</td>
			<td className="option">
			<span className="icon-checkmark-2"></span>
			</td>
			<td className="option">
			<span className="icon-checkmark-2"></span>
			</td>
			<td className="option">
			<span className="icon-checkmark-2"></span>
			</td>
			</tr>
			<tr className="full_detail syndi trbg">
			<td colSpan="5">
			<span className="icon-data45 icon"></span>
			<span className="detail_desc">

			<p>Broadcast your product and pricing information everywhere your customers are looking -- including 3rd party websites like Facebook, popular marijuana menus, and more! <br /><br />

			* We do not own and are NOT affiliated directly with any of these companies</p>

			</span>
			</td>
			</tr>

			<tr data-toggle="expand" data-target=".full_detail.oo">
			<td className="feature">
			Online Pre-Ordering
			</td>
			<td className="option">
			<span className="icon-checkmark-2"></span>
			</td>
			<td className="option">
			<span className="icon-checkmark-2"></span>
			</td>
			<td className="option">
			<span className="icon-checkmark-2"></span>
			</td>
			<td className="option"> </td>
			</tr>
			<tr className="full_detail oo">
			<td colSpan="5">
			<span className="icon-shopping111 icon"></span>
			<span className="detail_desc">

			<p>Allow your customers to pre-order their purchases directly from your Where's Weed menu or your own website! Our simple integration allows you to pre-verify patients, set up pre-ordering hours, delivery fees/minimums and more!</p>

			</span>
			</td>
			</tr>

			<tr className="trbg" data-toggle="expand" data-target=".full_detail.u_prod">
			<td className="feature">
			Unlimited Products
			</td>
			<td className="option">
			<span className="icon-checkmark-2"></span>
			</td>
			<td className="option">
			<span className="icon-checkmark-2"></span>
			</td>
			<td className="option">
			<span className="icon-checkmark-2"></span>
			</td>
			<td className="option">
			<span className="icon-checkmark-2"></span>
			</td>
			</tr>
			<tr className="full_detail u_prod trbg">
			<td colSpan="5">
			<span className="icon-business-card icon"></span>
			<span className="detail_desc">

			<p>Your customers are looking for their favorite products! Make sure your business is found in product related searches by adding your entire product offering to Where's Weed.</p>

			</span>
			</td>
			</tr>


			<tr data-toggle="expand" data-target=".full_detail.p_photos">
			<td className="feature">
			Product Photos
			</td>
			<td className="option">
			<span className="icon-checkmark-2"></span>
			</td>
			<td className="option">
			<span className="icon-checkmark-2"></span>
			</td>
			<td className="option">
			<span className="icon-checkmark-2"></span>
			</td>
			<td className="option"> </td>
			</tr>
			<tr className="full_detail p_photos">
			<td colSpan="5">
			<span className="icon-photo icon"></span>
			<span className="detail_desc">

			<p>Stand out from your competitors by showcasing beautiful imagery of your marijuana strains and products!</p>

			</span>
			</td>
			</tr>

			<tr className="trbg" data-toggle="expand" data-target=".full_detail.lab">
			<td className="feature trbg">
			Lab Results
			</td>
			<td className="option">
			<span className="icon-checkmark-2"></span>
			</td>
			<td className="option">
			<span className="icon-checkmark-2"></span>
			</td>
			<td className="option">
			<span className="icon-checkmark-2"></span>
			</td>
			<td className="option"> </td>
			</tr>
			<tr className="full_detail lab trbg">
			<td colSpan="5">
			<span className="icon-three-test-tubes icon"></span>
			<span className="detail_desc">

			<p>Establish the quality and characteristics of your marijuana products by listing your lab results directly with your products.</p>

			</span>
			</td>
			</tr>

			</tbody>
			</table>
			</div>

			<div className="comparison_table_wrap">
			<table cellSpacing="0">
			<thead>
			<tr className="expand_head">
			<th className="title deals">
			Specials &amp; Deals
			</th>

			<th>&nbsp;</th>
			<th>&nbsp;</th>
			<th>&nbsp;</th>
			<th>&nbsp;</th>
			</tr>
			</thead>
			<tbody>
			<tr data-toggle="expand" data-target=".full_detail.uspec" className="expanded">
			<td className="feature">
			Deals Platform
			</td>
			<td className="option">
			<span className="icon-checkmark-2"></span>
			</td>
			<td className="option">
			<span className="icon-checkmark-2"></span>
			</td>
			<td className="option">
			<span className="icon-checkmark-2"></span>
			</td>
			<td className="option">
			<span className="icon-checkmark-2"></span>
			</td>
			</tr>
			<tr className="full_detail uspec expand">
			<td colSpan="5">
			<span className="icon-price-tag5 icon"></span>
			<span className="detail_desc">

			<p>Target deal-seekers in your community by posting your daily deals to Where's Weed! You can schedule them weeks or even months in advance for a hassle free marketing campaign. </p>

			</span>
			</td>
			</tr>





			</tbody>
			</table>
			</div>

			<div className="comparison_table_wrap">
			<table cellSpacing="0">
			<thead>
			<tr className="expand_head">
			<th className="title insights">
			Analytics &amp; Insights
			</th>

			<th>&nbsp;</th>
			<th>&nbsp;</th>
			<th>&nbsp;</th>
			<th>&nbsp;</th>
			</tr>
			</thead>
			<tbody>
			<tr data-toggle="expand" data-target=".full_detail.visitors" className="expanded">
			<td className="feature">
			Visitor Analytics
			</td>
			<td className="option">
			<span className="icon-checkmark-2"></span>
			</td>
			<td className="option">
			<span className="icon-checkmark-2"></span>
			</td>
			<td className="option">
			<span className="icon-checkmark-2"></span>
			</td>
			<td className="option">
			<span className="icon-checkmark-2"></span>
			</td>
			</tr>
			<tr className="full_detail visitors expand">
			<td colSpan="5">
			<span className="icon-educational8 icon"></span>
			<span className="detail_desc">

			<p>Our detailed profile analytics provide valuable insights into your performance on Where's Weed, customer acquisition, market demographics and more. </p>

			</span>
			</td>
			</tr>

			<tr className="trbg" data-toggle="expand" data-target=".full_detail.preorder_insights">
			<td className="feature">
			Pre-Order Insights
			</td>
			<td className="option">
			<span className="icon-checkmark-2"></span>
			</td>
			<td className="option">
			<span className="icon-checkmark-2"></span>
			</td>
			<td className="option">
			<span className="icon-checkmark-2"></span>
			</td>
			<td className="option"> </td>
			</tr>
			<tr className="full_detail preorder_insights trbg">
			<td colSpan="5">
			<span className="icon-money-1 icon"></span>
			<span className="detail_desc">

			<p> Gain valuable insights from pre-order data and better understand your customer's preferred products. With these insights you can optimize your product offerings and increase efficiency. </p>

			</span>
			</td>
			</tr>

			<tr data-toggle="expand" data-target=".full_detail.call_tracking">
			<td className="feature">
			Call Tracking
			</td>
			<td className="option">
			<span className="icon-checkmark-2"></span>
			</td>
			<td className="option">
			<span className="icon-checkmark-2"></span>
			</td>
			<td className="option">
			<span className="icon-checkmark-2"></span>
			</td>
			<td className="option"> </td>
			</tr>
			<tr className="full_detail call_tracking">
			<td colSpan="5">
			<span className="icon-cash1 icon"></span>
			<span className="detail_desc">

			<p>Our integrated call tracking allows us to provide real insights about your customers. Not only does this allow you to attribute customer traffic directly to Where's Weed, it also allows you to analyze and compare various call metrics.</p>

			</span>
			</td>
			</tr>

			<tr className="trbg" data-toggle="expand" data-target=".full_detail.reputation">
			<td className="feature">
			Reputation Management
			</td>
			<td className="option">
			<span className="icon-checkmark-2"></span>
			</td>
			<td className="option">
			<span className="icon-checkmark-2"></span>
			</td>
			<td className="option">
			<span className="icon-checkmark-2"></span>
			</td>
			<td className="option"> </td>
			</tr>
			<tr className="full_detail reputation trbg">
			<td colSpan="5">
			<span className="icon-customer-reviews icon"></span>
			<span className="detail_desc">

			<p>Maintaining a positive online reputation is essential to attracting new customers. Feature your customer accolades and respond to customer reviews.</p>

			</span>
			</td>
			</tr>





			</tbody>
			</table>
			</div>
			</div>

			</div>
			</div>



			<div className="faq">
			<div className="wrapper">
			<h2>Frequently Asked Questions</h2>

			<div className="c_6 faq_item">
			<h3>Can I try for free?</h3>
			<p>Yes! Where's Weed offers a free 7-day trial of our Featured &amp; Premium listings in most areas. </p>
			</div>



			<div className="c_6 faq_item">
			<h3>Do you accept anything other than credit cards?</h3>
			<p>At this time credit or pre-paid debit cards are the only payment solution we offer.</p>
			</div>

			<div className="c_6 faq_item">
			<h3>How many customers can I expect?</h3>
			<p>Exposure varies based on your locality. <a href="/contact.php">Contact us</a> to get more specific metrics about your local market.</p>
			</div>

			<div className="c_6 faq_item">
			<h3>Can I purchase additional map markers?</h3>
			<p>Yes! <a href="/contact.php">Contact us</a> to learn about additional map markers and other advertising opportunities. </p>
			</div>

			<div className="c_6 faq_item">
			<h3>How do I cancel?</h3>
			<p>You may cancel at any time by contacting us.</p>
			</div>



			</div>
			</div>


			</div>



			<span className="slide pricing" style={{display: "none"}} data-position="0">
			<span className="wrapper max1200">

			<h2><a name="disp_pricing">Plans built for dispensaries of all sizes. Start with 7 days for free.</a></h2>


			<span className="call_cta"><span className="heading">Questions? Call Us!</span><span className="number">(855) 420-7771</span></span>
			<span className="package_column_wrap" style={{maxWidth: "960px"}}>
			<div className="scroll_cta"><span>SCROLL</span></div>
			<span className="package_column " data-id="premium"><span className="package_column_inner">
			<span className="package_header">
			<span className="package_title">Premium</span>
			<span className="price"><span>$</span>999</span><span className="term" data-cents=""> /mo</span>


			<ul className="selection">
			<li><a href="/business_signup.php?package=premium&amp;try=true" className="try">Try</a></li>
			<li><a href="/business_signup.php?package=premium" className="buy">Buy</a></li>
			</ul>
			</span>
			<span className="package_features">
			<ul>
			<li className="map_icon">
			<span className="icon_wrap listing_icon"><img src="/images/icon_new_premium.png" /></span>
			<span className="package_content">
			<span className="title">4x Map Icon Size</span>

			</span>
			</li>

			<li>
			<span className="icon_wrap"><span className="icon-sort50"></span><span className="icon-sort50 active_premium"></span></span>
			<span className="package_content">
			<span className="title">Top Ranking Position</span>

			</span>
			</li>

			<li>
			<span className="icon_wrap"><span className="icon-location-2"></span></span>
			<span className="package_content">
			<span className="title">15 Mi Priority Area</span>

			</span>
			</li>
			<li>
			<span className="icon_wrap"><span className="icon-keyboard50"></span><span className="icon-keyboard50 active_premium"></span></span>
			<span className="package_content">
			<span className="title">Premium Listing Size</span>

			</span>
			</li>

			<li>
			<span className="icon_wrap"><span className="icon-file"></span></span>
			<span className="package_content">
			<span className="title">Advanced Menus</span>

			</span>
			</li>
			<li>
			<span className="icon_wrap"><span className="icon-price-tag5"></span></span>
			<span className="package_content">
			<span className="title">Daily Specials</span>

			</span>
			</li>
			<li>
			<span className="icon_wrap"><span className="icon-shopping111"></span></span>
			<span className="package_content">
			<span className="title">Online Pre-Ordering</span>

			</span>
			</li>
			<li>
			<span className="icon_wrap"><span className="icon-rounded9"></span></span>
			<span className="package_content">
			<span className="title">Menu Syndication</span>

			</span>
			</li>

			<li>
			<span className="icon_wrap"><span className="icon-cash1"></span></span>
			<span className="package_content">
			<span className="title">POS Integration</span>

			</span>
			</li>
			<li>
			<span className="icon_wrap"><span className="icon-phone"></span></span>
			<span className="package_content">
			<span className="title">Call Tracking</span>

			</span>
			</li>
			<li>
			<span className="icon_wrap"><span className="icon-download4"></span></span>
			<span className="package_content">
			<span className="title">Website Widgets</span>

			</span>
			</li>
			<li>
			<span className="icon_wrap"><span className="icon-health"></span></span>
			<span className="package_content">
			<span className="title">Reputation Mgmt</span>

			</span>
			</li>
			<li>
			<span className="icon_wrap"><span className="icon-sms6"></span></span>
			<span className="package_content">
			<span className="title">2 x SMS Text Blasts</span>

			</span>
			</li>



			<li>
			<span className="icon_wrap"><span className="icon-question"></span></span>
			<span className="package_content">
			<span className="title">Technical Support</span>

			</span>
			</li>
			<li>
			<span className="icon_wrap"><span className="icon-medal"></span></span>
			<span className="package_content">
			<span className="title">Marketing Swagger</span>

			</span>
			</li>
			</ul>
			</span>
			</span>
			</span><span className="package_column" data-id="featured">
			<span className="package_column_inner">
			<span className="package_header">
			<span className="package_title">Featured</span>
			<span className="price"><span>$</span>549</span><span className="term" data-cents=""> /mo</span>



			<ul className="selection">
			<li><a href="/business_signup.php?package=featured&amp;try=true" className="try">Try</a></li>
			<li><a href="/business_signup.php?package=featured" className="buy">Buy</a></li>
			</ul>
			</span>
			<span className="package_features" data-id="featured">
			<ul>
			<li className="map_icon">
			<span className="icon_wrap listing_icon featured"><img src="/images/icon_new_featured.png" /></span>
			<span className="package_content">
			<span className="title featured">2x Map Icon Size</span>

			</span>
			</li>

			<li>
			<span className="icon_wrap"><span className="icon-sort50"></span><span className="icon-sort50 active_featured"></span></span>
			<span className="package_content">
			<span className="title">2nd Ranking Position</span>

			</span>
			</li>

			<li>
			<span className="icon_wrap"><span className="icon-location-2"></span></span>
			<span className="package_content">
			<span className="title">10 Mile Priority Radius</span>

			</span>
			</li>

			<li>
			<span className="icon_wrap"><span className="icon-keyboard50"></span><span className="icon-keyboard50 active_featured"></span></span>
			<span className="package_content">
			<span className="title">Featured Listing Size</span>

			</span>
			</li>

			<li>
			<span className="icon_wrap"><span className="icon-file"></span></span>
			<span className="package_content">
			<span className="title">Advanced Menus</span>

			</span>
			</li>
			<li>
			<span className="icon_wrap"><span className="icon-price-tag5"></span></span>
			<span className="package_content">
			<span className="title">Daily Specials</span>

			</span>
			</li>
			<li>
			<span className="icon_wrap"><span className="icon-shopping111"></span></span>
			<span className="package_content">
			<span className="title">Online Pre-Ordering</span>

			</span>
			</li>
			<li>
			<span className="icon_wrap"><span className="icon-file"></span></span>
			<span className="package_content">
			<span className="title">Menu Syndication</span>

			</span>
			</li>

			<li>
			<span className="icon_wrap"><span className="icon-cash1"></span></span>
			<span className="package_content">
			<span className="title">POS Integration</span>

			</span>
			</li>
			<li>
			<span className="icon_wrap"><span className="icon-phone"></span></span>
			<span className="package_content">
			<span className="title">Call Tracking</span>

			</span>
			</li>
			<li>
			<span className="icon_wrap"><span className="icon-download4"></span></span>
			<span className="package_content">
			<span className="title">Website Widgets</span>

			</span>
			</li>
			<li>
			<span className="icon_wrap"><span className="icon-health"></span></span>
			<span className="package_content">
			<span className="title">Reputation Mgmt</span>

			</span>
			</li>
			<li>
			<span className="icon_wrap"><span className="icon-sms6"></span></span>
			<span className="package_content">
			<span className="title">SMS Text Blasts</span>

			</span>
			</li>


			<li>
			<span className="icon_wrap"><span className="icon-question"></span></span>
			<span className="package_content">
			<span className="title">Technical Support</span>

			</span>
			</li>

			</ul>
			</span>
			</span>
			</span><span className="package_column" data-id="verified"><span className="package_column_inner">
			<span className="package_header">
			<span className="package_title">Verified</span>
			<span className="price"><span>$</span>249</span><span className="term" data-cents=""> /mo</span>


			<ul className="selection">

			<li><a href="/business_signup.php?package=verified" className="buy	">Buy</a></li>
			</ul>
			</span>
			<span className="package_features">
			<ul>
			<li className="map_icon">
			<span className="icon_wrap listing_icon verified"><img src="/images/icon_new_standard.png" /></span>
			<span className="package_content">
			<span className="title verified">Verified Map Icon</span>

			</span>
			</li>

			<li>
			<span className="icon_wrap"><span className="icon-sort50"></span><span className="icon-sort50 active_verified"></span></span>
			<span className="package_content">
			<span className="title">Variable Ranking </span>

			</span>
			</li>

			<li>
			<span className="icon_wrap"><span className="icon-location-2"></span></span>
			<span className="package_content">
			<span className="title">No Priority Area</span>

			</span>
			</li>

			<li>
			<span className="icon_wrap"><span className="icon-keyboard50"></span><span className="icon-keyboard50 active_verified"></span></span>
			<span className="package_content">
			<span className="title">Standard Listing Size</span>

			</span>
			</li>

			<li>
			<span className="icon_wrap"><span className="icon-file"></span></span>
			<span className="package_content">
			<span className="title">Advanced Menus</span>

			</span>
			</li>
			<li>
			<span className="icon_wrap"><span className="icon-price-tag5"></span></span>
			<span className="package_content">
			<span className="title">Daily Specials</span>

			</span>
			</li>
			<li>
			<span className="icon_wrap"><span className="icon-shopping111"></span></span>
			<span className="package_content">
			<span className="title">Online Pre-Ordering</span>

			</span>
			</li>
			<li>
			<span className="icon_wrap"><span className="icon-rounded9"></span></span>
			<span className="package_content">
			<span className="title">Menu Syndication</span>

			</span>
			</li>

			<li>
			<span className="icon_wrap"><span className="icon-cash1"></span></span>
			<span className="package_content">
			<span className="title">POS Integration</span>

			</span>
			</li>
			<li>
			<span className="icon_wrap"><span className="icon-phone"></span></span>
			<span className="package_content">
			<span className="title">Call Tracking</span>

			</span>
			</li>
			<li>
			<span className="icon_wrap"><span className="icon-download4"></span></span>
			<span className="package_content">
			<span className="title">Website Widgets</span>

			</span>
			</li>
			<li>
			<span className="icon_wrap"><span className="icon-question"></span></span>
			<span className="package_content">
			<span className="title">Technical Support</span>

			</span>
			</li>


			</ul>
			</span>
			</span>
			</span>


			<div className="expand_cta" data-toggle="expanded" data-target=".package_column_wrap"><span>View More</span></div>
			</span>



			</span>
			</span>
			<span className="slide trial advertising" style={{display: "none"}} data-position="0">
			<span className="wrapper max1200">


			<span className="c_6 ad_stat">
			<img src="/images/free_trial.png" />
			</span>

			<span className="c_6 trial_text ">
			<span className="heading">
			Try our advertising and business tools free, for 7 days.
			</span>
			<p>We're so sure we can drive real customers to your business we prove it to you with a 7 day free trial. </p>
			</span>

			</span>
			</span>
			</div>
			<div className="package_tab delivery" data-tab="delivery" style={{display: "none"}}>
			<div className="c12 tour4">
			<div className="package_preview">
			<div className="wrapper">

			<div className="c_4 package_selection">
			<h2>Select a package:</h2>
			<ul>
			<li className="premium package_select active" data-package="premium">
			<div className="title">Premium <span> Listing</span></div>
			<div className="price"><span className="price"><span>$</span>999</span><span className="term" data-cents=""> /mo</span></div>
			</li>

			<li className="featured package_select" data-package="featured">
			<div className="title">Featured <span> Listing</span></div>
			<div className="price"><span className="price"><span>$</span>549</span><span className="term" data-cents=""> /mo</span></div>
			</li>

			<li className="verified package_select" data-package="verified">
			<div className="title">Verified <span> Listing</span></div>
			<div className="price"><span className="price"><span>$</span>249</span><span className="term" data-cents=""> /mo</span></div>
			</li>



			</ul>
			</div>

			<div className="c_4 listing_preview">
			<h2>Listing Preview</h2>

			<ul className="results specials_listings">
			<li className="card  dispensary verified premium featured" data-result="277" id="result_277" itemScope="" itemType="http://schema.org/LocalBusiness">

			<a href="" itemProp="url" title="Your Business Here" data-value="2" style={{display: "block"}}>
			<div className="entry">

			<div className="card_contents">
			<span className="tag_order">PRE-ORDER</span>
			<div className="entry_pic_wrap">
			<span className="entry_pic_banner">
			<span className="featured_star orange"></span>
			<img src="/images/temp_disp2.jpg" /></span>
			<meta itemProp="image" content="https://wheresweed.com/listing_images/160x90/default_new.png" />


			<span className="icons"></span><img src="/images/temp_disp2.jpg" className="main_t" />
			</div>
			<span className="entry_title" itemProp="name">Your Business Here</span>
			<span className="entry_address">
			<span className="specials_address" itemProp="address" itemScope="" itemType="http://schema.org/PostalAddress">

			<span itemProp="addressLocality">Denver</span>, <span itemProp="addressRegion">CO</span>
			</span> <span className="entry_category">Dispensary</span>
			</span>
			<div className="entry_right">

			<div className="stars_wrap small" itemProp="aggregateRating" itemScope="" itemType="http://schema.org/AggregateRating">
			<div className="stars_empty"><span className="icon-5stars"></span></div>
			<div className="stars_full" style={{width:"79%"}}>
			<div className="stars_full_inner"><span className="icon-5stars"></span></div>
			</div>
			<meta itemProp="ratingValue" content="3.9" /><meta itemProp="ratingCount" content="31" />
			</div>

			</div>

			<div className="featured_reviews_container">
			<div className="featured_review">
			<span className="review_thumb"><img alt="trouzy" src="/listing_images/full/default_new.png" /></span>
			<p className="review_content" itemProp="description">This place is the greatest!</p>
			<div className="bottom_row">
			<div className="stars_wrap small">
			<div className="stars_empty"><span className="icon-5stars"></span></div>
			<div className="stars_full" style={{width:"100%"}} content="5" itemProp="ratingValue">
			<div className="stars_full_inner"><span className="icon-5stars"></span></div>
			</div>
			</div>
			<span className="author">Posted by <span className="name" itemProp="author">sample_user</span></span>
			</div>
			</div>
			<div className="featured_review">
			<span className="review_thumb"><img alt="trouzy" src="/listing_images/full/default_new.png" /></span>
			<p className="review_content" itemProp="description">Best product in town, i'll be a regular here!</p>
			<div className="bottom_row">
			<div className="stars_wrap small">
			<div className="stars_empty"><span className="icon-5stars"></span></div>
			<div className="stars_full" style={{width:"100%"}} content="5" itemProp="ratingValue">
			<div className="stars_full_inner"><span className="icon-5stars"></span></div>
			</div>
			</div>
			<span className="author">Posted by <span className="name" itemProp="author">sample_user</span></span>
			</div>
			</div>
			</div>
			</div>
			</div>
			</a>
			<a className="close_btn" href="" data-ct="filter_close"> <span className="icon-cancel-circle"></span></a>
			</li>

			</ul>




			</div>

			<div className="c_4 map">
			<h2>Local Reach</h2>
			<div className="map_wrap">
			<img className="map_image" src="/images/map_preview_premium.jpg" />
			</div>
			</div>
			</div>
			</div>

			<div className="package_overview">
			<div className="wrapper">
			<h2>Pricing Guide</h2>


			<div className="short_grid">
			<div className="grid_column premium">
			<div className="ribbon-wrapper">
			<div className="ribbon"></div>
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
			<ul>

			<li className="buy"><a href="/business_signup.php?package=premium&amp;type=delivery">CHOOSE</a></li>
			</ul>

			</div>
			</div><div className="grid_column featured value selected">
			<div className="ribbon-wrapper">
			<div className="ribbon">Best Value</div>
			</div>
			<div className="title">Featured</div>
			<span className="price"><span>$</span>549</span><span className="term" data-cents=""> /mo</span>
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
			<ul>

			<li className="buy"><a href="/business_signup.php?package=featured&amp;type=delivery">CHOOSE</a></li>
			</ul>

			</div>
			</div><div className="grid_column verified">
			<div className="ribbon-wrapper">
			<div className="ribbon"></div>
			</div>

			<div className="title">Verified</div>
			<span className="price"><span>$</span>249</span><span className="term" data-cents=""> /mo</span>
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
			<ul>
			<li><a href="/business_signup.php?package=verified&amp;type=delivery">CHOOSE</a></li>
			</ul>
			<span className="trial">&nbsp;</span>
			</div>
			</div><div className="grid_column claimed">
			<div className="ribbon-wrapper">
			<div className="ribbon"></div>
			</div>

			<div className="title">Claimed</div>
			<span className="price"><span>$</span>0</span><span className="term" data-cents=""> /mo</span>
			<ul className="details">										<li><strong>Local</strong> Exposure</li>
			<li><strong>Standard</strong> Map Icon</li>
			<li><strong>Limited</strong> Menu &amp; Products</li>

			<li>Page 2+ of Results</li>
			<li>Business Analytics </li>

			</ul>
			<div className="cta">
			<ul>
			<li><a href="/business_signup.php?package=claimed&amp;type=delivery">CHOOSE</a></li>
			</ul>
			<span className="trial">&nbsp;</span>
			</div>
			</div>
			</div>

			</div>
			</div>
			<div className="package_comparison">
			<div className="wrapper">

			<div className="compare_select" style={{display: "none"}}>
			<ul>
			<li className="selected">Feature Comparison</li><li>Feature Details</li>
			</ul>
			</div>


			<div className="comparison_wrap">
			<div className="comparison_table_wrap">
			<table cellSpacing="0" className="ad">
			<thead>
			<tr>
			<th className="title outreach">
			Local Outreach
			</th>

			<th className="premium">
			<div className="package">Premium</div>
			<span className="price"><span>$</span>999</span><span className="term" data-cents=""> /mo</span>
			<div className="cta"><a href="/business_signup.php?package=premium&amp;&amp;type=delivery">Choose </a></div>
			</th>

			<th className="featured">
			<div className="package">Featured</div>
			<span className="price"><span>$</span>549</span><span className="term" data-cents=""> /mo</span>
			<div className="cta"><a href="/business_signup.php?package=featured&amp;type=delivery">Choose</a></div>
			</th>

			<th className="verified">
			<div className="package">Verified</div>
			<span className="price"><span>$</span>249</span><span className="term" data-cents=""> /mo</span>
			<div className="cta"><a href="/business_signup.php?package=verified&amp;type=delivery">Choose</a></div>
			</th>


			</tr>
			</thead>
			<tbody>
			<tr data-toggle="expand" data-target=".full_detail.lsize" className="expanded">
			<td className="feature">
			Listing Size
			</td>
			<td className="option">
			4x size
			</td>
			<td className="option">
			2x size
			</td>
			<td className="option">
			Standard
			</td>

			</tr>
			<tr className="full_detail lsize expand">
			<td colSpan="4">
			<span className="icon-graphic icon"></span>
			<span className="detail_desc">

			<p>Featured &amp; Premium businesses benefit from a listing size 2-4x as large as a standard listing in search results, greatly improving profile visibility. Additionally, Premium businesses get the chance to showcase reviews on their business in the search results. </p>

			</span>
			</td>
			</tr>

			<tr className="trbg" data-toggle="expand" data-target=".full_detail.isize">
			<td className="feature iconsize">
			Icon Size
			</td>
			<td className="option">
			<img src="/images/icon_new_premium.png" />
			</td>
			<td className="option">
			<img src="/images/icon_new_featured.png" />
			</td>
			<td className="option">
			<img src="/images/icon_new_standard.png" />
			</td>

			</tr>
			<tr className="full_detail isize trbg">
			<td colSpan="4">
			<span className="icon-location2 icon"></span>
			<span className="detail_desc">

			<p>Stand out with larger map icons when users are searching locally on the map. A larger Map Icon will help your listing stand out and drive more traffic. </p>

			</span>
			</td>
			</tr>

			<tr data-toggle="expand" data-target=".full_detail.reach">
			<td className="feature reach">
			Extended Reach
			</td>
			<td className="option">
			15 miles
			</td>
			<td className="option">
			10 miles
			</td>
			<td className="option">
			5 Miles
			</td>

			</tr>
			<tr className="full_detail reach">
			<td colSpan="4">
			<span className="icon-broadcast icon"></span>
			<span className="detail_desc">

			<p>Business exposure is based off of a radius from your map marker. The larger the radius, the more patient exposure you get. Unlike our competitors, we do not have pre-defined regions for businesses. Everything works off of your map marker location and the patient's current location. </p>

			</span>
			</td>
			</tr>

			<tr className="trbg" data-toggle="expand" data-target=".full_detail.rank">
			<td className="feature">
			Ranking Tier
			</td>
			<td className="option">
			1st Tier
			</td>
			<td className="option">
			2nd Tier
			</td>
			<td className="option">
			3rd Tier
			</td>

			</tr>
			<tr className="full_detail rank trbg">
			<td colSpan="4">
			<span className="icon-business icon"></span>
			<span className="detail_desc">

			<p>Where's Weed utilizes a custom built algorithm to determine where your business falls within search results. It first takes into your account package level then locality, business activity, and customer attributes. You can ensure top exposure in search results by selecting a premium or featured package. </p>

			</span>
			</td>
			</tr>

			</tbody>
			</table>
			</div>

			<div className="comparison_table_wrap">
			<table cellSpacing="0">
			<thead>
			<tr className="expand_head">
			<th className="title menus">
			Menus &amp; Products
			</th>

			<th>&nbsp;</th>
			<th>&nbsp;</th>
			<th>&nbsp;</th>

			</tr>
			</thead>
			<tbody>
			<tr data-toggle="expand" data-target=".full_detail.pos" className="expanded">
			<td className="feature">
			POS Integration
			</td>
			<td className="option">
			<span className="icon-checkmark-2"></span>
			</td>
			<td className="option">
			<span className="icon-checkmark-2"></span>
			</td>
			<td className="option">
			<span className="icon-checkmark-2"></span>
			</td>

			</tr>
			<tr className="full_detail pos expand">
			<td colSpan="4">
			<span className="icon-commerce icon"></span>
			<span className="detail_desc">

			<p>Where's Weed integrates with a number of popular industry point-of-sale systems including MJ Freeway, GreenBits, Proteus420 and more. Save time by automatically syncing strain and product information directly from your POS system to your Where's Weed menu.</p>

			</span>
			</td>
			</tr>
			<tr className="trbg" data-toggle="expand" data-target=".full_detail.syndi">
			<td className="feature">
			Menu Syndication
			</td>
			<td className="option">
			<span className="icon-checkmark-2"></span>
			</td>
			<td className="option">
			<span className="icon-checkmark-2"></span>
			</td>
			<td className="option">
			<span className="icon-checkmark-2"></span>
			</td>

			</tr>
			<tr className="full_detail syndi trbg">
			<td colSpan="4">
			<span className="icon-data45 icon"></span>
			<span className="detail_desc">

			<p>Broadcast your product and pricing information everywhere your customers are looking -- including 3rd party websites like Facebook, popular marijuana menus, and more! <br /><br />

			* We do not own and are NOT affiliated directly with any of these companies</p>

			</span>
			</td>
			</tr>

			<tr data-toggle="expand" data-target=".full_detail.oo">
			<td className="feature">
			Online Pre-Ordering
			</td>
			<td className="option">
			<span className="icon-checkmark-2"></span>
			</td>
			<td className="option">
			<span className="icon-checkmark-2"></span>
			</td>
			<td className="option">
			<span className="icon-checkmark-2"></span>
			</td>

			</tr>
			<tr className="full_detail oo">
			<td colSpan="4">
			<span className="icon-shopping111 icon"></span>
			<span className="detail_desc">

			<p>Allow your customers to pre-order their purchases directly from your Where's Weed menu or your own website! Our simple integration allows you to pre-verify patients, set up pre-ordering hours, delivery fees/minimums and more!</p>

			</span>
			</td>
			</tr>

			<tr className="trbg" data-toggle="expand" data-target=".full_detail.u_prod">
			<td className="feature">
			Unlimited Products
			</td>
			<td className="option">
			<span className="icon-checkmark-2"></span>
			</td>
			<td className="option">
			<span className="icon-checkmark-2"></span>
			</td>
			<td className="option">
			<span className="icon-checkmark-2"></span>
			</td>

			</tr>
			<tr className="full_detail u_prod trbg">
			<td colSpan="4">
			<span className="icon-business-card icon"></span>
			<span className="detail_desc">

			<p>Your customers are looking for their favorite products! Make sure your business is found in product related searches by adding your entire product offering to Where's Weed.</p>

			</span>
			</td>
			</tr>


			<tr data-toggle="expand" data-target=".full_detail.p_photos">
			<td className="feature">
			Product Photos
			</td>
			<td className="option">
			<span className="icon-checkmark-2"></span>
			</td>
			<td className="option">
			<span className="icon-checkmark-2"></span>
			</td>
			<td className="option">
			<span className="icon-checkmark-2"></span>
			</td>

			</tr>
			<tr className="full_detail p_photos">
			<td colSpan="4">
			<span className="icon-photo icon"></span>
			<span className="detail_desc">

			<p>Stand out from your competitors by showcasing beautiful imagery of your marijuana strains and products!</p>

			</span>
			</td>
			</tr>

			<tr className="trbg" data-toggle="expand" data-target=".full_detail.lab">
			<td className="feature trbg">
			Lab Results
			</td>
			<td className="option">
			<span className="icon-checkmark-2"></span>
			</td>
			<td className="option">
			<span className="icon-checkmark-2"></span>
			</td>
			<td className="option">
			<span className="icon-checkmark-2"></span>
			</td>

			</tr>
			<tr className="full_detail lab trbg">
			<td colSpan="4">
			<span className="icon-three-test-tubes icon"></span>
			<span className="detail_desc">

			<p>Establish the quality and characteristics of your marijuana products by listing your lab results directly with your products.</p>

			</span>
			</td>
			</tr>

			</tbody>
			</table>
			</div>

			<div className="comparison_table_wrap">
			<table cellSpacing="0">
			<thead>
			<tr className="expand_head">
			<th className="title deals">
			Specials &amp; Deals
			</th>

			<th>&nbsp;</th>
			<th>&nbsp;</th>
			<th>&nbsp;</th>

			</tr>
			</thead>
			<tbody>
			<tr data-toggle="expand" data-target=".full_detail.uspec" className="expanded">
			<td className="feature">
			Deals Platform
			</td>
			<td className="option">
			<span className="icon-checkmark-2"></span>
			</td>
			<td className="option">
			<span className="icon-checkmark-2"></span>
			</td>
			<td className="option">
			<span className="icon-checkmark-2"></span>
			</td>

			</tr>
			<tr className="full_detail uspec expand">
			<td colSpan="4">
			<span className="icon-price-tag5 icon"></span>
			<span className="detail_desc">

			<p>Target deal-seekers in your community by posting your daily deals to Where's Weed! You can schedule them weeks or even months in advance for a hassle free marketing campaign. </p>

			</span>
			</td>
			</tr>





			</tbody>
			</table>
			</div>

			<div className="comparison_table_wrap">
			<table cellSpacing="0">
			<thead>
			<tr className="expand_head">
			<th className="title insights">
			Analytics &amp; Insights
			</th>

			<th>&nbsp;</th>
			<th>&nbsp;</th>
			<th>&nbsp;</th>

			</tr>
			</thead>
			<tbody>
			<tr data-toggle="expand" data-target=".full_detail.visitors" className="expanded">
			<td className="feature">
			Visitor Analytics
			</td>
			<td className="option">
			<span className="icon-checkmark-2"></span>
			</td>
			<td className="option">
			<span className="icon-checkmark-2"></span>
			</td>
			<td className="option">
			<span className="icon-checkmark-2"></span>
			</td>

			</tr>
			<tr className="full_detail visitors expand">
			<td colSpan="4">
			<span className="icon-educational8 icon"></span>
			<span className="detail_desc">

			<p>Our detailed profile analytics provide valuable insights into your performance on Where's Weed, customer acquisition, market demographics and more. </p>

			</span>
			</td>
			</tr>

			<tr className="trbg" data-toggle="expand" data-target=".full_detail.preorder_insights">
			<td className="feature">
			Pre-Order Insights
			</td>
			<td className="option">
			<span className="icon-checkmark-2"></span>
			</td>
			<td className="option">
			<span className="icon-checkmark-2"></span>
			</td>
			<td className="option">
			<span className="icon-checkmark-2"></span>
			</td>

			</tr>
			<tr className="full_detail preorder_insights trbg">
			<td colSpan="4">
			<span className="icon-money-1 icon"></span>
			<span className="detail_desc">

			<p> Gain valuable insights from pre-order data and better understand your customer's preferred products. With these insights you can optimize your product offerings and increase efficiency. </p>

			</span>
			</td>
			</tr>

			<tr data-toggle="expand" data-target=".full_detail.call_tracking">
			<td className="feature">
			Call Tracking
			</td>
			<td className="option">
			<span className="icon-checkmark-2"></span>
			</td>
			<td className="option">
			<span className="icon-checkmark-2"></span>
			</td>
			<td className="option">
			<span className="icon-checkmark-2"></span>
			</td>

			</tr>
			<tr className="full_detail call_tracking">
			<td colSpan="4">
			<span className="icon-cash1 icon"></span>
			<span className="detail_desc">

			<p>Our integrated call tracking allows us to provide real insights about your customers. Not only does this allow you to attribute customer traffic directly to Where's Weed, it also allows you to analyze and compare various call metrics.</p>

			</span>
			</td>
			</tr>

			<tr className="trbg" data-toggle="expand" data-target=".full_detail.reputation">
			<td className="feature">
			Reputation Management
			</td>
			<td className="option">
			<span className="icon-checkmark-2"></span>
			</td>
			<td className="option">
			<span className="icon-checkmark-2"></span>
			</td>
			<td className="option">
			<span className="icon-checkmark-2"></span>
			</td>

			</tr>
			<tr className="full_detail reputation trbg">
			<td colSpan="4">
			<span className="icon-customer-reviews icon"></span>
			<span className="detail_desc">

			<p>Maintaining a positive online reputation is essential to attracting new customers. Feature your customer accolades and respond to customer reviews.</p>

			</span>
			</td>
			</tr>





			</tbody>
			</table>
			</div>
			</div>

			</div>
			</div>


			<div className="faq">
			<div className="wrapper">
			<h2>Frequently Asked Questions</h2>

			<div className="c_6 faq_item">
			<h3>Do you accept anything other than credit cards?</h3>
			<p>At this time credit or pre-paid debit cards are the only payment solution we offer.</p>
			</div>

			<div className="c_6 faq_item">
			<h3>How many customers can I expect?</h3>
			<p>Exposure varies based on your locality. <a href="/contact.php">Contact us</a> to get more specific metrics about your local market.</p>
			</div>

			<div className="c_6 faq_item">
			<h3>Can I purchase additional map markers?</h3>
			<p>Yes! <a href="/contact.php">Contact us</a> to learn about additional map markers and other advertising opportunities. </p>
			</div>

			<div className="c_6 faq_item">
			<h3>How do I cancel?</h3>
			<p>You may cancel at any time by contacting us.</p>
			</div>



			</div>
			</div>


			</div>
			<span className="slide pricing" style={{display: "none"}} data-position="0">
			<span className="wrapper max1200">

			<h2><a name="disp_pricing">Plans built for dispensaries of all sizes. Start with 7 days for free.</a></h2>


			<span className="call_cta"><span className="heading">Questions? Call Us!</span><span className="number">(855) 420-7771</span></span>
			<span className="package_column_wrap" style={{maxWidth: "960px"}}>
			<div className="scroll_cta"><span>SCROLL</span></div>
			<span className="package_column " data-id="premium"><span className="package_column_inner">
			<span className="package_header">
			<span className="package_title">Premium</span>
			<span className="price"><span>$</span>999</span><span className="term" data-cents=""> /mo</span>


			<ul className="selection">
			<li><a href="/business_signup.php?package=premium&amp;try=true" className="try">Try</a></li>
			<li><a href="/business_signup.php?package=premium" className="buy">Buy</a></li>
			</ul>
			</span>
			<span className="package_features">
			<ul>
			<li className="map_icon">
			<span className="icon_wrap listing_icon"><img src="/images/icon_new_premium.png" /></span>
			<span className="package_content">
			<span className="title">4x Map Icon Size</span>

			</span>
			</li>

			<li>
			<span className="icon_wrap"><span className="icon-sort50"></span><span className="icon-sort50 active_premium"></span></span>
			<span className="package_content">
			<span className="title">Top Ranking Position</span>

			</span>
			</li>

			<li>
			<span className="icon_wrap"><span className="icon-location-2"></span></span>
			<span className="package_content">
			<span className="title">15 Mi Priority Area</span>

			</span>
			</li>
			<li>
			<span className="icon_wrap"><span className="icon-keyboard50"></span><span className="icon-keyboard50 active_premium"></span></span>
			<span className="package_content">
			<span className="title">Premium Listing Size</span>

			</span>
			</li>

			<li>
			<span className="icon_wrap"><span className="icon-file"></span></span>
			<span className="package_content">
			<span className="title">Advanced Menus</span>

			</span>
			</li>
			<li>
			<span className="icon_wrap"><span className="icon-price-tag5"></span></span>
			<span className="package_content">
			<span className="title">Daily Specials</span>

			</span>
			</li>
			<li>
			<span className="icon_wrap"><span className="icon-shopping111"></span></span>
			<span className="package_content">
			<span className="title">Online Pre-Ordering</span>

			</span>
			</li>
			<li>
			<span className="icon_wrap"><span className="icon-rounded9"></span></span>
			<span className="package_content">
			<span className="title">Menu Syndication</span>

			</span>
			</li>

			<li>
			<span className="icon_wrap"><span className="icon-cash1"></span></span>
			<span className="package_content">
			<span className="title">POS Integration</span>

			</span>
			</li>
			<li>
			<span className="icon_wrap"><span className="icon-phone"></span></span>
			<span className="package_content">
			<span className="title">Call Tracking</span>

			</span>
			</li>
			<li>
			<span className="icon_wrap"><span className="icon-download4"></span></span>
			<span className="package_content">
			<span className="title">Website Widgets</span>

			</span>
			</li>
			<li>
			<span className="icon_wrap"><span className="icon-health"></span></span>
			<span className="package_content">
			<span className="title">Reputation Mgmt</span>

			</span>
			</li>
			<li>
			<span className="icon_wrap"><span className="icon-sms6"></span></span>
			<span className="package_content">
			<span className="title">2 x SMS Text Blasts</span>

			</span>
			</li>



			<li>
			<span className="icon_wrap"><span className="icon-question"></span></span>
			<span className="package_content">
			<span className="title">Technical Support</span>

			</span>
			</li>
			<li>
			<span className="icon_wrap"><span className="icon-medal"></span></span>
			<span className="package_content">
			<span className="title">Marketing Swagger</span>

			</span>
			</li>
			</ul>
			</span>
			</span>
			</span><span className="package_column" data-id="featured">
			<span className="package_column_inner">
			<span className="package_header">
			<span className="package_title">Featured</span>
			<span className="price"><span>$</span>549</span><span className="term" data-cents=""> /mo</span>



			<ul className="selection">
			<li><a href="/business_signup.php?package=featured&amp;try=true" className="try">Try</a></li>
			<li><a href="/business_signup.php?package=featured" className="buy">Buy</a></li>
			</ul>
			</span>
			<span className="package_features" data-id="featured">
			<ul>
			<li className="map_icon">
			<span className="icon_wrap listing_icon featured"><img src="/images/icon_new_featured.png" /></span>
			<span className="package_content">
			<span className="title featured">2x Map Icon Size</span>

			</span>
			</li>

			<li>
			<span className="icon_wrap"><span className="icon-sort50"></span><span className="icon-sort50 active_featured"></span></span>
			<span className="package_content">
			<span className="title">2nd Ranking Position</span>

			</span>
			</li>

			<li>
			<span className="icon_wrap"><span className="icon-location-2"></span></span>
			<span className="package_content">
			<span className="title">10 Mile Priority Radius</span>

			</span>
			</li>

			<li>
			<span className="icon_wrap"><span className="icon-keyboard50"></span><span className="icon-keyboard50 active_featured"></span></span>
			<span className="package_content">
			<span className="title">Featured Listing Size</span>

			</span>
			</li>

			<li>
			<span className="icon_wrap"><span className="icon-file"></span></span>
			<span className="package_content">
			<span className="title">Advanced Menus</span>

			</span>
			</li>
			<li>
			<span className="icon_wrap"><span className="icon-price-tag5"></span></span>
			<span className="package_content">
			<span className="title">Daily Specials</span>

			</span>
			</li>
			<li>
			<span className="icon_wrap"><span className="icon-shopping111"></span></span>
			<span className="package_content">
			<span className="title">Online Pre-Ordering</span>

			</span>
			</li>
			<li>
			<span className="icon_wrap"><span className="icon-file"></span></span>
			<span className="package_content">
			<span className="title">Menu Syndication</span>

			</span>
			</li>

			<li>
			<span className="icon_wrap"><span className="icon-cash1"></span></span>
			<span className="package_content">
			<span className="title">POS Integration</span>

			</span>
			</li>
			<li>
			<span className="icon_wrap"><span className="icon-phone"></span></span>
			<span className="package_content">
			<span className="title">Call Tracking</span>

			</span>
			</li>
			<li>
			<span className="icon_wrap"><span className="icon-download4"></span></span>
			<span className="package_content">
			<span className="title">Website Widgets</span>

			</span>
			</li>
			<li>
			<span className="icon_wrap"><span className="icon-health"></span></span>
			<span className="package_content">
			<span className="title">Reputation Mgmt</span>

			</span>
			</li>
			<li>
			<span className="icon_wrap"><span className="icon-sms6"></span></span>
			<span className="package_content">
			<span className="title">SMS Text Blasts</span>

			</span>
			</li>


			<li>
			<span className="icon_wrap"><span className="icon-question"></span></span>
			<span className="package_content">
			<span className="title">Technical Support</span>

			</span>
			</li>

			</ul>
			</span>
			</span>
			</span><span className="package_column" data-id="verified"><span className="package_column_inner">
			<span className="package_header">
			<span className="package_title">Verified</span>
			<span className="price"><span>$</span>249</span><span className="term" data-cents=""> /mo</span>


			<ul className="selection">

			<li><a href="/business_signup.php?package=verified" className="buy	">Buy</a></li>
			</ul>
			</span>
			<span className="package_features">
			<ul>
			<li className="map_icon">
			<span className="icon_wrap listing_icon verified"><img src="/images/icon_new_standard.png" /></span>
			<span className="package_content">
			<span className="title verified">Verified Map Icon</span>

			</span>
			</li>

			<li>
			<span className="icon_wrap"><span className="icon-sort50"></span><span className="icon-sort50 active_verified"></span></span>
			<span className="package_content">
			<span className="title">Variable Ranking </span>

			</span>
			</li>

			<li>
			<span className="icon_wrap"><span className="icon-location-2"></span></span>
			<span className="package_content">
			<span className="title">No Priority Area</span>

			</span>
			</li>

			<li>
			<span className="icon_wrap"><span className="icon-keyboard50"></span><span className="icon-keyboard50 active_verified"></span></span>
			<span className="package_content">
			<span className="title">Standard Listing Size</span>

			</span>
			</li>

			<li>
			<span className="icon_wrap"><span className="icon-file"></span></span>
			<span className="package_content">
			<span className="title">Advanced Menus</span>

			</span>
			</li>
			<li>
			<span className="icon_wrap"><span className="icon-price-tag5"></span></span>
			<span className="package_content">
			<span className="title">Daily Specials</span>

			</span>
			</li>
			<li>
			<span className="icon_wrap"><span className="icon-shopping111"></span></span>
			<span className="package_content">
			<span className="title">Online Pre-Ordering</span>

			</span>
			</li>
			<li>
			<span className="icon_wrap"><span className="icon-rounded9"></span></span>
			<span className="package_content">
			<span className="title">Menu Syndication</span>

			</span>
			</li>

			<li>
			<span className="icon_wrap"><span className="icon-cash1"></span></span>
			<span className="package_content">
			<span className="title">POS Integration</span>

			</span>
			</li>
			<li>
			<span className="icon_wrap"><span className="icon-phone"></span></span>
			<span className="package_content">
			<span className="title">Call Tracking</span>

			</span>
			</li>
			<li>
			<span className="icon_wrap"><span className="icon-download4"></span></span>
			<span className="package_content">
			<span className="title">Website Widgets</span>

			</span>
			</li>
			<li>
			<span className="icon_wrap"><span className="icon-question"></span></span>
			<span className="package_content">
			<span className="title">Technical Support</span>

			</span>
			</li>


			</ul>
			</span>
			</span>
			</span>


			<div className="expand_cta" data-toggle="expanded" data-target=".package_column_wrap"><span>View More</span></div>
			</span>



			</span>
			</span>
			</div>

			<div className="package_tab clinic" data-tab="clinic" style={{display: "none"}}>


			<div className="c12 tour4">

			<div className="package_preview">
			<div className="wrapper">
			<div className="c_4 package_selection">
			<h2>Select a package:</h2>
			<ul>
			<li className="premium active package_select" data-package="premium">
			<div className="title">Premium <span> Listing</span></div>
			<div className="price"><span className="price"><span>$</span>249<sup>95</sup></span><span className="term" data-cents="95"> /mo</span></div>
			</li>

			<li className="featured package_select" data-package="featured">
			<div className="title">Featured <span> Listing</span></div>
			<div className="price"><span className="price"><span>$</span>99<sup>95</sup></span><span className="term" data-cents="95"> /mo</span></div>
			</li>

			<li className="verified package_select" data-package="verified">
			<div className="title">Verified <span> Listing</span></div>
			<div className="price"><span className="price"><span>$</span>29<sup>95</sup></span><span className="term" data-cents="95"> /mo</span></div>
			</li>

			<li className="claimed package_select" data-package="claimed">
			<div className="title">Claimed <span> Listing</span></div>
			<div className="price"><span className="price"><span>$</span>0</span><span className="term" data-cents=""> /mo</span></div>
			</li>
			</ul>
			</div>

			<div className="c_4 listing_preview">
			<h2>Listing Preview</h2>

			<ul className="results specials_listings">
			<li className="card  dispensary verified premium featured" data-result="277" id="result_277" itemScope="" itemType="http://schema.org/LocalBusiness">

			<a href="" itemProp="url" title="Your Business Here" data-value="3" style={{display: "block"}}>
			<div className="entry">

			<div className="card_contents">
			<span className="tag_order">PRE-ORDER</span>
			<div className="entry_pic_wrap">
			<span className="entry_pic_banner">
			<span className="featured_star orange"></span>
			<img src="/images/temp_disp2.jpg" /></span>
			<meta itemProp="image" content="https://wheresweed.com/listing_images/160x90/default_new.png" />


			<span className="icons"></span><img src="/images/temp_disp2.jpg" className="main_t" />
			</div>
			<span className="entry_title" itemProp="name">Your Business Here</span>
			<span className="entry_address">
			<span className="specials_address" itemProp="address" itemScope="" itemType="http://schema.org/PostalAddress">

			<span itemProp="addressLocality">Denver</span>, <span itemProp="addressRegion">CO</span>
			</span> <span className="entry_category">Dispensary</span>
			</span>
			<div className="entry_right">

			<div className="stars_wrap small" itemProp="aggregateRating" itemScope="" itemType="http://schema.org/AggregateRating">
			<div className="stars_empty"><span className="icon-5stars"></span></div>
			<div className="stars_full" style={{width:"79%"}}>
			<div className="stars_full_inner"><span className="icon-5stars"></span></div>
			</div>
			<meta itemProp="ratingValue" content="3.9" /><meta itemProp="ratingCount" content="31" />
			</div>

			</div>

			<div className="featured_reviews_container">
			<div className="featured_review">
			<span className="review_thumb"><img alt="trouzy" src="/listing_images/full/default_new.png" /></span>
			<p className="review_content" itemProp="description">This place is the greatest!</p>
			<div className="bottom_row">
			<div className="stars_wrap small">
			<div className="stars_empty"><span className="icon-5stars"></span></div>
			<div className="stars_full" style={{width:"100%"}} content="5" itemProp="ratingValue">
			<div className="stars_full_inner"><span className="icon-5stars"></span></div>
			</div>
			</div>
			<span className="author">Posted by <span className="name" itemProp="author">sample_user</span></span>
			</div>
			</div>
			<div className="featured_review">
			<span className="review_thumb"><img alt="trouzy" src="/listing_images/full/default_new.png" /></span>
			<p className="review_content" itemProp="description">Best product in town, i'll be a regular here!</p>
			<div className="bottom_row">
			<div className="stars_wrap small">
			<div className="stars_empty"><span className="icon-5stars"></span></div>
			<div className="stars_full" style={{width:"100%"}} content="5" itemProp="ratingValue">
			<div className="stars_full_inner"><span className="icon-5stars"></span></div>
			</div>
			</div>
			<span className="author">Posted by <span className="name" itemProp="author">sample_user</span></span>
			</div>
			</div>
			</div></div>
			</div>
			</a>
			<a className="close_btn" href="" data-ct="filter_close"> <span className="icon-cancel-circle"></span></a>
			</li>

			</ul>




			</div>

			<div className="c_4 map">
			<h2>Local Reach</h2>
			<div className="map_wrap">
			<img className="map_image" src="/images/map_preview_premium.jpg" />
			</div>
			</div>
			</div>
			</div>

			<div className="package_overview">
			<div className="wrapper">
			<h2>Pricing Guide</h2>


			<div className="short_grid">
			<div className="grid_column premium">
			<div className="ribbon-wrapper">
			<div className="ribbon"></div>
			</div>
			<div className="title">Premium</div>
			<span className="price"><span>$</span>249<sup>95</sup></span><span className="term" data-cents="95"> /mo</span>
			<ul className="details">
			<li><strong>15 Mile Local</strong> Exposure</li>
			<li><strong>Premium</strong> Map Icon</li>
			<li><strong>Patient</strong> Lead Capturing</li>
			<li>Business Analytics </li>
			<li>Call Tracking</li>
			<li>Marketing Materials</li>											</ul>

			<div className="cta">
			<ul>

			<li className="buy"><a href="/business_signup.php?package=premium&amp;type=clinic">CHOOSE</a></li>
			</ul>
			<span className="trial">7 DAY FREE TRIAL!</span>
			</div>
			</div><div className="grid_column featured value selected">
			<div className="ribbon-wrapper">
			<div className="ribbon">Best Value</div>
			</div>
			<div className="title">Featured</div>
			<span className="price"><span>$</span>99<sup>95</sup></span><span className="term" data-cents="95"> /mo</span>
			<ul className="details">
			<li><strong>10 Mile Local</strong> Exposure</li>
			<li><strong>Featured</strong> Map Icon</li>
			<li><strong>Patient</strong> Lead Capturing</li>
			<li>Business Analytics </li>
			<li>Call Tracking</li>
			<li>Marketing Materials</li>
			</ul>

			<div className="cta">
			<ul>

			<li className="buy"><a href="/business_signup.php?package=featured&amp;type=clinic">CHOOSE</a></li>
			</ul>
			<span className="trial">7 DAY FREE TRIAL!</span>
			</div>
			</div><div className="grid_column verified">
			<div className="ribbon-wrapper">
			<div className="ribbon"></div>
			</div>

			<div className="title">Verified</div>
			<span className="price"><span>$</span>29<sup>95</sup></span><span className="term" data-cents="95"> /mo</span>
			<ul className="details">										<li><strong>5 Mile Local</strong> Exposure</li>
			<li><strong>Verified</strong> Map Icon</li>
			<li><strong>Patient</strong> Lead Capturing</li>
			<li>Business Analytics </li>
			<li>Call Tracking</li>
			<li>Marketing Materials</li>											</ul>

			<div className="cta">
			<ul>
			<li><a href="/business_signup.php?package=verified&amp;type=clinic">CHOOSE</a></li>
			</ul>
			<span className="trial">&nbsp;</span>
			</div>
			</div><div className="grid_column claimed">
			<div className="ribbon-wrapper">
			<div className="ribbon"></div>
			</div>

			<div className="title">Claimed</div>
			<span className="price"><span>$</span>0</span><span className="term" data-cents=""> /mo</span>
			<ul className="details">										<li><strong>Local</strong> Exposure</li>
			<li><strong>Standard</strong> Map Icon</li>

			<li>Business Analytics </li>
			</ul>
			<div className="cta">
			<ul>
			<li><a href="/business_signup.php?package=claimed&amp;type=clinic">CHOOSE</a></li>
			</ul>
			<span className="trial">&nbsp;</span>
			</div>								</div>
			</div>

			</div>
			</div>

			</div>

			<span className="slide pricing" style={{display: "none"}} data-position="0">
			<span className="wrapper max1200">
			<h2><a name="doc_pricing">Plans built for clinics of all sizes.</a></h2>


			<span className="call_cta"><span className="heading">Questions? Call Us!</span><span className="number">(855) 420-7771</span></span>
			<span className="package_column_wrap four">
			<span className="package_column" data-id="premium_partner"><span className="package_column_inner">
			<span className="package_header">
			<span className="package_title partner">Partner </span>
			<span className="price partner" style={{ marginTop: "45px"}}>FREE</span>

			<span className="trial_text"><a href="/contact.php">REQUEST A CALL</a></span>
			</span>
			<span className="package_features">
			<ul>
			<li className="map_icon">
			<span className="icon_wrap listing_icon"><img src="/images/icon_new_premium.png" /></span>
			<span className="package_content">
			<span className="title">4x Map Icon Size</span>

			</span>
			</li>

			<li>
			<span className="icon_wrap"><span className="icon-sort50"></span><span className="icon-sort50 active_premium"></span></span>
			<span className="package_content">
			<span className="title">Top Ranking Position</span>
			<span className="desc">Outrank all other packages in priority area, guaranteed!</span>
			</span>
			</li>

			<li>
			<span className="icon_wrap"><span className="icon-location-2"></span></span>
			<span className="package_content">
			<span className="title">15 Mi Priority Area</span>
			<span className="desc">Furthest reaching package!<br />Spread your reach wide!</span>
			</span>
			</li>
			<li>
			<span className="icon_wrap"><span className="icon-keyboard50"></span><span className="icon-keyboard50 active_premium"></span></span>
			<span className="package_content">
			<span className="title">Premium Listing Size</span>
			<span className="desc">Largest available - review and full special text shown within for priority area!</span>
			</span>
			</li>


			<li>
			<span className="icon_wrap"><span className="icon-health"></span></span>
			<span className="package_content">
			<span className="title">Reputation Mgmt</span>
			<span className="desc">Feature &amp; respond to reviews, engage your customers</span>
			</span>
			</li>




			<li>
			<span className="icon_wrap"><span className="icon-medal"></span></span>
			<span className="package_content">
			<span className="title">Marketing Swagger</span>
			<span className="desc">Get free stuff to pass out to your patients and show off your business</span>
			</span>
			</li>
			</ul>
			</span>
			</span>
			</span><span className="package_column" data-id="premium"><span className="package_column_inner">
			<span className="package_header">
			<span className="package_title premium">Premium</span>
			<span className="price"><span>$</span>249<sup>95</sup></span><span className="term" data-cents="95"> /mo</span>


			<ul className="selection">
			<li><a href="/business_signup.php?type=clinic&amp;package=premium&amp;try=true" className="try">Try</a></li>
			<li><a href="/business_signup.php?type=clinic&amp;package=premium" className="buy">Buy</a></li>
			</ul>
			</span>
			<span className="package_features">
			<ul>
			<li className="map_icon">
			<span className="icon_wrap listing_icon"><img src="/images/icon_new_premium.png" /></span>
			<span className="package_content">
			<span className="title">4x Map Icon Size</span>

			</span>
			</li>

			<li>
			<span className="icon_wrap"><span className="icon-sort50"></span><span className="icon-sort50 active_premium"></span></span>
			<span className="package_content">
			<span className="title">Top Ranking Position</span>
			<span className="desc">Outrank all other packages in priority area, guaranteed!</span>
			</span>
			</li>

			<li>
			<span className="icon_wrap"><span className="icon-location-2"></span></span>
			<span className="package_content">
			<span className="title">15 Mi Priority Area</span>
			<span className="desc">Furthest reaching package!<br />Spread your reach wide!</span>
			</span>
			</li>
			<li>
			<span className="icon_wrap"><span className="icon-keyboard50"></span><span className="icon-keyboard50 active_premium"></span></span>
			<span className="package_content">
			<span className="title">Premium Listing Size</span>
			<span className="desc">Largest available - review and full special text shown within for priority area!</span>
			</span>
			</li>


			<li>
			<span className="icon_wrap"><span className="icon-health"></span></span>
			<span className="package_content">
			<span className="title">Reputation Mgmt</span>
			<span className="desc">Feature &amp; respond to reviews, engage your customers</span>
			</span>
			</li>




			<li>
			<span className="icon_wrap"><span className="icon-medal"></span></span>
			<span className="package_content">
			<span className="title">Marketing Swagger</span>
			<span className="desc">Get free stuff to pass out to your patients and show off your business</span>
			</span>
			</li>
			</ul>
			</span>
			</span>
			</span><span className="package_column " data-id="featured">
			<span className="package_column_inner">
			<span className="package_header">
			<span className="package_title featured">Featured</span>
			<span className="price"><span>$</span>99<sup>95</sup></span><span className="term" data-cents="95"> /mo</span>



			<ul className="selection">
			<li><a href="/business_signup.php?type=clinic&amp;package=featured&amp;try=true" className="try">Try</a></li>
			<li><a href="/business_signup.php?type=clinic&amp;package=featured" className="buy">Buy</a></li>
			</ul>
			</span>
			<span className="package_features" data-id="featured">
			<ul>
			<li className="map_icon">
			<span className="icon_wrap listing_icon featured"><img src="/images/icon_new_featured.png" /></span>
			<span className="package_content">
			<span className="title">2x Map Icon Size</span>

			</span>
			</li>

			<li>
			<span className="icon_wrap"><span className="icon-sort50"></span><span className="icon-sort50 active_featured"></span></span>
			<span className="package_content">
			<span className="title">2nd Ranking Position</span>
			<span className="desc">Rank above verified packages and unclaimed listings.</span>
			</span>
			</li>

			<li>
			<span className="icon_wrap"><span className="icon-location-2"></span></span>
			<span className="package_content">
			<span className="title">10 Mile Priority Radius</span>
			<span className="desc">Priority rank over all non-featured in your radius.</span>
			</span>
			</li>

			<li>
			<span className="icon_wrap"><span className="icon-keyboard50"></span><span className="icon-keyboard50 active_featured"></span></span>
			<span className="package_content">
			<span className="title">Featured Listing Size</span>
			<span className="desc">Larger image and full special text shown within for priority area</span>
			</span>
			</li>

			<li>
			<span className="icon_wrap"><span className="icon-health"></span></span>
			<span className="package_content">
			<span className="title">Reputation Mgmt</span>
			<span className="desc">Feature &amp; respond to reviews, engage your customers</span>
			</span>
			</li>



			</ul>
			</span>
			</span>
			</span><span className="package_column" data-id="verified"><span className="package_column_inner">
			<span className="package_header">
			<span className="package_title">Verified</span>
			<span className="price"><span>$</span>29<sup>95</sup></span><span className="term" data-cents="95"> /mo</span>


			<ul className="selection">
			<li><a href="/business_signup.php?type=clinic&amp;package=verified" className="buy only">Buy</a></li>
			</ul>
			</span>
			<span className="package_features">
			<ul>
			<li className="map_icon">
			<span className="icon_wrap listing_icon verified"><img src="/images/icon_new_standard.png" /></span>
			<span className="package_content">
			<span className="title">Standard Map Icon</span>

			</span>
			</li>

			<li>
			<span className="icon_wrap"><span className="icon-sort50"></span><span className="icon-sort50 active_verified"></span></span>
			<span className="package_content">
			<span className="title">Variable Ranking </span>
			<span className="desc">Above unverified listings, fluctuating ranking</span>
			</span>
			</li>

			<li>
			<span className="icon_wrap"><span className="icon-location-2"></span></span>
			<span className="package_content">
			<span className="title">No Priority Area</span>
			<span className="desc">Normal priority listing, ranking above all non-verified.</span>
			</span>
			</li>

			<li>
			<span className="icon_wrap"><span className="icon-keyboard50"></span><span className="icon-keyboard50 active_verified"></span></span>
			<span className="package_content">
			<span className="title">Standard Listing Size</span>
			<span className="desc">Standard card listing, ranked above unverified businesses listings.</span>
			</span>
			</li>




			</ul>
			</span>
			</span>
			</span>

			</span>



			</span>
			</span>


			<span className="slide advertising" data-position="0">
			<span className="wrapper max1200">
			<h1 id="tour_starts">Results-driven advertising for your doctors office</h1>
			<h2>Finding patients in in Lucknow  has never been easier!</h2>

			<span className="c_6 ad_stat">
			<span className="heading">
			<span className="stat">85%</span>
			<span className="label">Search Engine <span>Traffic</span></span>
			</span>
			<p>Our visitors are real patients and consumers, looking to make a purchase in the immediate future.</p>
			</span>

			<span className="c_6 ad_stat">
			<span className="heading">
			<span className="stat">1<span style={{fontSize: ".7em"}}>mm</span></span>
			<span className="label">Pageviews <span>Monthly</span></span>
			</span>
			<p>With over 1 million pageviews monthly at Where's Weed, your business is sure to get exposure with any of our advertising packages. Best of all, we provide valuable analytics to help you make important business decisions.</p>
			</span>


			</span>
			</span>

			<span className="slide tools2" data-position="0">
			<span className="wrapper max1200">
			<h1>Powerful Business Tools for Doctors</h1>

			<ul className="doc_tools docs">
			<li className="leads1">
			<img src="/images/icon_leads.png" />

			<h3>Attract New Patients</h3>
			<p>A business profile on Where's Weed ensures that your businsses will be seen by potential patients. </p>
			</li>

			<li className="leads2">
			<img src="/images/icon_lead2.png" />

			<h3>Capture Patient Leads</h3>
			<p>With a listing on Where's Weed, you'll be able to capture patient lead data right through your profile or even your own website.</p>
			</li>

			<li className="rep">
			<img src="/images/tour_rep.jpg" />

			<h3>Reputation Management</h3>
			<p>Monitor the pulse of your business online and engage your patients directly with our reputation management dashboard.</p>
			</li>

			<li className="widgets">
			<img src="/images/widget_header.jpg" />

			<h3>Website Widgets</h3>
			<p>Take the best parts of Where's Weed like your appointment setting form, patient reviews and follow button and embed them directly on your own website.</p>
			</li>

			</ul>

			</span>
			</span>

			<div className="tour4">
			<div className="faq">
			<div className="wrapper">
			<h2>Frequently Asked Questions</h2>

			<div className="c_6 faq_item">
			<h3>Can I try for free?</h3>
			<p>Yes! Where's Weed offers a free 7-day trial of our Featured &amp; Premium listings. </p>
			</div>



			<div className="c_6 faq_item">
			<h3>Do you accept anything other than credit cards?</h3>
			<p>At this time credit or pre-paid debit cards are the only payment solution we offer.</p>
			</div>

			<div className="c_6 faq_item">
			<h3>How many customers can I expect?</h3>
			<p>Exposure varies based on your locality. <a href="/contact.php">Contact us</a> to get more specific metrics about your local market.</p>
			</div>

			<div className="c_6 faq_item">
			<h3>Can I purchase additional map markers?</h3>
			<p>Yes! <a href="/contact.php">Contact us</a> to learn about additional map markers and other advertising opportunities. </p>
			</div>

			<div className="c_6 faq_item">
			<h3>How do I cancel?</h3>
			<p>You may cancel at any time by contacting us.</p>
			</div>



			</div>
			</div>


			</div>




			</div>
			</div>

			<div className="c12 tour4">
			<div className="question">
			<div className="wrapper">
			<form >
			<h2>Not sure which plan is right for you?</h2>
			<p>Feel free to give us a call with any questions at (855) 420-7771, or submit your information below and a Where's Weed representative will contact you and help answer any questions you might have. </p>

			<div className="form_item">
			<label>First Name</label>
			<input type="text" name="first_name" required />
			</div>

			<div className="form_item">
			<label>Last Name</label>
			<input type="text" name="last_name" required />
			</div>

			<div className="form_item">
			<label>Phone</label>
			<input type="text" name="phone" required />
			</div>

			<div className="form_item">
			<label>Email</label>
			<input type="text" name="email" required />
			</div>

			<div className="form_item">
			<label>Business Name</label>
			<input type="text" name="business_name" required />
			</div>

			<div className="form_item">
			<label>Location</label>
			<input type="text" name="location" />
			</div>

			<div className="form_item ta">
			<label>What can we help you with?</label>
			<textarea name="comment"></textarea>
			</div>

			<input name="listing_type" id="listing_type" type="hidden" />
			<div className="cta">
			<input type="submit" value="TALK TO A SALES REPRESENTATIVE" />
			<input name="contact_form" type="hidden" value="true" />
			</div>
			</form>
			</div>
			</div>
			</div>




			</div>



			</div>



			</div>
							{/*<footer className="main_footer">
								<div className="wrapper footer_bottom">
									<div className="c_4 site_so">
										<div className="footer_logo"><a href="/" title="Where's Weed"><img src="/images/logo_n2_2x.png" alt="Where's Weed" /></a></div>
										<div className="copy_terms">
											<p>Copyright 2012-2020 Where's Weed. <br />All Rights Reserved. <a href="/privacy.php">Privacy Policy</a> - <a href="/terms.php">Terms of Service</a></p>
						</div>
											<ul className="social_li">
												<li><a href="https://www.facebook.com/WheresWeed" className="facebook" title="Where's Weed Facebook"><span className="icon-facebook"></span></a></li>
												<li><a href="https://twitter.com/WheresWeed" className="twitter" title="Where's Weed Twitter"><span className="icon-twitter"></span></a></li>

											</ul>

										</div>
										<div className="c_3 link_list">
											<h5>Company</h5>
											<ul>
												<li><a href="https://wheresweed.com/contact.php">Contact Us</a></li>
												<li><a href="https://wheresweed.com/blog">Blog</a></li>
												<li><a href="https://wheresweed.com/brand.php">Brand</a></li>
												<li><a href="https://wheresweed.com/careers.php">Careers</a></li>
											</ul>
										</div>

										<div className="c_3 link_list">
											<h5>Users</h5>
											<ul>
												<li><a href="https://wheresweed.com/login.php?return=%2Ftour.php" rel="nofollow">Login</a></li>
												<li><a href="https://wheresweed.com/signup.php" rel="nofollow">Register</a></li>
												<li><a href="https://wheresweed.com/forgot.php" rel="nofollow">Forgot Password?</a></li>
											</ul>
										</div>
										<div className="c_2 link_list">
											<h5>Businesses</h5>
											<ul>
												<li><a href="https://wheresweed.com/tour.php" rel="nofollow" className="highlight">Add your business!</a></li>
												<li><a href="https://wheresweed.com/tour.php" rel="nofollow">Sign Up</a></li>

											</ul>
										</div>

										<div className="state_list_footer">
											<ul><li className="heading">States:</li>
												<li><h6><a href="https://wheresweed.com/alabama">Alabama</a></h6></li>
												<li><h6><a href="https://wheresweed.com/alaska">Alaska</a></h6></li>
												<li><h6><a href="https://wheresweed.com/arizona">Arizona</a></h6></li>
												<li><h6><a href="https://wheresweed.com/arkansas">Arkansas</a></h6></li>
												<li><h6><a href="https://wheresweed.com/california">California</a></h6></li>
												<li><h6><a href="https://wheresweed.com/colorado">Colorado</a></h6></li>
												<li><h6><a href="https://wheresweed.com/connecticut">Connecticut</a></h6></li>
												<li><h6><a href="https://wheresweed.com/delaware">Delaware</a></h6></li>
												<li><h6><a href="https://wheresweed.com/florida">Florida</a></h6></li>
												<li><h6><a href="https://wheresweed.com/georgia">Georgia</a></h6></li>
												<li><h6><a href="https://wheresweed.com/hawaii">Hawaii</a></h6></li>
												<li><h6><a href="https://wheresweed.com/idaho">Idaho</a></h6></li>
												<li><h6><a href="https://wheresweed.com/illinois">Illinois</a></h6></li>
												<li><h6><a href="https://wheresweed.com/indiana">Indiana</a></h6></li>
												<li><h6><a href="https://wheresweed.com/iowa">Iowa</a></h6></li>
												<li><h6><a href="https://wheresweed.com/kansas">Kansas</a></h6></li>
												<li><h6><a href="https://wheresweed.com/kentucky">Kentucky</a></h6></li>
												<li><h6><a href="https://wheresweed.com/louisiana">Louisiana</a></h6></li>
												<li><h6><a href="https://wheresweed.com/maine">Maine</a></h6></li>
												<li><h6><a href="https://wheresweed.com/maryland">Maryland</a></h6></li>
												<li><h6><a href="https://wheresweed.com/massachusetts">Massachusetts</a></h6></li>
												<li><h6><a href="https://wheresweed.com/michigan">Michigan</a></h6></li>
												<li><h6><a href="https://wheresweed.com/minnesota">Minnesota</a></h6></li>
												<li><h6><a href="https://wheresweed.com/mississippi">Mississippi</a></h6></li>
												<li><h6><a href="https://wheresweed.com/missouri">Missouri</a></h6></li>
												<li><h6><a href="https://wheresweed.com/montana">Montana</a></h6></li>
												<li><h6><a href="https://wheresweed.com/nebraska">Nebraska</a></h6></li>
												<li><h6><a href="https://wheresweed.com/nevada">Nevada</a></h6></li>
												<li><h6><a href="https://wheresweed.com/new-hampshire">New Hampshire</a></h6></li>
												<li><h6><a href="https://wheresweed.com/new-jersey">New Jersey</a></h6></li>
												<li><h6><a href="https://wheresweed.com/new-mexico">New Mexico</a></h6></li>
												<li><h6><a href="https://wheresweed.com/new-york">New York</a></h6></li>
												<li><h6><a href="https://wheresweed.com/north-carolina">North Carolina</a></h6></li>
												<li><h6><a href="https://wheresweed.com/north-dakota">North Dakota</a></h6></li>
												<li><h6><a href="https://wheresweed.com/ohio">Ohio</a></h6></li>
												<li><h6><a href="https://wheresweed.com/oklahoma">Oklahoma</a></h6></li>
												<li><h6><a href="https://wheresweed.com/oregon">Oregon</a></h6></li>
												<li><h6><a href="https://wheresweed.com/pennsylvania">Pennsylvania</a></h6></li>
												<li><h6><a href="https://wheresweed.com/puerto-rico">Puerto Rico</a></h6></li>
												<li><h6><a href="https://wheresweed.com/rhode-island">Rhode Island</a></h6></li>
												<li><h6><a href="https://wheresweed.com/south-carolina">South Carolina</a></h6></li>
												<li><h6><a href="https://wheresweed.com/south-dakota">South Dakota</a></h6></li>
												<li><h6><a href="https://wheresweed.com/tennessee">Tennessee</a></h6></li>
												<li><h6><a href="https://wheresweed.com/texas">Texas</a></h6></li>
												<li><h6><a href="https://wheresweed.com/utah">Utah</a></h6></li>
												<li><h6><a href="https://wheresweed.com/vermont">Vermont</a></h6></li>
												<li><h6><a href="https://wheresweed.com/virginia">Virginia</a></h6></li>
												<li><h6><a href="https://wheresweed.com/washington">Washington</a></h6></li>
												<li><h6><a href="https://wheresweed.com/washington-dc">Washington DC</a></h6></li>
												<li><h6><a href="https://wheresweed.com/west-virginia">West Virginia</a></h6></li>
												<li><h6><a href="https://wheresweed.com/wisconsin">Wisconsin</a></h6></li>
												<li><h6><a href="https://wheresweed.com/wyoming">Wyoming</a></h6></li>
												<li><h6><a href="https://wheresweed.com/alberta">Alberta</a></h6></li>
												<li><h6><a href="https://wheresweed.com/british-columbia">British Columbia</a></h6></li>
												<li><h6><a href="https://wheresweed.com/manitoba">Manitoba</a></h6></li>
												<li><h6><a href="https://wheresweed.com/new-brunswick">New Brunswick</a></h6></li>
												<li><h6><a href="https://wheresweed.com/newfoundland">Newfoundland</a></h6></li>
												<li><h6><a href="https://wheresweed.com/nova-scotia">Nova Scotia</a></h6></li>
												<li><h6><a href="https://wheresweed.com/ontario">Ontario</a></h6></li>
												<li><h6><a href="https://wheresweed.com/prince-edward-island">Prince Edward Island</a></h6></li>
												<li><h6><a href="https://wheresweed.com/quebec">Quebec</a></h6></li>
												<li><h6><a href="https://wheresweed.com/saskatchewan">Saskatchewan</a></h6></li>
											</ul>
										</div>
									</div>
								</footer>*/}
								</div>
								</div>

						{/*<div className="suggested-container " >
							<div className="container">
								<div className="suggested-text-home-page">
									<p>Suggested in Washington</p>
								</div>

								<div className="suggested-iteams-container">

									<div className="suggested-iteams">
										<a href="/#">
											<img alt='' src="images/11.png" />
											<label>Strains</label>
										</a>
									</div>

									<div className="suggested-iteams">
										<a href="/#">
											<img alt='' src="images/22.png" />
											<label>Deals</label>
										</a>
									</div>

									<div className="suggested-iteams">
										<a href="/#">
											<img alt='' src="images/33.png" />
											<label>Recreational</label>
										</a>
									</div>

									<div className="suggested-iteams">
										<a href="/#">
											<img alt='' src="images/44.png" />
											<label>Dispensaries</label>
										</a>
									</div>

									<div className="suggested-iteams">
										<a href="/#">
											<img alt='' src="images/55.png" />
											<label>Deliveries</label>
										</a>
									</div>

									<div className="suggested-iteams">
										<a href="/#">
											<img alt='' src="images/66.png" />
											<label>Doctors</label>
										</a>
									</div>

								</div>

							</div>
						</div>*/}


						</React.Fragment>
						)
}
}
