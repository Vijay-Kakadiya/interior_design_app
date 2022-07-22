import { Col, Container, Row } from "react-bootstrap";
import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav";
import HeaderRight from "./HeaderRight";

const Header = () => {
    return (
        <>
            <header className="site_header py-20">
                <Container>
                    <Row>
                        <Col lg={3}>
                            <HeaderLogo />
                        </Col>
                        <Col lg={6}>
                            <HeaderNav />
                        </Col>
                        <Col lg={3}>
                            <HeaderRight />
                        </Col>
                    </Row>
                </Container>
            </header>
        </>
    );
};

export default Header;
