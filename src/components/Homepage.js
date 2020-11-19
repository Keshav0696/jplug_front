


import React, { Component } from 'react';
import Footer from './Footer';
// import $ from 'jquery';
const $ = window.$;


export default class Homepage extends Component{
  constructor () {
    super()
    this.state = {
  
    }
  }

  componentDidMount(){
    $('.owl-carousel').owlCarousel({  
        items: 3, 
      loop: true,
                  margin:10, 
                  dots: false,
                  nav: true,
                  //autoplay:true,
                      mouseDrag: true,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          nav: true
        },
        600: {
          items: 3,
          nav: false
        },
        1000: {
          items:3,
          nav: true,
          loop: false,
          margin: 20
        }
      }
    });
    $( ".owl-prev").html('<img src="images/aro-l.png">');
                   $( ".owl-next").html('<img src="images/aro-r.png">');
  }

  render(){
    return (

<React.Fragment>
<div className="banner-video">
	<div className="video-container">
	    <video loop="" autoPlay="" playsInline="" src="https://player.vimeo.com/external/353890750.hd.mp4?s=95cdb39d0c577123df3a219a756d7d6c6550eee9&amp;profile_id=175&amp;title=0&amp;byline=0&amp;portrait=0&amp;color=000000&amp;muted=1&amp;autoplay=1&amp;autopause=0&amp;playsinline=1&amp;loop=1&amp;background=1"></video>
		
	</div>
	<div className="bnrscearch"> 
		<h1 className="heading1">Discover Trusted Marijuana Businesse in<br/>Your Communinty</h1>
		<p>Enter your city or zip code below:</p>
		<div className="bnr-search">
			<div className="input-group">
			  <input type="text" className="form-control"/>
			  <div className="input-group-prepend">
			    <button className="btn tobtn-green">SEARCH</button>
			  </div>
			</div>
		</div>
	</div>
</div> 

<div className="suggested-container">
    <div className="container">
    <div className="suggested-text-home-page">
        <p>Suggested in Washington</p>
    </div>
    
    <div className="suggested-iteams-container">
    
      <div className="suggested-iteams">
		  <a href="/#">
        <img src="images/11.png" />
          <label>Strains</label>
		  </a>
    </div>
        
             <div className="suggested-iteams">
		<a href="/#">
        <img src="images/22.png" />
          <label>Deals</label>
		  </a>
    </div>
        
             <div className="suggested-iteams">
			 <a href="/#">
        <img src="images/33.png" />
          <label>Recreational</label>
		  </a>
    </div>
        
             <div className="suggested-iteams">
			 <a href="/#">
        <img src="images/44.png" />
          <label>Dispensaries</label>
		  </a>
    </div>
        
             <div className="suggested-iteams">
				 <a href="/#">
        <img src="images/55.png" />
          <label>Deliveries</label>
		  </a>
    </div>
        
             <div className="suggested-iteams">
				 <a href="/#">
        <img src="images/66.png" />
          <label>Doctors</label>
		  </a>
    </div>
           
    </div>

</div>
</div>


<div className="main_cta_slide">
	<div className="wrapper">
		<div className="heading">marijuana dispensaries, delivery and<br /> doctors in washington 2001</div>
	</div>
</div>



<div className="product-container">
    <div className="container">

    <div className="product-iteams-container">
      <div className="product-iteams">
	  <a href="/#" >  
			<div className="image-product-parent-container">
				<div className="product-image-conatiner">
					<img src="images/product-1.jpg" />
				</div>
				<div className="product-forground-img">
					<img src="images/product-forground-1.jpg" />
				</div>
			</div>
        <div className="product-name">
		<h3>Kush coma</h3>
		</div>

		<div className="product-subdiscription">
		<p>DC Marijuana Delivery</p>
		</div>

		<div className="product-rating">
		<img src="images/rating.jpg" />
		</div>
		</a>
    </div>

	<div className="product-iteams">
  <a href="/#" >  
			<div className="image-product-parent-container">
				<div className="product-image-conatiner">
					<img src="images/product-1.jpg" />
				</div>
				<div className="product-forground-img">
					<img src="images/product-forground-1.jpg" />
				</div>
			</div>
        <div className="product-name">
		<h3>Kush coma</h3>
		</div>

		<div className="product-subdiscription">
		<p>DC Marijuana Delivery</p>
		</div>

		<div className="product-rating">
		<img src="images/rating.jpg" />
		</div>
		</a>
 </div>

	<div className="product-iteams">
  <a href="/#" >  
			<div className="image-product-parent-container">
				<div className="product-image-conatiner">
					<img src="images/product-1.jpg" />
				</div>
				<div className="product-forground-img">
					<img src="images/product-forground-1.jpg" />
				</div>
			</div>
        <div className="product-name">
		<h3>Kush coma</h3>
		</div>

		<div className="product-subdiscription">
		<p>DC Marijuana Delivery</p>
		</div>

		<div className="product-rating">
		<img src="images/rating.jpg" />
		</div>
		</a>
    </div>

	<div className="product-iteams">
  <a href="/#" >  
			<div className="image-product-parent-container">
				<div className="product-image-conatiner">
					<img src="images/product-1.jpg" />
				</div>
				<div className="product-forground-img">
					<img src="images/product-forground-1.jpg" />
				</div>
			</div>
        <div className="product-name">
		<h3>Kush coma</h3>
		</div>

		<div className="product-subdiscription">
		<p>DC Marijuana Delivery</p>
		</div>

		<div className="product-rating">
		<img src="images/rating.jpg" />
		</div>
		</a>
    </div>
        
      
           
    </div>

</div>
</div>

<div className="container">
	<div className="now-to text-center margin-bottom-70">
		<h1 className="heading1 margin-top-50 m-margin-top-30 margin-bottom-30 m-margin-bottom-20">New to JointPlug?</h1>
		<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
	</div>

	<div className="row">
		<div className="col-md-8">
				<h1 className="heading1">Create an Account</h1>
			<div className="row">
				<div className="col-md-6">
					<div className="ct-hld">
						<img alt="true" src="images/ic1.png" />
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
					</div>
				</div>
				<div className="col-md-6">
					<div className="ct-hld">
						<img alt="true" src="images/ic2.png"/>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
					</div>
				</div>
				<div className="col-md-6">
					<div className="ct-hld">
						<img alt="true" src="images/ic3.png"/>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
					</div>
				</div>
				<div className="col-md-6">
					<div className="ct-hld">
						<img alt="true" src="images/ic4.png"/>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
					</div>
				</div>
			</div>
		</div>
		<div className="col-md-4">
			<div className="crear-login">
				<h1 className="heading1">Login:</h1>
				<ul>
					<li><a href="/#"><img alt="true" src="images/fb.png"/></a></li>
					<li><a href="/#"><img alt="true" src="images/twt.png"/></a></li>
					<li><a href="/#"><img alt="true" src="images/gpl.png"/></a></li>
				</ul>
				<p>Don't Have Account</p>
				<button className="btn btn-green creat-btn">Create an Account</button>
			</div>
		</div>
	</div>
</div>
<div className="black-bg">
		<h1 className="heading1">Marijuana News & Events</h1>
 	
    <div className="container" >
       <div className="owl-carousel owl-theme">
            

       	<div className="item">
          <div className="thumbnail">
            <img alt="true" src="images/tumpnail.png"/>
              <div className="caption">
              	<p>October 27, 2020</p>
                <h4>How These 7 Amazing Women Changed the weed Industry?</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, soluta, eligendi doloribus sunt minus amet sit debitis repellat. Consectetur, culpa itaque odio similique suscipit</p>
                 <a href="/#" className="btn btn-green" role="button">VIEW EVENT</a>
            	</div>
          </div>
        </div>
       	<div className="item">
          <div className="thumbnail">
            <img alt="true" src="images/tumpnail.png" />
              <div className="caption">
              	<p>October 27, 2020</p>
                <h4>How These 7 Amazing Women Changed the weed Industry?</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, soluta, eligendi doloribus sunt minus amet sit debitis repellat. Consectetur, culpa itaque odio similique suscipit</p>
                 <a href="/#" className="btn btn-green" role="button">VIEW EVENT</a>
            	</div>
          </div>
        </div>

       	<div className="item">
          <div className="thumbnail">
            <img alt="true" src="images/tumpnail.png" />
              <div className="caption">
              	<p>October 27, 2020</p>
                <h4>How These 7 Amazing Women Changed the weed Industry?</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, soluta, eligendi doloribus sunt minus amet sit debitis repellat. Consectetur, culpa itaque odio similique suscipit</p>
                 <a href="/#" className="btn btn-green" role="button">VIEW EVENT</a>
            	</div>
          </div>
        </div>

        <div className="item">
          <div className="thumbnail">
            <img alt="true" src="images/tumpnail.png" />
              <div className="caption">
              	<p>October 27, 2020</p>
                <h4>How These 7 Amazing Women Changed the weed Industry?</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, soluta, eligendi doloribus sunt minus amet sit debitis repellat. Consectetur, culpa itaque odio similique suscipit</p>
                 <a href="/#" className="btn btn-green" role="button">VIEW EVENT</a>
            	</div>
          </div>
        </div>

        <div className="item">
          <div className="thumbnail">
            <img alt="true" src="images/tumpnail.png" />
              <div className="caption">
              	<p>October 27, 2020</p>
                <h4>How These 7 Amazing Women Changed the weed Industry?</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, soluta, eligendi doloribus sunt minus amet sit debitis repellat. Consectetur, culpa itaque odio similique suscipit</p>
                 <a href="/#" className="btn btn-green" role="button">VIEW EVENT</a>
            	</div>
          </div>
        </div>
      </div>    
    </div>
</div>


<div className="container">
	<div className="row get-app">
		<div className="col-md-6">
			<img alt="true" src="images/app-image.png" className="apimg" />
		</div>
		<div className="col-md-6">
			<h1 className="heading1 margin-bottom-18 m-margin-bottom-18 m-margin-top-18">Get the App</h1>
			<p className="discover margin-bottom-50 m-margin-bottom-20">Discover local businesses. Find the best deals.<br/> Connect & share wih friends.</p>
			<a href="/#" className="margin-right-20 pull-left"><img alt="true" src="images/ply-str.png" /></a>
			<a href="/#" className="margin-right-20 pull-left"><img alt="true" src="images/ply-str.png" /></a>
			<a href="/#" className="margin-right-20 pull-left"><img alt="true" src="images/ply-str.png" /></a>
		</div>		
	</div>
</div>

<Footer />
</React.Fragment>
  )
    }
    }
