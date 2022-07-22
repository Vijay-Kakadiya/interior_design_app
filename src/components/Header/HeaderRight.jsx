import { BiSearch } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";

const Header_Right = () => {
    return (
        <>
            <div className="header_icon">
                <ul>
                    <li>
                        <button onClick={(e) => e.preventDefault()}>
                            <BiSearch size="24" />
                        </button>
                    </li>
                    <li>
                        <button onClick={(e) => e.preventDefault()}>
                            <AiOutlineMenu size="26" />
                        </button>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Header_Right;
