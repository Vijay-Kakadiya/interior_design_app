import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SecTitle from "../../../components/common/SecTitle";
import { HomeSkillData } from "./HomeSkillData";

const HomeSkill = () => {
    return (
        <>
            <section className="skill_sec py_100">
                <Container fluid>
                    <Row>
                        <Col lg={4}>
                            <div className="sticky_title">
                                <SecTitle title="our skills" />
                            </div>
                        </Col>
                        <Col lg={8}>
                            <div className="skills_progress_bar_wp">
                                {HomeSkillData.map((data, index) => {
                                    const lastElement = HomeSkillData.length - 1;
                                    const { title, skill } = data;
                                    return (
                                        <React.Fragment key={index}>
                                            <div className="skills_progress_bar py_30">
                                                <h2 className="h2_title">{title}</h2>
                                                <h3 className="h3_title outline_text">{skill}%</h3>
                                            </div>
                                            {lastElement !== index ? (
                                                <div className="divider"></div>
                                            ) : (
                                                ""
                                            )}
                                        </React.Fragment>
                                    );
                                })}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default HomeSkill;
