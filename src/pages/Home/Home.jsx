import { Helmet } from "react-helmet-async";
import Banner from "../../components/Banner/Banner";
import NeedNowSection from "../../components/NeedNowSection/NeedNowSection";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Humanity || Home</title>
            </Helmet>
            <Banner/>
            <NeedNowSection/>
        </div>
    );
};

export default Home;