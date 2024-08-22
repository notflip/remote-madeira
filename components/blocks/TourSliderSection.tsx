'use client'

import Slider from '@ant-design/react-slick'

const placeSlider = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 800,
  autoplay: true,
  variableWidth: true,
  centerMode: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export default function TourSliderSection() {
  return (
    <Slider {...placeSlider} className="place-slider">
      <div className="place-slider-item">
        <div className="place-img">
          <img src="assets/images/place/single-place-1.jpg" alt="Place Image" />
        </div>
      </div>
      <div className="place-item">
        <div className="place-img">
          <img src="assets/images/place/single-place-2.jpg" alt="Place Image" />
        </div>
      </div>
      <div className="place-slider-item">
        <div className="place-img">
          <img src="assets/images/place/single-place-3.jpg" alt="Place Image" />
        </div>
      </div>
      <div className="place-slider-item">
        <div className="place-img">
          <img src="assets/images/place/single-place-2.jpg" alt="Place Image" />
        </div>
      </div>
    </Slider>
  )
}
