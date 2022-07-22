const Tabbing = ({ tabList, filterItems, activeTabData }) => {
    return (
        <>
            <nav className="tabbing_list">
                <ul>
                    {tabList.map((data, index) => {
                        return (
                            <li key={index}>
                                <button
                                    className={activeTabData === data ? "is_active" : ""}
                                    onClick={() => filterItems(data)}
                                    type="button">
                                    {data}
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </>
    );
};

export default Tabbing;
