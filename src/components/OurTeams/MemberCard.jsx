import { FaFacebook, FaInstagram, FaLink, FaLinkedin, FaX } from "react-icons/fa6";

const MemberCard = ({ data }) => {
  return (
    <div className="w-full border rounded-xl  p-5 flex flex-col justify-between">
      <img
        src={data?.img}
        alt=""
        className="h-3/4 rounded-md w-full object-cover"
      />
      <div className="flex justify-between">
        <div className="space-x-2 flex flex-col justify-between items-start">
          <h1 className="text-2xl pl-2">{data?.name}</h1>
          <p className="text-sm">{data?.status}</p>
        </div>
        <div className="">
          <details className="dropdown dropdown-top">
            <summary className="m-1 btn btn-circle btn-neutral flex tooltip" data-tip='Social'><FaLink/></summary>
            <ul className="p-2 menu dropdown-content z-20 space-y-2">
              <li>
                <button className="btn btn-ghost text-lg  btn-circle flex tooltip tooltip-left" data-tip='Facebook'><FaFacebook/></button>
              </li>
              <li>
                <button className="btn btn-ghost text-lg  btn-circle flex tooltip tooltip-left" data-tip='Twitter'><FaX/></button>
              </li>
              <li>
                <button className="btn btn-ghost text-lg  btn-circle flex tooltip tooltip-left" data-tip='Linkedin'><FaLinkedin/></button>
              </li>
              <li>
                <button className="btn btn-ghost text-lg  btn-circle flex tooltip tooltip-left" data-tip='Instagram'><FaInstagram/></button>
              </li>
            </ul>
          </details>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
