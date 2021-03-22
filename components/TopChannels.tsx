import React from "react";
import ChannelCard from "./ChannelCard";

export default function TopChannels() {
  return (
    <section>
      <div className="container mx-auto px-3 lg:px-0">
        <h2 className="text-white text-center text-5xl font-bold">Top Channels</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16 px-0 lg:px-72 py-20">
          {[...Array(16)].map(() => (
            <ChannelCard />
          ))}
        </div>
      </div>
    </section>
  );
}
