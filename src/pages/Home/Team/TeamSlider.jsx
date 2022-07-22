import { Swiper, SwiperSlide } from "swiper/react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { TeamSliderData } from "./TeamSliderData";

const TeamSlider = () => {
    return (
        <Swiper
            slidesPerView={4.2}
            spaceBetween={30}
            speed={1500}
            loop={false}
            grabCursor={true}
            className="team_slider">
            {TeamSliderData.map((data) => {
                const { id, title, img, facebookLink, twitterLink, linkedinLink } = data;

                return (
                    <SwiperSlide key={id}>
                        <div
                            className="team_box"
                            style={{
                                backgroundImage: `url(${img})`,
                            }}>
                            <div className="team_hover">
                                <div className="team_social">
                                    <ul>
                                        <li>
                                            <a href={`${facebookLink}`} title="Facebook">
                                                <FaFacebookF />
                                            </a>
                                        </li>
                                        <li>
                                            <a href={`${twitterLink}`} title="Twitter">
                                                <FaTwitter />
                                            </a>
                                        </li>
                                        <li>
                                            <a href={`${linkedinLink}`} title="Linkedin">
                                                <FaLinkedinIn />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="team_title mt_40 text-center">
                            <h4 className="h4_title">{title}</h4>
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

export default TeamSlider;
