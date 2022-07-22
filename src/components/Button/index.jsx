import { Link } from "react-router-dom";

export const CustomButton = (props) => {
    return (
        <>
            <Link
                to={props.link ? props.link : "#"}
                className={`sec_btn ${props.className ? props.className : ""}`}
                title={props.title}>
                {props.title ? props.title : "Button Text"}
            </Link>
        </>
    );
};
