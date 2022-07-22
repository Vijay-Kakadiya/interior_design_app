import { Container } from "react-bootstrap";
import Star from "../../../assets/images/star.svg";
import BottomFooter from "./BottomFooter";
import TopFooter from "./TopFooter";

const FooterMain = () => {
    return (
        <>
            <footer className="site_footer bottom_gradient_sec">
                <div className="footer_shape">
                    <img src={Star} alt="Footer Shape" />
                </div>
                <div className="sec_wp">
                    <Container fluid>
                        <TopFooter />

                        <div className="divider"></div>

                        <BottomFooter />
                    </Container>
                </div>
            </footer>
        </>
    );
};

export default FooterMain;
