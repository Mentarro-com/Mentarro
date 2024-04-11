"use client";

import React, { useEffect, useState } from "react";
import { animated, useInView, useSpring } from "react-spring";
import Image from "next/image";

interface AnimatedNumberProps {
  value: any;
}

function AnimatedNumber({ value }: AnimatedNumberProps) {
  return <animated.span>{value.to((n: any) => Math.floor(n))}</animated.span>;
}

function Page() {
  const [isVisibleFirst, setIsVisibleFirst] = useState(false);
  const [isVisibleSecond, setIsVisibleSecond] = useState(false);
  const [isVisibleThird, setIsVisibleThird] = useState(false);
  const [isVisibleFourth, setIsVisibleFourth] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const targetPositionFirst = windowHeight * 0.5;
      const targetPositionSecond = windowHeight * 0.9;
      const targetPositionThird = windowHeight * 1.3;
      const targetPositionFourth = windowHeight * 1.7;
      setIsVisibleFirst(scrollPosition > targetPositionFirst);
      setIsVisibleSecond(scrollPosition > targetPositionSecond);
      setIsVisibleThird(scrollPosition > targetPositionThird);
      setIsVisibleFourth(scrollPosition > targetPositionFourth);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const first = useSpring({
    opacity: isVisibleFirst ? 1 : 0,
    transform: isVisibleFirst ? "translateX(0%)" : "translateX(-100%)",
    config: { duration: 500 },
    delay: isVisibleFirst ? 500 : 0,
  });

  const second = useSpring({
    opacity: isVisibleSecond ? 1 : 0,
    transform: isVisibleSecond ? "translateX(0%)" : "translateY(-100%)",
    config: { duration: 500 },
    delay: isVisibleSecond ? 500 : 0,
  });

  const third = useSpring({
    opacity: isVisibleThird ? 1 : 0,
    transform: isVisibleThird ? "translateX(0%)" : "translateX(-100%)",
    config: { duration: 500 },
    delay: isVisibleThird ? 500 : 0,
  });

  const fourth = useSpring({
    opacity: isVisibleFourth ? 1 : 0,
    transform: isVisibleFourth ? "translateX(0%)" : "translateY(-100%)",
    config: { duration: 500 },
    delay: isVisibleFourth ? 500 : 0,
  });

  const [animateFirst, setAnimateFirst] = useState(false);
  const [animateSecond, setAnimateSecond] = useState(false);
  const [animateThird, setAnimateThird] = useState(false);

  const [refFirst, inViewFirst] = useInView({
    rootMargin: "-90px 0px",
  });
  const [refSecond, inViewSecond] = useInView({
    rootMargin: "-90px 0px",
  });
  const [refThird, inViewThird] = useInView({
    rootMargin: "-90px 0px",
  });

  useEffect(() => {
    // Set animation state when component enters viewport
    if (inViewFirst) setAnimateFirst(true);
    if (inViewSecond) setAnimateSecond(true);
    if (inViewThird) setAnimateThird(true);
  }, [inViewFirst, inViewSecond, inViewThird]);

  const { number: numberFirst } = useSpring({
    number: animateFirst ? 65 : 0,
    from: { number: 0 },
    config: { duration: 1500 },
  });

  const { number: numberSecond } = useSpring({
    number: animateSecond ? 4 : 0,
    from: { number: 0 },
    config: { duration: 1500 },
  });

  const { number: numberThird } = useSpring({
    number: animateThird ? 2 : 0,
    from: { number: 0 },
    config: { duration: 1500 },
  });

  const [isVisible, setIsVisible] = useState(false);

  const aboutus = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateX(0%)" : "translateX(-100%)",
    config: { duration: 500 },
  });

  const aboutpara = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateX(0%)" : "translateY(-100%)",
    config: { duration: 400 },
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 400);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="overflowX: 'hidden'">
      <section className="pt-10 overflow-hidden bg-gray-50 md:pt-0 sm:pt-16 2xl:pt-16 ">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl mt-9">
          <div className="grid items-center grid-cols-1 md:grid-cols-2 mt-[-45px]">
            <div className="mt-35px">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                <animated.div style={aboutus}>
                  <span className="text-red-600">About</span> Us
                </animated.div>
                <br className="block sm:hidden" />
              </h2>
              <animated.div style={aboutpara}>
                <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
                &#34;At Mentarro, we are not just a company; we are a digital
                  force, cutting through the clutter with our dynamic team of
                  trend-savvy experts. Founded by a visionary entrepreneur, we
                  are here to revolutionize your online presence. With our
                  relentless pursuit of excellence and a knack for innovation,
                  we craft bespoke websites and game-changing ideas that propel
                  your business to the forefront of your industry. Say goodbye
                  to outdated methods and hello to a vibrant online future with
                  Mentarro.&#34;
                </p>
              </animated.div>

              <p className="mt-4 text-xl text-gray-600 md:mt-8">
                <span className="relative inline-block">
                  <span className="relative"> Have a question? </span>
                </span>
                <br className="block sm:hidden" />
                Ask me on 
                <a
                  href="https://www.instagram.com/mentarro/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all duration-200 text-pink-500 hover:text-pink-600 hover:underline"
                >
                  Instagram
                </a>
              </p>
            </div>

            <div className="relative">
              <img
                className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
                src="/about_top.jpeg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <div className="text-center p-12 mb-9">
        <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          <span className="text-red-600 mt-[8px]">Why to </span>choose US?
        </h2>

        <animated.div style={first}>
          <div className="flex flex-wrap items-center mt-20  text-center">
            <div className="w-full md:w-3/5 lg:w-1/2 px-4">
              <Image
                src="/about1.jpeg"
                alt="gem"
                width={300} // Set the desired width
                height={200} // Set the desired height
                className="inline-block rounded shadow-lg border border-merino-400"
              />
            </div>
            <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
              <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
                Tailored Career and Goal Setting Solutions
              </h3>
              <p className="sm:text-lg mt-6">
                At Mentarro, we recognize that everyone&apos;s career journey is
                distinct. That&apos;s why we provide tailored career and goal
                setting solutions, designed to match your aspirations and
                ambitions. Whether you are seeking advancement, skill
                enhancement, or personal growth, our strategies keep you on the
                path to success.
              </p>
            </div>
          </div>
        </animated.div>

        <animated.div style={second}>
          <div className="flex flex-wrap items-center mt-20 text-center">
            <div className="w-full md:w-3/5 lg:w-1/2 px-4">
              <Image
                src="/about2.jpeg"
                alt="project members"
                width={300} // Set the desired width
                height={200} // Set the desired height
                className="inline-block rounded shadow-lg border border-merino-400"
              />
            </div>
            <div className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
              <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
                Strategic Planning Expertise
              </h3>
              <p className="sm:text-lg mt-6">
                Strategic planning is the bedrock of success for any venture. At
                Mentarro, we excel in crafting bespoke strategies perfectly
                attuned to your unique needs and objectives. Our seasoned
                strategists work hand-in-hand with you to uncover opportunities,
                navigate risks, and pave the way for sustainable growth and
                triumph. Let&apos;s chart your course to success together.
              </p>
            </div>
          </div>
        </animated.div>

        <animated.div style={third}>
          <div className="flex flex-wrap items-center mt-20 text-center">
            <div className="w-full md:w-3/5 lg:w-1/2 px-4">
              <Image
                src="/about3.jpeg"
                alt="editor"
                width={300} // Set the desired width
                height={200} // Set the desired height
                className="inline-block rounded shadow-lg border border-merino-400"
              />
            </div>
            <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
              <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
                Customizable App Development Solutions
              </h3>
              <p className="sm:text-lg mt-6">
                In today&apos;s digital age, a standout app is your ticket to
                staying ahead in the competition. At Mentarro, we don&apos;t
                just offer app development solutions; we craft experiences that
                resonate with your brand. From ideation to launch, our skilled
                developers harness the latest tech to deliver apps that
                captivate users and yield tangible results. Let&apos;s turn your
                vision into a digital reality that sets you apart.
              </p>
            </div>
          </div>
        </animated.div>

        <animated.div style={fourth}>
          <div className="flex flex-wrap items-center mt-20  text-center">
            <div className="w-full md:w-3/5 lg:w-1/2 px-4">
              <Image
                src="/about4.jpeg"
                alt="bulk editing"
                width={300} // Set the desired width
                height={200} // Set the desired height
                className="inline-block rounded shadow-lg border border-merino-400"
              />
            </div>
            <div className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
              <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
                Dedicated Support
              </h3>
              <p className="sm:text-lg mt-6">
                At Mentarro, your success is our top priority. We provide
                dedicated support every step of the way, ensuring that you have
                the guidance, resources, and expertise needed to achieve your
                goals. From initial consultation to ongoing support and
                optimization, we are committed to your success.
              </p>
            </div>
          </div>
        </animated.div>
      </div>

      <div className="bg-green-50 dark:bg-gray-800 pt-12 sm:pt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              The Ultimate Guidance Provider Oraganization
            </h2>
          </div>
        </div>
        <div className="mt-10 bg-white dark:bg-gray-700 pb-12 sm:pb-16">
          <div className="relative">
            <div className="absolute inset-0 h-1/2 bg-green-50 dark:bg-gray-800"></div>
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-4xl">
                <dl className="rounded-lg bg-white dark:bg-gray-800 shadow-lg sm:grid sm:grid-cols-3">
                  <div className="flex flex-col border-b border-gray-100 dark:border-gray-700 p-6 text-center sm:border-0 sm:border-r">
                    <dt className="order-2 mt-2 text-lg font-normal leading-6 text-gray-500 dark:text-gray-300">
                      Instagram Followers
                    </dt>

                    <div className="target-component" ref={refFirst}>
                      <animated.dd className="order-1 text-5xl font-bold tracking-tight text-green-600 dark:text-green-400">
                        <AnimatedNumber value={numberFirst} />+
                      </animated.dd>
                    </div>
                  </div>
                  <div className="flex flex-col border-t border-b border-gray-100 dark:border-gray-700 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                    <dt className="order-2 mt-2 text-lg font-normal leading-6 text-gray-500 dark:text-gray-300">
                      Developed Websites
                    </dt>
                    <div className="target-component" ref={refSecond}>
                      <animated.dd className="order-1 text-5xl font-bold tracking-tight text-green-600 dark:text-green-400">
                        <AnimatedNumber value={numberSecond} />+
                      </animated.dd>
                    </div>
                  </div>
                  <div className="flex flex-col border-t border-gray-100 dark:border-gray-700 p-6 text-center sm:border-0 sm:border-l">
                    <dt className="order-2 mt-2 text-lg font-normal leading-6 text-gray-500 dark:text-gray-300">
                      Real-time Presented Guidance Program
                    </dt>
                    <div className="target-component" ref={refThird}>
                      <animated.dd className="order-1 text-5xl font-bold tracking-tight text-green-600 dark:text-green-400">
                        <AnimatedNumber value={numberThird} />+
                      </animated.dd>
                    </div>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-8 text-red-400">
            What our users are saying
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow rounded-lg p-8 hover:scale-105 transition-transform">
              <p className="text-gray-700 mb-4">
              &#34;Being new to the field, I was thrilled to discover this
                organization. Their AI learning path is incredibly accessible,
                breaking down complex concepts into manageable steps. The
                guidance on interacting with AI is practical and hands-on,
                making it easy to apply in real-world scenarios. I&apos;m
                grateful for the opportunity to learn and grow with such a
                supportive community!&#34;.
              </p>
              <p className="text-gray-700 font-medium">- Junior</p>
            </div>

            <div className="bg-white shadow rounded-lg p-8 hover:scale-105 transition-transform">
              <p className="text-gray-700 mb-4">
              &#34;I &apos;m delighted to witness the inception of this remarkable
                new organization!I am confident that this venture will inspire
                and enable countless individuals to realize their aspirations,
                propelling them toward unparalleled achievements. Here&apos;s to
                a journey filled with triumphs and transformative impact!&#34;
              </p>
              <p className="text-gray-700 font-medium">- Well Wisher</p>
            </div>

            <div className="bg-white shadow rounded-lg p-8 hover:scale-105 transition-transform">
              <p className="text-gray-700 mb-4">
              &#34;Their approach to AI education and career guidance is nothing
                short of exemplary.They are equipping students with essential
                skills for the future. I have no doubt that their commitment to
                excellence will cultivate a new generation of knowledgeable and
                skilled professionals. I eagerly anticipate the positive impact
                this organization will have on the educational landscape and
                beyond.&#34;
              </p>
              <p className="text-gray-700 font-medium">- Teacher</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Page;
