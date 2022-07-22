const TabbingList = (props) => {
    return (
        <>
            <li>
                <a href="#" title={props.title}>
                    {props.title}
                </a>
            </li>
        </>
    );
};

export default TabbingList;
