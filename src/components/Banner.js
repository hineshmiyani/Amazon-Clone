import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function Banner() {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={3000}
      >
        <div>
          <img src="https://bit.ly/3iNZjth" loading="lazy" alt="" />
        </div>

        <div>
          <img src="https://bit.ly/3AHHUIU" loading="lazy" alt="" />
        </div>
        <div>
          <img src="https://bit.ly/3g89Y07" loading="lazy" alt="" />
        </div>

        <div>
          <img src="https://bit.ly/2VWdNy8" loading="lazy" alt="" />
        </div>

        <div>
          <img src="https://bit.ly/3yPwhPJ" loading="lazy" alt="" />
        </div>

        <div>
          <img src="https://bit.ly/3skjhz0" loading="lazy" alt="" />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
