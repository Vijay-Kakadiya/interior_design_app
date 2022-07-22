const Sec_box = (props) => {
    return (
        <>
            <div className="sec_box text-center">
                <div className="sec_box_icon mb-20">{props.icon}</div>
                <div className="sec_box_text">
                    <h3 className="h4_title mb-10">{props.title}</h3>
                    <p className="small_text m-0">{props.text}</p>
                </div>
            </div>
        </>
    );
};

export default Sec_box;
