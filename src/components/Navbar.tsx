import logo from "../assets/logo.png"
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="flex py-3 px-12 justify-between items-center border-2 border-[#EAEAEA] rounded-[60px] font-sans">
      <div>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="flex gap-6">
        <Link
          to="/project"
          className="p-3 px-6 rounded-full border-2 border-[#EAEAEA]"
        >
          Get Projects
        </Link>
        <button className="p-3 px-6 rounded-full border-2 bg-black button text-white">
          Onboard talent
        </button>
      </div>
    </div>
  );
}

export default Navbar