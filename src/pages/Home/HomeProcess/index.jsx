import { Container, Row, Col } from "react-bootstrap";
import SecTitle from "../../../components/common/SecTitle";
import { HomeProcessData } from "./HomeProcessData";

const HomeProcess = () => {
    return (
        <>
            <section className="work_process_sec py_100">
                <Container fluid>
                    <Row>
                        <Col lg={12}>
                            <SecTitle className="mb_80" title="our working process" />
                        </Col>
                    </Row>

                    <div className="work_process_row">
                        <Row className="g_100">
                            {HomeProcessData.map((data) => {
                                const { title, id, description } = data;
                                return (
                                    <Col lg={6} key={id}>
                                        <div className="work_process_step">
                                            <div className="process_step_title">
                                                <span>{id}</span>
                                                <h3 className="h3_title">{title}</h3>
                                            </div>
                                            <div className="process_step_text">
                                                <p>{description}</p>
                                            </div>
                                        </div>
                                    </Col>
                                );
                            })}
                        </Row>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default HomeProcess;
