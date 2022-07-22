import { NavLink } from "react-router-dom";

const FooterNav = () => {
    return (
        <nav className="footer_nav">
            <ul>
                <li>
                    <NavLink to="/" title="Home">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" title="About">
                        about
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Portfolio" title="Portfolio">
                        Portfolio
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Blog" title="Blog">
                        Blog
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" title="Contact">
                        contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default FooterNav;
