import { Container, Row, Col } from "react-bootstrap";

const InnerBanner = (props) => {
    return (
        <section className="inner_banner top_gradient_sec pt_150">
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="inner_banner_text">
                            <h1 className="h1_title">
                                {props.title ? props.title : "Type Title"}

                                {props.titleIcon ? (
                                    <img
                                        src={`${props.titleIcon}`}
                                        alt="Title Icon"
                                        className="title_img"
                                    />
                                ) : null}
                            </h1>
                        </div>
                    </Col>

                    {props.text ? (
                        <Col lg={5} className="ms-auto">
                            <div className="inner_banner_text">
                                <p>{props.text}</p>
                            </div>
                        </Col>
                    ) : null}
                </Row>
            </Container>

            <div className="divider mt_50"></div>
        </section>
    );
};

export default InnerBanner;
