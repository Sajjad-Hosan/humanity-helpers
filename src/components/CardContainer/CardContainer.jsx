import CardBox from "./CardBox";

const CardContainer = () => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-5 py-10">
        <CardBox/>
        <CardBox/>
        <CardBox/>
        <CardBox/>
        <CardBox/>
        <CardBox/>
      </div>
    </div>
  );
};

export default CardContainer;
