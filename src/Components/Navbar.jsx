// import React from "react";
import {
 
  AiOutlineMenu,
} from "react-icons/ai";

const Navbar = () => {
  return (
    <>
      <header className="mx-auto mt-4  w-4/6 border rounded-2xl ">
        <div className="container mx-auto flex max-w-screen-lg items-center p-5">
          <div className="w-32">
            <img src="pro.png" alt="prodev-logo" />
          </div>
          <div>
            <ul className="flex sm:gap-x-4">
              <li>
                <a href="#np">Clients</a>
              </li>
              <li>
                {" "}
                <a href="#np">Why Africa?</a>
              </li>
              <li>
                {" "}
                <a href="#np">Talents</a>
              </li>
              <li>
                {" "}
                <a href="#np">Products</a>
              </li>
              <li>
                {" "}
                <a href="#np">Services</a>
              </li>
              <li>
                {" "}
                <a href="#np">Pricing</a>
              </li>
            </ul>
          </div>
          {/* <button className="text-xl">
            <AiOutlineMenu />
          </button> */}
          <nav className="">
            <ul className="flex md:gap-x-5 mx-28">
              <li>
                <a href="#np">Talk to us</a>
              </li>
              <li>
                <a href="#np">Apply as a talent</a>
              </li>
              <li>
                {" "}
                <li>
                  <a href="#np">Login</a>
                </li>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
export default Navbar;
