import { FaGithub, FaGoogle, FaTwitter } from "react-icons/fa6";
import { SiHelpscout } from "react-icons/si";
const SocialDrop = ({goo,git}) => {
  return (
    <>
      <details className="dropdown dropdown-left">
        <summary className="btn px-8 btn-outline"><SiHelpscout/> Helpers</summary>
        <ul className="p-2 shadow-lg menu dropdown-content z-[1] bg-base-200 rounded-lg join w-52 join-vertical">
          <li>
            <button onClick={goo} className="btn join-item btn-neutral text-green-500"><FaGoogle/> Google</button>
          </li>
          <li>
            <button onClick={git} className="btn join-item btn-outline"><FaGithub/> Github</button>
          </li>
          <li>
            <button className="btn join-item btn-outline disabled"><FaTwitter/> Twitter</button>
          </li>
        </ul>
      </details>
    </>
  );
};

export default SocialDrop;
