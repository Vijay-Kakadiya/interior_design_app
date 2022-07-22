import Logo from "../../assets/images/logo.svg";
import { NavLink } from "react-router-dom";

const Header_logo = () => {
    return (
        <>
            <div className="site_logo">
                <NavLink to="/" title="The Arc Vantage">
                    <img src={Logo} alt="Logo" />
                </NavLink>
            </div>
        </>
    );
};

export default Header_logo;
