import { Col, Container, Row } from "react-bootstrap";
import Scroll_down_logo from "../../../assets/images/scroll_img.svg";
import Shape from "../../../assets/images/shape.svg";
import { CustomButton } from "../../../components/Button";

const HomeBanner = () => {
    return (
        <>
            <section className="main_banner py_100 top_gradient_sec">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="position-relative banner_text text-center">
                                <div className="banner_shape"></div>
                                <div className="banner_shape2"></div>
                                <h1 className="h1_title mb_40">
                                    <span className="shape">
                                        <img src={Shape} alt="" />
                                    </span>
                                    Exploring
                                    <img
                                        src="https://source.unsplash.com/random/100×100/?Interior"
                                        alt=""
                                        className="title_img"
                                    />
                                    <span>
                                        the luxury
                                        <img
                                            src="https://source.unsplash.com/random/120×120/?Interior"
                                            alt=""
                                            className="title_img"
                                        />
                                        interior
                                    </span>
                                    <img
                                        src="https://source.unsplash.com/random/130×130/?Interior"
                                        alt=""
                                        className="title_img"
                                    />
                                    of this era
                                    <img
                                        src="https://source.unsplash.com/random/140×140/?Interior"
                                        alt=""
                                        className="title_img"
                                    />
                                </h1>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Perspiciatis ducimus, expedita optio dicta mollitia nemo, eius
                                    fugit sequi commodi minus odit consectetur facere impedit cumque
                                    aliquam id at assumenda illo.
                                </p>
                                <div className="banner_btn mt_50">
                                    <CustomButton link="#" title="Explore Now" />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <a href="#scrollDown" className="scroll_down">
                    <img src={Scroll_down_logo} alt="" className="scroll_down_bg" />
                    <svg
                        width="22"
                        height="51"
                        viewBox="0 0 22 51"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0.269531 39.6899V40.523C6.00943 40.523 10.6804 45.1927 10.6804 50.9329H11.5135C11.5135 45.193 16.1831 40.523 21.9233 40.523V39.6899C17.2188 39.6899 13.188 42.598 11.5135 46.7078V25.5012C11.5135 19.7613 16.1831 15.0913 21.9233 15.0913V14.2582C17.2188 14.2582 13.188 17.1663 11.5135 21.2761V18.8388C11.5135 13.0989 16.1831 8.42895 21.9233 8.42895V7.59584C17.2188 7.59584 13.188 10.5039 11.5135 14.6137V12.1768C11.5135 6.43691 16.1831 1.76597 21.9233 1.76597V0.932861C16.7755 0.932861 12.4247 4.41025 11.0969 9.13953C9.76809 4.41055 5.41736 0.932861 0.270364 0.932861V1.76597C6.01027 1.76597 10.6812 6.43602 10.6812 12.1768V14.6145C9.00645 10.5047 4.97533 7.59624 0.270364 7.59624V8.42935C6.01027 8.42935 10.6812 13.099 10.6812 18.8392V21.2761C9.00645 17.1663 4.97533 14.2578 0.270364 14.2578V15.0909C6.01027 15.0909 10.6812 19.7606 10.6812 25.5008V46.7084C9.00645 42.5982 4.97533 39.6897 0.270364 39.6897L0.269531 39.6899Z"
                            fill="black"
                        />
                    </svg>
                </a>
            </section>
        </>
    );
};

export default HomeBanner;
