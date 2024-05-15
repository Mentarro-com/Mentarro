import React from "react";
import Image from "next/image";

function index() {
  return (
    <div className="flex  md:px-20  items-center justify-center bg-hero md:h-screen overflow-hidden">
      <div className="flex flex-col  gap-6 md:flex-row items-center max-w-8xl">
        <div className="w-full md:w-1/2 lg:pr-32">
          <h2 className="text-4xl lg:text-5xl text-center md:text-left text-red-600 leading-tight font-medium">
            Career Development Program
          </h2>
          <h3 className="mt-6 md:mt-10 text-md lg:text-xl text-center md:text-left text-gray-700 font-light tracking-wider leading-relaxed">
            Our Career Development Program is designed to guide 12th grade
            students towards a successful and fulfilling future. This program
            offers personalized career counseling, workshops on resume building
            and interview skills, and insights into various professions and
            industries. Students will have the opportunity to explore their
            interests, strengths, and aspirations, helping them make informed
            decisions about their post-secondary education and career paths. By
            participating in this program, students will gain the confidence and
            skills needed to navigate the transition from high school to the
            professional world, setting a strong foundation for their future
            success.
          </h3>
          <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start">
            <button className="w-full sm:w-40 px-4 py-3 rounded font-semibold text-md bg-blue-500 text-white border-2 border-blue-500">
              Get started
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center p-14 md:justify-end">
          <Image
            src="/Agenda.png"
            alt="About Us Image"
            layout="responsive"
            width={1820}
            height={1080}
            className="object-cover rounded-lg shadow-md "
          />
        </div>
      </div>
    </div>
  );
}

export default index;
