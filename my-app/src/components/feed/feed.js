import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./feed.css"
import React from 'react'

const Feed = () => {

  const images = [{
    id: 1,
    src: require("../../img/1.jpeg"),
    alt: "Image 1"
},
{
    id: 2,
    src: require("../../img/2.jpeg"),
    alt: "Image 2 "
}
];

const settings = {
	infinite: true,
	dots: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	lazyLoad: true,
	autoplay: true,
  autoplaySpeed: 4000

};

return (
	<>
	<div className="imgslider">
		<Slider {...settings}>
		{images.map((item) => (
		<div classname="slider-images" style={{ width: 100 }}>
			<img src={item.src} alt={item.alt} />
		</div>
		))}
		</Slider>
	</div>
		</>
)
}
export default Feed;
