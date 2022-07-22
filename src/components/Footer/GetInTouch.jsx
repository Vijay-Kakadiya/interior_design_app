import { Container, Row, Col } from "react-bootstrap";
import CircleBg from "../../assets/images/circle_form_btn.svg";

const GetInTouch = () => {
    return (
        <section className="get_in_touch py_100">
            <Container>
                <div className="get_in_touch_box dark_section">
                    <div className="sec_wp">
                        <Row className="align-items-center">
                            <Col lg={8} xl={6} className="m-auto">
                                <div className="get_in_touch_text white_text mb_50">
                                    <h3 className="h3_title">
                                        Think different, think Get incredible interior design right
                                        now!
                                    </h3>
                                    <p>Get new posts directly to your inbox.</p>
                                </div>

                                <form className="get_in_touch_form">
                                    <input
                                        className="form_input"
                                        type="email"
                                        placeholder="Your Email Address"
                                        required
                                    />
                                    <button type="submit" className="circle_btn">
                                        <img
                                            width={140}
                                            height={140}
                                            src={CircleBg}
                                            alt="Circle Bg"
                                        />

                                        <svg
                                            width="37"
                                            height="32"
                                            viewBox="0 0 41 36"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M39.5265 2.25953L40.2189 3.08463C34.5692 7.82529 33.8651 16.2999 38.6291 21.9774L37.8094 22.6651C33.9026 18.0092 33.4071 11.6125 36.0636 6.55457L16.7141 22.7907L15.6213 23.7077L1.34577 35.6863L0.653437 34.8612L14.9289 22.8826L16.0218 21.9656L35.3615 5.73766C29.9289 7.46734 23.7139 5.88655 19.8071 1.23065L20.6267 0.542884C25.3989 6.23016 33.8768 7.0002 39.5265 2.25953Z"
                                                fill="CurrentColor"
                                            />
                                        </svg>
                                    </button>
                                </form>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default GetInTouch;
