import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import sliderImg_1 from "../images/slider/sliderImg_1.jpg";
import sliderImg_2 from "../images/slider/sliderImg_2.jpg";
import sliderImg_3 from "../images/slider/sliderImg_3.jpg";
import sliderImg_4 from "../images/slider/sliderImg_4.jpg";

const Banner = () => {
  return (
    <div className="relative">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={3000}
      >
        <div>
          <Image src={sliderImg_1} alt="err" />
          {/* <p className="legend"></p> */}
        </div>
        <div>
          <Image src={sliderImg_2} alt="err" />
          {/* <p className="legend"></p> */}
        </div>
        <div>
          <Image src={sliderImg_3} alt="err" />
          {/* <p className="legend"></p> */}
        </div>
        <div>
          <Image src={sliderImg_4} alt="err" />
          {/* <p className="legend"></p> */}
        </div>
        
      </Carousel>
      <div className="w-full h-40 bg-gradient-to-t from-gray-100 to-transparent absolute bottom-0 z-2"></div>
    </div>
  );
};

export default Banner;
