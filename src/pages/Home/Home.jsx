import { Helmet } from "react-helmet-async";
import Banner from "../../components/Banner/Banner";
import NeedNowSection from "../../components/NeedNowSection/NeedNowSection";
import { useLoaderData } from "react-router-dom";
import OurTeams from "../../components/OurTeams/OurTeams";

const Home = () => {
  const loaderDatas = useLoaderData();
  return (
    <div>
      <Helmet>
        <title>Humanity || Home Page</title>
      </Helmet>
      <Banner loaderDatas={loaderDatas} />
      <NeedNowSection loaderDatas={loaderDatas} />
      <OurTeams/>
    </div>
  );
};

export default Home;
