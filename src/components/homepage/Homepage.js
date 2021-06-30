import React from 'react';
import './HomepageStyle.css';
import Navigation from './Navigation';
import MenuSlide from './MenuSlide';
import HeaderBanner from './HeaderBanner';

export default function Homepage(){
   
   
   return (
      <div className="wrapper">
      <Navigation />
      <HeaderBanner />
      <section className="section food__section grid col--2">
   <div className="food__section-content">
      <h2 className="food__section-content-title">let's make your tummy happy.</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est explicabo quibusdam officia quasi consequatur optio aliquam, inventore pariatur dignissimos necessitatibus delectus, odit esse ad commod.</p>
   </div>
   <div className="food__section-image-box">
      <img src="./images/korean-restaurant-1024x683.jpg" alt="" className="food__section-image" />
   </div>
</section>
   
   <section className="section event__section grid col--2">
         <div className="event__section-image-box">
      <img src="./images/beach-185076_1280.jpg" alt="" className="event__section-image" />
   </div>

   <div className="event__section-content">
      <h2 className="event__section-content-title">let's host that event for you.</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est explicabo quibusdam officia quasi consequatur optio aliquam, inventore pariatur dignissimos necessitatibus delectus, odit esse ad commodi.</p>
   </div>
</section>

      
      <MenuSlide />
      </div>
      )
   
   
}