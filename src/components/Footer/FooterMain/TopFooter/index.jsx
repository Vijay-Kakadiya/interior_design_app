import { Row, Col } from "react-bootstrap";
import FooterAbout from "./FooterAbout";
import FooterRight from "./FooterRight";

const TopFooter = () => {
    return (
        <div className="top_footer py_80">
            <Row>
                <Col lg={4}>
                    <FooterAbout />
                </Col>

                <Col lg={8}>
                    <FooterRight />
                </Col>
            </Row>
        </div>
    );
};

export default TopFooter;
