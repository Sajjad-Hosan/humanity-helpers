import { Bounce } from "react-awesome-reveal";
import noData from "../../assets/image/empty.svg";
const NoData = () => {
  return (
    <Bounce>
      <div className="w-full md:w-1/2 h-[320px] flex flex-col items-center gap-4 bg-neutral rounded-2xl mx-auto py-2 mt-8">
        <h1 className="text-2xl text-white mt-2">I am Empty Now</h1>
        <img className="w-1/2 object-cover my-1" src={noData} alt="" />
      </div>
    </Bounce>
  );
};

export default NoData;
