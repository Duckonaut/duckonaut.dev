import './carousel.css';
import Slider, { Settings } from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel(props: { children: any }) {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div class="carousel-wrapper">
      <Slider {...settings}>
        {
          props.children instanceof Array ?
            props.children.map((child: any) => {
              return (
                <div class="carousel-item">{child}</div>
              );
            })
            :
            <div class="carousel-item">{props.children}</div>
        }
      </Slider>
    </div>
  );
}
