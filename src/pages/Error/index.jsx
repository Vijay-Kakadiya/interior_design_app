import { Container, Row, Col } from "react-bootstrap";
import { CustomButton } from "../../components/Button";

const Error = () => {
    const img = "https://source.unsplash.com/random/900×700/?interior";

    return (
        <section className="error_sec top_gradient_sec pt_150">
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="error_sec_text text-center">
                            <h1 className="h1_title">
                                404
                                <span style={{ backgroundImage: `url(${img})` }}></span>
                            </h1>
                            <h3 className="h3_title">page not found</h3>

                            <CustomButton title="Back To Home" link="/" className="mt_20" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Error;
