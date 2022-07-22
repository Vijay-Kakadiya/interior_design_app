import { Link } from "react-router-dom";
import Logo from "../../../../assets/images/logo.svg";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const FooterAbout = () => {
    return (
        <div className="footer_logo_wp">
            <div className="footer_logo mb_20">
                <Link to="/" title="Logo">
                    <img src={Logo} alt="Logo" />
                </Link>
            </div>

            <div className="footer_about mb_20">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. quisquam, vel magni
                    illum deserunt rerum.
                </p>
            </div>

            <div className="footer_social">
                <ul>
                    <li>
                        <a href="/" title="Facebook">
                            <FaFacebookF size={22} />
                        </a>
                    </li>
                    <li>
                        <a href="/" title="Twitter">
                            <FaTwitter size={22} />
                        </a>
                    </li>
                    <li>
                        <a href="/" title="Linkedin">
                            <FaLinkedinIn size={22} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default FooterAbout;
