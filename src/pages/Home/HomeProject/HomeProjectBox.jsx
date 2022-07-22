const HomeProjectBox = ({ menuData }) => {
    return (
        <>
            {menuData.map((data) => {
                const { id, title, img } = data;
                return (
                    <div className="project_box" key={id}>
                        {/* <div
                            className="project_box_img back_img"
                            style={{
                                backgroundImage: `url(${img})`,
                            }}></div> */}

                        <picture>
                            <img src={img} alt={title} />
                        </picture>
                        <div className="project_box_title">
                            <h2 className="h2_title">{title}</h2>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default HomeProjectBox;
