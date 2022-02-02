import React from 'react'
import One from './images/productimages/one.webp'
import Two from './images/productimages/two.webp'
import Three from './images/productimages/three.webp'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import TopProductscss from './css/TopProducts.css'

const responsive = {
    0: { items: 2 },
    568: { items: 3 },
    1024: { items: 4 },
};

const items = [
     <div className="item" data-value="1">
         <div className='card-container-top-products'>
              <div className='img-container'>
                   <img src={One} />
              </div>
              <div className='title-container'>
                   <h3>Link To Go</h3>
              </div>
         </div>
    </div>,
    <div className="item" data-value="2">
        <div className='card-container-top-products'>
              <div className='img-container'>
                   <img src={Two} />
              </div>
              <div className='title-container'>
                   <h3>Link To Go</h3>
              </div>
         </div>
    </div>,
    <div className="item" data-value="1">
    <div className='card-container-top-products'>
         <div className='img-container'>
              <img src={One} />
         </div>
         <div className='title-container'>
              <h3>Link To Go</h3>
         </div>
    </div>
</div>,
<div className="item" data-value="2">
   <div className='card-container-top-products'>
         <div className='img-container'>
              <img src={Three} />
         </div>
         <div className='title-container'>
              <h3>Link To Go</h3>
         </div>
    </div>
</div>
     
];

const Carousel = (props) => (
     <div className='topProducts-container'>
          <h3>{props.title}</h3>
          <AliceCarousel
               items={items}
               disableSlideInfo={false}
               disableButtonsControls={true}
               disableDotsControls={true}
               keyboardNavigation={true}
               mouseTracking={true}
               responsive={responsive}
               controlsStrategy="alternate"
          />
     </div>
)
export default Carousel