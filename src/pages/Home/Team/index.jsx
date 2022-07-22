import SecTitle from "../../../components/common/SecTitle";
import TeamSlider from "./TeamSlider";
import { Col, Container, Row } from "react-bootstrap";

const Team = () => {
    return (
        <section className="team_sec py_100">
            <Container fluid>
                <Row>
                    <Col lg={12}>
                        <SecTitle className="mb_60" title="our creative team" />
                    </Col>
                </Row>

                <TeamSlider />
            </Container>
        </section>
    );
};

export default Team;
