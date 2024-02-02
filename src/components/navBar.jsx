import { IoHomeOutline } from "react-icons/io5";
import { FaBookReader } from "react-icons/fa";
import { GiBookshelf } from "react-icons/gi";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <>
      <div className="sideBar h-screen ">
        <div className="h-44 w-64 bg-gradient-to-r from-violet-500 to-fuchsia-500 mr-2 mb-2 rounded-md pl-6 pt-3 shadow-xl">
          <h2 className=" text-white font-sans font-bold text-2xl ">
            Jean-Neymar
          </h2>
          <h3 className="text-lg text-white font-sans mt-3 mb-2">
            Social Media :
          </h3>
          <div className="social-media flex flex-col text-sm">
            <button className="flex cursor-pointer">
              <FaInstagram className="self-center mr-2" />
              Instagram
            </button>
            <button className="flex cursor-pointer">
              <FaTwitter className="self-center mr-2" />
              Twitter
            </button>
            <button className="flex cursor-pointer">
              <FaFacebookSquare className="self-center mr-2" />
              Facebook
            </button>
          </div>
        </div>
        <div className="h-full w-64 bg-gradient-to-r from-purple-500 to-pink-500 mr-2 rounded-md pl-6 pt-3 shadow-xl">
          <h2 className="text-lg text-white font-sans font-bold">
            Navigation :
          </h2>
          <div className="Links mt-10  flex flex-col">
            <Link to="/home">
              <div
                className="bg-black text-white font-sans:Apple Color Emoji p-2 mb-2 flex outline-none outline: 2px solid transparent;"
                href=""
              >
                <IoHomeOutline className="self-center mr-2" />
                Acceuil
              </div>
            </Link>
            <Link to="/about">
              <div
                className="text-white hover:text-black font-sans:Apple Color Emoji p-2 flex"
                href=""
              >
                <FaBookReader className="self-center mr-2" />A propos de :
              </div>
            </Link>
            <Link to="/artwork">
              <div
                className="text-white  hover:text-black font-sans:Apple Color Emoji flex p-2 "
                href=""
              >
                <GiBookshelf className="self-center mr-2" />
                Oeuvres
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
