import { CustomButton } from "../../../components/Button";
import SecTitle from "../../../components/common/SecTitle";

const Home_About_Text = () => {
    return (
        <>
            <div className="about_text position-relative">
                <SecTitle title="About Us" />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero labore
                    asperiores mollitia sint harum consectetur beatae doloribus facilis at, optio
                    sit voluptates veritatis aperiam! In debitis quibusdam sed dolore eligendi!
                    cumque ea assumenda accusantium magnam fugiat aspernatur necessitatibus
                </p>

                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda corrupti
                    esse quasi est magni reprehenderit, nostrum odio quidem tempora quod iusto
                    dolore deleniti ut voluptas molestiae veritatis, sed minima corporis cumque
                    labore unde, et voluptatibus nisi! Error non, cumque ea assumenda accusantium
                    magnam fugiat aspernatur necessitatibus autem corporis commodi? Sapiente rerum
                    perferendis optio id reprehenderit quod nihil? Tenetur, velit magnam.
                </p>
                <CustomButton link="/about" title="Read More" />
            </div>
        </>
    );
};

export default Home_About_Text;
