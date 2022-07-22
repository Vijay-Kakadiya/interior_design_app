import { Container, Row, Col } from "react-bootstrap";
import SecTitle from "../../../components/common/SecTitle";
import BlogBox from "./BlogBox";

const Blog = () => {
    return (
        <>
            <section className="blog_sec py_100">
                <Container fluid>
                    <Row>
                        <Col lg={12}>
                            <SecTitle
                                className="mb_60"
                                title="Latest News"
                                button="View All"
                                link="/blog"
                            />
                        </Col>
                    </Row>

                    <BlogBox />
                </Container>
            </section>
        </>
    );
};

export default Blog;
