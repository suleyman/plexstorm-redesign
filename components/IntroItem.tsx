import React from "react";

type IntroItemProps = {
  isActive: boolean;
  image: string;
};

const IntroItem: React.FunctionComponent<IntroItemProps> = ({ isActive, image }) => {
  return (
    <div>
      {isActive && <span className="bg-brown text-white text-xs px-2 rounded-3xl absolute top-4 right-4">24</span>}
      {isActive && <span className="bg-brown text-white text-xs px-2 rounded-3xl absolute top-4 left-4">1.2K</span>}
      <img
        src={image}
        width="640"
        height="480"
        className={`w-full h-full object-cover rounded-3xl ${isActive ? "" : "filter-brightness-200"}`}
        alt="GamerGirl"
      />
      {isActive && (
        <div className="absolute bottom-6 left-6 text-white">
          <h5 className="mb-2 font-bold"> Virtual Vel - VR Night</h5>
          <a href="#" className="text-white bg-red hover:bg-brown transition-colors  rounded-3xl px-5 py-1 text-sm">
            Watch Now!
          </a>
        </div>
      )}
    </div>
  );
};

export default IntroItem;
