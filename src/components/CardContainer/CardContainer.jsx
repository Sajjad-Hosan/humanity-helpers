import CardBox from "./CardBox";
import PropTypes from "prop-types";

const CardContainer = ({ myLists }) => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-5 py-10">
        {myLists.map((list) => (
          <CardBox key={list._id} details={list} />
        ))}
      </div>
    </div>
  );
};

CardContainer.propTypes = {
  myLists: PropTypes.array,
};
export default CardContainer;
