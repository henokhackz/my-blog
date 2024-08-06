import React from "react";

const Footer = () => {
  return (
    <div className=" w-full bg-slate-950 text-white flex items-center justify-center p-5 shadow-sm shadow-slate-400">
      <div className="grid grid-cols-2 md:grid-cols-4 mx-auto gap-4">
        <div>
          <h3 className="text-lg font-semibold mb-4">About</h3>
          <p className="text-sm">
            Welcome to MyBlog, a place where you can share your thoughts, ideas,
            and stories. Join our community of bloggers today!
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Categories</h3>
          <ul className="text-sm">
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Technology
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Lifestyle
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Travel
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Food
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="text-sm">
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="text-sm">
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
