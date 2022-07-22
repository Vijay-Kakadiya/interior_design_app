import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const BottomFooter = () => {
    return (
        <div className="bottom_footer py_50">
            <Row className="align-items-center">
                <Col lg={6}>
                    <div className="bottom_footer_text">
                        <p className="m-0">Copyright © 2022 GeekCodeLab. All Rights Reserved.</p>
                    </div>
                </Col>

                <Col lg={6}>
                    <nav className="bottom_footer_nav">
                        <ul>
                            <li>
                                <Link to="/" title="privacy Policy">
                                    privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link to="/" title="Terms of use">
                                    Terms of use
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </Col>
            </Row>
        </div>
    );
};

export default BottomFooter;
