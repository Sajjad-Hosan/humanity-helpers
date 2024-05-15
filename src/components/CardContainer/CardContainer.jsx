import CardBox from "./CardBox";
import PropTypes from "prop-types";

const CardContainer = ({ myLists, req }) => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-5 py-10">
        {myLists.map((list) => (
          <CardBox reqType={req} key={list._id} details={list} />
        ))}
      </div>
    </div>
  );
};

CardContainer.propTypes = {
  myLists: PropTypes.array,
  req: PropTypes.bool,
};
export default CardContainer;
