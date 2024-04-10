"use client";
import React, { useEffect, useState } from "react";
import { animated, useSpring } from "react-spring";
function index() {
  const [isVisible, setIsVisible] = useState(false);

  const phone = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateX(0%)" : "translateX(-100%)",
    config: { duration: 200 },
  });

  const second = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateX(0%)" : "translateY(-100%)",
    config: { duration: 200 },
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const targetPosition = windowHeight * 0.65;

      if (scrollPosition > targetPosition) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <section className="bg-gray-100">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
          <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Visit Our Location
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="mt-16 lg:mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.695879487079!2d80.2123618153446!3d13.08268081634501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265dfe79fdce1%3A0x4f8c49ef2e4d3f31!2sChennai%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus"
                  width="100%"
                  height="480"
                  loading="lazy"
                ></iframe>
              </div>
              <div>
                <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                  <div className="px-6 py-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      Our Location
                    </h3>
                    <p className="mt-1 text-gray-600">Chennai,India</p>
                  </div>
                  <div className="border-t border-gray-200 px-6 py-4">
                    <h3 className="text-lg font-medium text-black">
                      Availability
                    </h3>
                    <p className="mt-1 text-gray-600">
                      Remote - Offline / Online
                    </p>
                  </div>
                  <div className="border-t border-gray-200 px-6 py-4">
                    <h3 className="text-lg font-medium text-black">Contact</h3>
                    <p className="mt-1 text-black">
                      <span>Email:</span> mentarro.in@gmail.com
                    </p>
                    <p className="mt-1 text-gray-600">Phone: 9361684546 </p>
                    <p className="mt-1 text-gray-600">Phone: 9894404496 </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="flex justify-center mr-9">
        <div className="sm:flex items-center max-w-screen-xl ml-[20%]">
          <animated.div style={phone}>
            <div className="sm:w-1/2 p-10">
              <div className="image object-center text-center lg:ml-36">
                <div
                  className="relative flex justify-center h-[440px] w-[230px] border-4 border-black rounded-2xl shadow-lg p-8"
                  style={{
                    backgroundImage: "url(/we.jpg)",
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                  }}
                >
                  <span className="border border-black bg-black w-20 h-2 rounded-br-xl rounded-bl-xl mt-[-35px]"></span>
                  <span className="absolute -right-2 top-20  border-4 border-black h-10 rounded-md"></span>
                  <span className="absolute -right-2 top-44  border-4 border-black h-24 rounded-md"></span>
                </div>
              </div>
            </div>
          </animated.div>

          <animated.div style={second}>
            <div className="sm:w-1/2 p-2">
              <div className="text">
                <span className="text-slate-700 text-xl border-b-2 border-pink-600 uppercase">
                  Instagram
                </span>
                <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">
                  Follow <span className="text-red-600">Our Page</span>
                </h2>
                <h1 className="text-zinc-900 text-3xl">@mentarro</h1>
              </div>
            </div>
          </animated.div>
        </div>
      </div>
    </div>
  );
}
export default index;
