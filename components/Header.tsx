import React from "react";

export default function Header() {
  return (
    <header className="absolute w-full top-12 text-white">
      <div className="container mx-auto flex items-center px-3 lg:px-0">
        <div className="mr-6">
          <a href="/">
            <img src="/logo.svg" alt="Logo" />
          </a>
        </div>
        <nav className="flex-1">
          <a href="#" className="text-white mr-3">
            Games
          </a>
          <a href="#" className="text-white">
            Discord
          </a>
        </nav>
        {/* Search */}
        <div className="w-1/6 mr-3 hidden lg:block">
          <form>
            <input
              type="search"
              className="rounded-xl  bg-gray-400 bg-opacity-30 px-3 py-2 mr-3 text-xs w-full focus:outline-none focus:ring-1 focus:ring-red"
              placeholder="Search"
            />
          </form>
        </div>
        <div className="text-white mr-3 hidden lg:block">SFW | NSFW</div>
        <nav className="hidden lg:block">
          <a href="#" className="py-2 px-4 rounded-3xl border text-white  border-red hover:bg-red text-sm mr-3">
            SIGN IN
          </a>
          <a href="#" className="py-2 px-4 rounded-3xl text-white bg-red text-sm">
            SIGN UP
          </a>
        </nav>
      </div>
    </header>
  );
}
