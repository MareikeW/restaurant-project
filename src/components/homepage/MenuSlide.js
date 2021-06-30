import React from 'react';
import './MenuSlideStyle.css';

export default function MenuSlide(){
   
   
   return (
      <section className="section meal--slide-section">
   <div className="section__header">
      <h2 className="section__title">Dishes you will love.</h2>
      <a href="#" className="a--link">see all</a>
   </div>
   
   <ul className="menu__slide-container">
      <li className="menu__slide">
         <div className="menu__slide-image-box">
            <img src="./images/flakes-819x1024.jpg" alt="" className="menu__slide-image" />
         </div>
                       <span className="menu__slide-title">Delicious Mexican sandwiches</span>

      </li>
      <li className="menu__slide">
              <div className="menu__slide-image-box">
                 <img src="./images/sandwiches-819x1024.jpg" alt="" className="menu__slide-image"/>
              </div>
              <span className="menu__slide-title">Delicious Mexican sandwiches</span>


      </li>
      <li className="menu__slide">
              <div className="menu__slide-image-box">
                 <img src="./images/cake-768x1024.jpg" alt="" className="menu__slide-image" />
              </div>
                            <span className="menu__slide-title">Delicious Mexican sandwiches</span>


      </li>
      <li className="menu__slide">
              <div className="menu__slide-image-box">
                 <img src="./images/fish-1024x683.jpg" alt="" className="menu__slide-image"/>
              </div>
                            <span className="menu__slide-title">Delicious Mexican sandwiches</span>

      </li>
   </ul>
</section>

      )
   
   
}