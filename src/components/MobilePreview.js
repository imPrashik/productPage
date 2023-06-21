import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function MobilePreview() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={false}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper max-w-xs sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg"
            >
                <SwiperSlide>
                    <img
                        className="object-fit w-full--- h-96 my-0 mx-auto"
                        src="./item1/1.png"
                        alt="image slide 1"
                        loading="lazy"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-fit w-full--- h-96 my-0 mx-auto"
                        src="./item1/2.png"
                        alt="image slide 2"
                        loading="lazy"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-fit w-full--- h-96 my-0 mx-auto"
                        src="./item1/3.png"
                        alt="image slide 3"
                        loading="lazy"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-fit w-full--- h-96 my-0 mx-auto"
                        src="./item1/4.png"
                        alt="image slide 4"
                        loading="lazy"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-fit w-full--- h-96 my-0 mx-auto"
                        src="./item1/5.png"
                        alt="image slide 5"
                        loading="lazy"
                    />
                </SwiperSlide>
            </Swiper>
        </>
    );
}