import HomeBanner from "./HomeBanner";
import HomeAbout from "./HomeAbout";
import HomeWhatWeDo from "./HomeWhatWeDo";
import HomeProject from "./HomeProject";
import HomeProcess from "./HomeProcess";
import HomeSkill from "./HomeSkill";
import Team from "./Team";
import Reviews from "./Reviews";
import Blog from "./Blog";

const Home_page = () => {
    return (
        <>
            <HomeBanner />
            <HomeAbout />
            <div className="bottom_gradient_sec">
                <HomeWhatWeDo />
            </div>
            <div className="top_gradient_sec">
                <HomeProject />
            </div>
            <section className="dark_section">
                <div className="bg_pattern"></div>
                <div className="sec_wp">
                    <HomeProcess />
                    <div className="divider"></div>
                    <HomeSkill />
                </div>
            </section>
            <div className="top_gradient_sec">
                <Team />
            </div>
            <div className="divider"></div>
            <Reviews />
            <section className="dark_section">
                <div className="sec_wp">
                    <Blog />
                </div>
            </section>
        </>
    );
};

export default Home_page;
