import { Helmet } from "react-helmet-async";
import Banner from "../../components/Banner/Banner";
import NeedNowSection from "../../components/NeedNowSection/NeedNowSection";
import { useLoaderData } from "react-router-dom";

const Home = () => {
    const loaderDatas = useLoaderData();
    return (
        <div>
            <Helmet>
                <title>Humanity || Home</title>
            </Helmet>
            <Banner/>
            <NeedNowSection loaderDatas={loaderDatas} />
        </div>
    );
};

export default Home;