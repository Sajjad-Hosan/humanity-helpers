import noData from '../../assets/image/empty.svg';
const NoData = () => {
    return (
        <div className="w-full md:w-1/2 h-[320px] flex flex-col items-center gap-2 bg-neutral rounded-2xl mx-auto py-2">
            <h1 className="text-2xl text-white">I'm Empty Now</h1>
            <img className="w-1/2 object-cover my-1" src={noData} alt="" />
            <p className="text-sm text-white">Please! add some data</p>
        </div>
    );
};

export default NoData;