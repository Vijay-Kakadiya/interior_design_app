import { Col, Container, Row } from "react-bootstrap";
import SecTitle from "../../../components/common/SecTitle";
import ReviewSlider from "./ReviewSlider";

const Reviews = () => {
    return (
        <section className="reviews_sec py_100">
            <Container fluid>
                <Row>
                    <Col lg={12}>
                        <SecTitle className="mb_60" title="what people say" />
                    </Col>
                </Row>

                <ReviewSlider />
            </Container>
        </section>
    );
};

export default Reviews;
