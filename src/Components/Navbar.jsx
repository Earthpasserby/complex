// import React from "react";

const Navbar = () => {
  return (
    <>
      <header className="mb-2 shadow px-4">
        <div className="container mx-auto flex max-w-screen-lg items-center pt-5">
          <div className="w-32">
            <img src="pro.png" alt="prodev-logo" />
          </div>
          <nav>
            <ul className="flex md:gap-x-8">
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
              <ul className="flex md:gap-x-8">
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
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
export default Navbar;
