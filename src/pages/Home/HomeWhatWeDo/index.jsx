import { Container, Row, Col } from "react-bootstrap";
import SecTitle from "../../../components/common/SecTitle";
import { WhatWeDoBoxData } from "./WhatWeDoBoxData";

const HomeWhatWeDo = () => {
    return (
        <>
            <section className="what_we_do py_100">
                <Container fluid>
                    <Row>
                        <Col lg={5}>
                            <div className="what_we_do_title sticky_title">
                                <SecTitle
                                    title="what we do"
                                    description="we specialize in design and furniture production, buildings and interior fittings for domestic customers and international brands."
                                />
                                <div
                                    className="what_we_do_title_img"
                                    style={{
                                        backgroundImage:
                                            "url(https://source.unsplash.com/random/900×700/?interior)",
                                    }}></div>
                            </div>
                        </Col>
                        <Col lg={7}>
                            {WhatWeDoBoxData.map((data) => {
                                return (
                                    <div className="what_we_do_box_wp mb_30" key={data.id}>
                                        <span className="what_we_do_box_num">{data.id}</span>
                                        <div className="what_we_do_box">
                                            <div className="what_we_do_box_icon mb_20">
                                                <img src={data.icon} alt="" />
                                            </div>
                                            <div className="what_we_do_box_text">
                                                <h3 className="h3_title">{data.title}</h3>
                                                <p>{data.text}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default HomeWhatWeDo;
