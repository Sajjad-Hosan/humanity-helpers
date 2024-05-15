import { Zoom } from "react-awesome-reveal";
import CardBox from "./CardBox";
import PropTypes from "prop-types";

const CardContainer = ({ myLists, req }) => {
  return (
    <div>
      <div className="grid md:grid-cols-3 gap-5 py-10">
        <Zoom>
        {myLists.map((list) => (
          <CardBox reqType={req} key={list._id} details={list} />
        ))}
        </Zoom>
      </div>
    </div>
  );
};

CardContainer.propTypes = {
  myLists: PropTypes.array,
  req: PropTypes.bool,
};
export default CardContainer;
