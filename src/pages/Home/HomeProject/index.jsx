import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SecTitle from "../../../components/common/SecTitle";
import Tabbing from "../../../components/Tabbing";
import ProjectTabbingData from "./ProjectTabbingData";
import HomeProjectBox from "./HomeProjectBox";

const tabListData = [
    "all",
    ...new Set(
        ProjectTabbingData.map((data) => {
            return data.category;
        })
    ),
];

const HomeProject = () => {
    const [menuData, setMenuData] = useState(ProjectTabbingData);
    const [tabList, setTabList] = useState(tabListData);
    const [activeTabData, setActiveTab] = useState("all");

    const filterItems = (category) => {
        setActiveTab(() => {
            return category;
        });

        if (category === "all") {
            setMenuData(ProjectTabbingData);
            return;
        }

        const tabListData = ProjectTabbingData.filter((curElem) => {
            return curElem.category === category;
        });

        setMenuData(tabListData);
    };

    return (
        <>
            <section className="project_sec pb_100">
                <div className="sec_wp">
                    <Container fluid>
                        <Row className="align-items-center">
                            <Col lg={5}>
                                <SecTitle title="our project" />
                            </Col>

                            <Col lg={7}>
                                <Tabbing
                                    tabList={tabList}
                                    activeTabData={activeTabData}
                                    filterItems={filterItems}
                                />
                            </Col>
                        </Row>

                        <div className="project_box_wp">
                            <Row>
                                <Col lg={12}>
                                    <div className="project_box_wp">
                                        <HomeProjectBox menuData={menuData} />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>
            </section>
        </>
    );
};

export default HomeProject;
