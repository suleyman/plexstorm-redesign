import React from "react";

export default function ChannelCard() {
  return (
    <div className="flex flex-col items-center bg-dark-blue text-white rounded-3xl  relative">
      <img src="/users/1.jpg" className="rounded-full w-2/5 -top-5 relative" alt="Gamer" />
      <span className="mt-3 font-semibold">ChannelName</span>
      <span className="text-gray-300 text-xs">28K Views</span>
      <button className="bg-red hover:bg-brown focus:outline-none focus:ring-2 focus:ring-red-300 rounded-3xl px-3 py-1 text-xs my-5">
        Subscribe
      </button>
    </div>
  );
}
