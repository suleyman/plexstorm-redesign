import React from "react";

export default function Footer() {
  return (
    <footer className="bg-dark-blue text-white py-24">
      <div className="container mx-auto px-3 lg:px-0 flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/5 mr-20">
          <img src="/logo.svg" className="mb-4" alt="Plexstorm" />
          <p className="text-sm text-gray-400 ">
            All models appearing on this website are 18 years or older. By entering this site you swear that you are of
            legal age in your area to view adult material and that you wish to view such material.
          </p>
        </div>
        <div className="w-full lg:w-1/5 hidden lg:block">
          <h6 className="mb-4">Follow</h6>
          <ul>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-1/5 hidden lg:block">
          <h6 className="mb-4">Information</h6>
          <ul>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Legal Disclosure</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Community Rules</a>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-1/5 hidden lg:block">
          <h6 className="mb-4">Plexstorm</h6>
          <p>Plexstorm AG Gotthardstrasse 26 6300 Zug Switzerland</p>
        </div>
        <div className="w-full lg:w-1/5 hidden lg:block lg:ml-20">
          <a href="mailto:support@plexstorm.com" className="block">
            support@plexstorm.com
          </a>
          <a href="mailto:advertising@plexstorm.com" className="block">
            advertising@plexstorm.com
          </a>
          <form>
            <div className="flex mt-3">
              <input
                type="email"
                className="bg-transparent text-gray-600 border border-gray-600 py-2 pl-2"
                placeholder="Your email"
              />
              <button className="border border-gray-600 text-gray-600 text-xs px-3 border-l-0">Subscribe</button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
}
