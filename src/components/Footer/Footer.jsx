import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className="footer h-[240px] footer-center mb-6 mt-8 border-t relative">
        <div>
          <img className="w-14" src="../../../public/logo.png" alt="" />
          <p className="font-bold text-3xl">Humanity Platform</p>
          <p>Copyright © 2024 - All right reserved</p>
        </div>
          <div className="grid grid-flow-col gap-4 absolute bottom-0">
            <button className="text-xl btn btn-circle btn-ghost flex tooltip" data-tip='Facebook'>
              <FaFacebook/>
            </button>
            <button className="text-xl btn btn-circle btn-ghost flex tooltip" data-tip='Github'>
              <FaGithub/>
            </button>
            <button className="text-xl btn btn-circle btn-ghost flex tooltip" data-tip='Twitter'>
              <FaTwitter/>
            </button>
          </div>
      </footer>
    </>
  );
};

export default Footer;
