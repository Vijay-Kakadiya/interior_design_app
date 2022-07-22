import { CustomButton } from "../Button";

const SecTitle = (props) => {
    return (
        <>
            <div className={`sec_head_wp ${props.button ? "sec_head_btn" : ""}`}>
                <div className={`sec_head ${props.className ? props.className : "mb_30"}`}>
                    <h2 className="h2_title title_shape">
                        {props.title ? props.title : "Type Section title"}
                    </h2>
                </div>

                {props.description ? <p>{props.description}</p> : null}

                {props.button ? (
                    <div className="title_btn">
                        <CustomButton title={props.button} link={props.link} />
                    </div>
                ) : null}
            </div>
        </>
    );
};

export default SecTitle;
