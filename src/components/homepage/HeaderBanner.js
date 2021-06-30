import React from 'react';
import './HeaderBannerStyle.css';

export default function HeaderBanner(){
   
   
   return (
      <div className="header__banner-container">
    <div className="header--flex">
            <div className="header__banner">
                     <div className="header__banner-image-box">
            <img src="./images/sandwiches-819x1024.jpg" alt="" className="header__banner-image" />

         </div>

         <div className="header__banner-content">
            <h2 className="header__banner-content-title">Healthy and satisfying meals. </h2>
            <p className="header__banner-content-text">
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime dignissimos nesciunt iusto, eligendi animi, sapiente fugit? Ipsa non.
            </p>
            <a href="/menu" className="btn btn--link">order now</a>
         </div>
    </div>
<div className="header__banner-infomatics-wrapper">
   <div className="header__banner-infomatics">
      <span className="header__banner-infomatics-icon"></span>
      <div className="header__banner-infomatics-content"><span className="header__banner-infomatics-content-title">24/7 Service</span>
      <span>We are always at your service</span>
      </div>
   </div>
   <div className="header__banner-infomatics">
      <span className="header__banner-infomatics-icon"></span>
      <div className="header__banner-infomatics-content"><span className="header__banner-infomatics-content-title">Home delivery</span>
      <span>We deliver it to you anywhere</span>
      </div>
   </div>
   <div className="header__banner-infomatics">
      <span className="header__banner-infomatics-icon"></span>
      <div className="header__banner-infomatics-content"><span className="header__banner-infomatics-content-title">satisfaction guaranteed</span>
      <span>Your satisfaction is our utmost concern</span>
      </div>
   </div>
</div>
</div>
    <div className="event__header-banner header--flex">
            <div className="header__banner">
                     <div className="header__banner-image-box">
            <img src="./images/wedding-reception-128245_1280.jpg" alt="" className="header__banner-image" />

         </div>

         <div className="header__banner-content">
            <h2 className="header__banner-content-title">Comfortable event Centers. </h2>
            <p className="header__banner-content-text">
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime dignissimos nesciunt iusto, eligendi animi, sapiente fug.
            </p>
            <a href="/reservation" className="btn btn--link">book now</a>
         </div>
    </div>
<div className="header__banner-infomatics-wrapper">
   <div className="header__banner-infomatics">
      <span className="header__banner-infomatics-icon"></span>
      <div className="header__banner-infomatics-content"><span className="header__banner-infomatics-content-title">24/7 Service</span>
      <span>We are always at your service.</span>
      </div>
   </div>
   <div className="header__banner-infomatics">
      <span className="header__banner-infomatics-icon"></span>
      <div className="header__banner-infomatics-content"><span className="header__banner-infomatics-content-title">Maximum security</span>
      <span>We ensure safety at our event centers. </span>
      </div>
   </div>
   <div className="header__banner-infomatics">
      <span className="header__banner-infomatics-icon"></span>
      <div className="header__banner-infomatics-content"><span className="header__banner-infomatics-content-title">satisfaction guaranteed</span>
      <span>Your satisfaction is our utmost concern</span>
      </div>
   </div>
</div>
</div>
</div>  

      )
   
}