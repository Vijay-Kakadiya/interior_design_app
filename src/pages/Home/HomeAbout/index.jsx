import { Col, Container, Row } from "react-bootstrap";
import HomeAboutImg from "./HomeAboutImg";
import HomeAboutText from "./HomeAboutText";

const HomeAbout = () => {
    return (
        <>
            <section className="about_sec" id="scrollDown">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={5}>
                            <HomeAboutImg />
                        </Col>
                        <Col lg={7}>
                            <HomeAboutText />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default HomeAbout;
