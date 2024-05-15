import { Helmet } from "react-helmet-async";
import Banner from "../../components/Banner/Banner";
import NeedNowSection from "../../components/NeedNowSection/NeedNowSection";
import { useLoaderData } from "react-router-dom";
import OurTeams from "../../components/OurTeams/OurTeams";
import { Zoom } from "react-awesome-reveal";

const Home = () => {
  const loaderDatas = useLoaderData();
  return (
    <div>
      <Helmet>
        <title>Humanity || Home Page</title>
      </Helmet>
      <Zoom>
      <Banner loaderDatas={loaderDatas} />
      </Zoom>
      <NeedNowSection loaderDatas={loaderDatas} />
      <OurTeams/>
    </div>
  );
};

export default Home;
