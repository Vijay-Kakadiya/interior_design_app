import { BsMailbox2 } from "react-icons/bs";
import { GiRotaryPhone } from "react-icons/gi";
import { FaMapMarkedAlt } from "react-icons/fa";

const FooterContact = () => {
    return (
        <div className="footer_contact">
            <ul>
                <li>
                    <a
                        href="https://goo.gl/maps/5SUgW3J11LczSzbW7"
                        title="411 University St, Seattle, USA"
                        target={"_blank"}
                        rel="noreferrer">
                        <FaMapMarkedAlt size={23} />
                        <span>
                            <h5>our address :-</h5>411 University St, Seattle, USA
                        </span>
                    </a>
                </li>

                <li>
                    <a href="mailto:RuthEWilson@teleworm.us" title="RuthEWilson@teleworm.us">
                        <BsMailbox2 size={23} />
                        <span>
                            <h5>our mailbox :-</h5>
                            RuthEWilson@teleworm.us
                        </span>
                    </a>
                </li>

                <li>
                    <a href="tel:510-583-0792" title="510-583-0792">
                        <GiRotaryPhone size={25} />
                        <span>
                            <h5>our phone :-</h5>510-583-0792
                        </span>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default FooterContact;
