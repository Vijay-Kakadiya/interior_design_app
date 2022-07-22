import { Row, Col } from "react-bootstrap";
import { BlogBoxData } from "./BlogBoxData";

const BlogBox = () => {
    return (
        <div className="blog_row">
            <Row>
                {BlogBoxData.map((data) => {
                    const { id, link, date, author, img, title, text } = data;

                    return (
                        <Col lg={4} key={id}>
                            <div className="blog_box">
                                <a href={link}>
                                    <div className="blog_top_bar">
                                        <div className="blog_date">
                                            <p>{date}</p>
                                        </div>
                                        <div className="blog_author">
                                            <p>by {author}</p>
                                        </div>
                                    </div>
                                    <div className="divider my_20"></div>
                                    <div
                                        className="blog_img"
                                        style={{
                                            backgroundImage: `url(${img})`,
                                        }}></div>
                                    <div className="divider my_20"></div>
                                    <div className="blog_text">
                                        <h4 className="h4_title">{title}</h4>
                                        <p>{text}</p>
                                    </div>
                                </a>
                            </div>
                        </Col>
                    );
                })}
            </Row>
        </div>
    );
};

export default BlogBox;
