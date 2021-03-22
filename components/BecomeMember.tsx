import React from "react";

export default function BecomeMember() {
  return (
    <section>
      <div className="container p-10 pt-0 mx-auto lg:px-72 py-20">
        <div className="text-center rounded-3xl bg-gradient-to-bl from-dark-blue to-blue-900 p-8">
          <h3 className="text-white mb-4 text-3xl">Become a Member</h3>
          <p className="text-white">
            Become a part of our growing community. Subscribe to channels, give out tips <br /> and see how your
            interactions become a part of Plexstorm
          </p>
          <div className="mt-8 flex flex-col lg:flex-row justify-center items-center w-full text-center">
            <a
              href="#"
              className="rounded-3xl py-2 px-9 lg:w-1/5 w-full lg:mr-3 mb-3 lg:mb-0 border border-red text-white text-xs block lg:inline-block"
            >
              SIGN IN
            </a>
            <a
              href="#"
              className="rounded-3xl py-2 px-9 lg:w-1/5 w-full  bg-red text-white text-xs block lg:inline-block"
            >
              SIGN UP NOW!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
