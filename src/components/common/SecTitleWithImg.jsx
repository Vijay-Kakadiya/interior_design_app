import { Col, Row } from "react-bootstrap";
import { FiArrowUpRight } from "react-icons/fi";

const SecTitleWithImg = (props) => {
    return (
        <>
            <div className="sec_title_with_img mb-60">
                <Row className="align-items-center">
                    <Col lg={7}>
                        <div className="sec_head_wp">
                            <div className="sec_head">
                                <h2 className="h2_title title_shape">{props.title}</h2>
                            </div>
                            <p>{props.text}</p>
                            <a
                                href={`${props.link}`}
                                title={`${props.link_text}`}
                                className="read_more">
                                {props.link_text} <FiArrowUpRight size={18} />
                                <FiArrowUpRight size={18} />
                            </a>
                        </div>
                    </Col>
                    <Col lg={5}>
                        <div
                            className="rounded_img vertical_rounded_img back_img"
                            style={{
                                backgroundImage: "url(" + `${props.title_img}` + ")",
                            }}></div>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default SecTitleWithImg;
