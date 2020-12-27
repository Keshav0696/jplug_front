import React from 'react';
import { useSelector } from 'react-redux';

const Profile = (props) => {
	return (
		<React.Fragment>
			<div className="site_wrap">
				<div id="bg_map_container_container" className="has_filter" style={{ display: 'none' }}>
					<div id="bg_map_container">
						<div id="bg_map" />
					</div>
				</div>
				<div className="body_wrap">
					<div className="shadow">
						<div className="content_wrap">
							<div className="main user_profile" data-id={837998}>
								<div id="sub_content" className="user_content2">
									<div className="user_header">
										<div className="wrapper">
											<div className="user_thumb">
												<a href="/profile"><img src="/user_images/250x250/default.png" alt="" />
													<span style={{ display: 'none' }} />
												</a>
											</div>
											<div className="name">
												<h1>
													<a href="/profile">Arvind</a>
												</h1>
											</div>
											<span className="profile_cta"><a href="/profile/edit" className="edit">
												<span className="icon-pencil" /> Edit Profile</a>
											</span>
											<div className="profile_stats">
												<ul>
													<li>
														<a href="/gallery">
															<span className="count">0</span>
															<span className="label">Photos</span>
														</a>
													</li>
													<li>
														<a href="/reviews">
															<span className="count">0</span>
															<span className="label">Reviews</span>
														</a>
													</li>
													<li>
														<a href="/following">
															<span className="count">0</span>
															<span className="label">Following</span>
														</a>
													</li><li>
														<a href="/checkins_strains">
															<span className="count">0</span>
															<span className="label">Checkins</span>
														</a>
													</li>
												</ul>
											</div>
										</div>
									</div>
									<div className="profile_left_nav">
										<div className="wrapper">
											<ul>
												<li className="user_hide dash"><a href="/profile" className="dashboard active" data-nav="home"><span className="icon-home icon" /><span className="label" /></a></li><li><a href="/profile/pre-orders" className="orders" data-nav="pre-orders"><span className="icon-shopping2 icon" /><span className="label">Pre-Orders</span></a></li><li className="user_hide"><a href="/profile/checkins_strains" className="friends_link" data-nav="checkins"><span className="icon-location-2 icon" /><span className="label">Strain Check-ins</span></a></li><li><a href="/profile/wishlist" className="wishlist_link" data-nav="wishlist"><span className="icon-users icon" /><span className="number">0</span><span className="label">Wishlist</span></a></li><li><a href="/profile/badges" className="badges_link" data-nav="badges"><span className="icon-users icon" /><span className="number">0</span><span className="label">Badges</span></a></li><li><a href="/profile/friends" className="friends_link" data-nav="friends"><span className="icon-users icon" /><span className="number">0</span><span className="label">Friends</span></a></li><li className="user_hide"><a href="/profile/following" className="following2" data-nav="following"><span className="icon-city5 icon" /><span className="number">0</span><span className="label">Following</span></a></li><li className="user_hide"><a href="/profile/gallery" className="gallery" data-nav="gallery"><span className="icon-camera-2 icon" /><span className="number">0</span><span className="label">Pictures</span></a></li><li className="user_hide"><a href="/profile/reviews" className="reviews" data-nav="reviews"><span className="icon-bubbles icon" /><span className="number">0</span><span className="label">Reviews</span></a></li><li><a href="/profile/about" className="about" data-nav="about"><span className="icon-bubble-quote icon" /><span className="label">About</span></a></li><li><a href="/profile/inbox" className="contact"><span className="icon-envelop icon" /><span className="number" /><span className="label">Inbox</span></a></li>
											</ul>
											<div className="user_expand" data-toggle="fullsize" data-target=".profile_left_nav">(more)</div>
										</div>
									</div>
									{/*- Begin User body-*/}
									<div className="wrapper">
										<div className="user_lists c_3">
											<div className="left_user_box strains">
												<span className="heading">
													Strains
												</span>
												<ul className="strain_stats">
													<li className="checkins">
														<a href="/profile/checkins_strains">
															<span className="number">0</span>
															<span className="label">Check-Ins</span>
														</a>
													</li>
													<li className="wishlist wishlist_count">
														<a href="/profile/wishlist">
															<span className="number">0</span>
															<span className="label">Wishlist</span>
														</a>
													</li>
													<li className="badges">
														<a href="/profile/badges">
															<span className="number">0</span>
															<span className="label">Badges</span>
														</a>
													</li>
												</ul>
											</div>
											<div className="left_user_box preorders">
												<span className="heading">
													<a href="/profile/pre-orders">Pre-Orders <span className="more2">See All</span></a>
												</span>
												<p>Where's JPlug makes it easy to pre-order your purchases thorugh participating businesses.</p>
												<ul className="tab_nav">
													<li className="active"><a href="/profile/pre-orders">Current Orders</a></li>
													<li><a href="/profile/pre-orders/inactive">Previous Orders</a></li>
												</ul>
												<p className="no_orders">You have no current orders! <a href="/">Find a business!</a></p>
											</div>
											<div className="left_user_box followers">
												<span className="heading">
													<a href="#">Followers <span className="more2">See All</span></a>
												</span>
												<ul>
													<li>
														<a href="/users/JPlugo"><img src="/user_images/50x50/default.png" />
														</a>
													</li>
												</ul>
											</div>
										</div>	<ul className="c_8 timeline">
											<li id="new_post">
												<div className="box add">
													<span className="title">Add a Post</span>
													<div className="textarea_wrap">
														<form method="post" action="?action=new_post" id="new_post_form" encType="multipart/form-data" className="fu_form">
															<input type="hidden" name="action" defaultValue="new_post" />
															<textarea className="default" name="post" id="post" placeholder="What's on your mind?" defaultValue={""} />
															<div className="fu_wrap single" id="post_file">
																<div className="fu_upload">
																	<span className="fu_replace just_icon">
																		<input type="file" name="post_file" className="file_uploader no_title active" data-icon="camera" data-number={0} />
																		<span className="data_icon icon-camera" data-id="post_file" />
																	</span></div>
																<div className="fu_status">
																	<fieldset data-number={0} className="fu_preview no_title" data-id="post_file">
																		<legend>Preview</legend><ul className="fu_list sortable" />
																	</fieldset>
																	<fieldset data-number={0} className="fu_progress" data-id="post_file">
																		<legend>Progress</legend>
																	</fieldset>
																</div>
															</div>
															<button className="timeline_post">Post</button>
														</form>
													</div>
												</div>
											</li>
											<li className="newsfeed_heading">Newsfeed</li>
											<li className="empty_msg no_messages">There haven't been any wall posts for this user yet!  Be the first!</li>
										</ul>
									</div>
									<div className="clear" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default Profile;