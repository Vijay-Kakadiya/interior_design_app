import { Swiper, SwiperSlide } from "swiper/react";
import { ReviewSliderData } from "./ReviewSliderData";

const ReviewSlider = () => {
    return (
        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            speed={1500}
            loop={false}
            grabCursor={true}
            className="reviews_slider">
            {ReviewSliderData.map((data) => {
                const { id, img, name, sub_title, text } = data;

                return (
                    <SwiperSlide key={id}>
                        <div className="reviews_box">
                            <div className="reviews_title mb_20">
                                <div
                                    className="reviews_img"
                                    style={{
                                        backgroundImage: `url(${img})`,
                                    }}></div>

                                <p className="h5_title">
                                    {name} <span>{sub_title}</span>
                                </p>
                            </div>

                            <div className="divider mb_20"></div>

                            <div className="reviews_text">
                                <p>{text}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

export default ReviewSlider;
