import React from "react";
import Image from "next/image";

function index() {
  return (
    <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">
      <div className="w-full h-60 lg:w-1/2 lg:h-auto">
        <Image
          src="/k.png"
          alt="About Us Image"
          layout="responsive"
          width={100}
          height={100}
        />
      </div>

      <div className="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
        <div className="flex flex-col p-12 md:px-16">
          <h2 className="text-2xl font-medium uppercase text-red-500 lg:text-4xl">
            30 DAYS INTERNSHIP
          </h2>
          <p className="mt-4">
            Join our innovative 30-day internship program and gain real-world
            experience through dynamic projects and daily live sessions. Develop
            your skills in technologies like REACT JS, NEXT JS, Tailwind CSS, AI
            integration, and more, while receiving mentorship and support. Earn
            a completion certificate from Mentarro and kickstart your
            professional growth with hands-on deployment on the Vercel platform.
          </p>

          <div className="mt-8">
            <a
              className="inline-block w-full text-center text-lg font-medium text-gray-100 bg-red-600 border-solid border-2 border-gray-600 py-4 px-10 hover:bg-red-800 hover:shadow-md md:w-48"
                href="https://forms.gle/XkunVauyAY9y9nyv5"
                target="_blank"
                rel="noopener noreferrer"
              >
              Enroll Here
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
