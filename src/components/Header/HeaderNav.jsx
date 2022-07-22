import { NavLink } from "react-router-dom";

const Header_nav = () => {
    return (
        <>
            <nav className="header_menu">
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
                        <NavLink to="/contact" title="Contact">
                            contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Header_nav;
