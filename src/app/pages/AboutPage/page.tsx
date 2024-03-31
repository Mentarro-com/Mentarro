import React from "react";
import Image from "next/image";

function page() {
  return (
    <div>
      <section className="pt-10 overflow-hidden bg-gray-50 md:pt-0 sm:pt-16 2xl:pt-16 ">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center grid-cols-1 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                Hey 👋 I am
                <br className="block sm:hidden" />
                Jenny Carter
              </h2>
              <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>

              <p className="mt-4 text-xl text-gray-600 md:mt-8">
                <span className="relative inline-block">
                  <span className="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300"></span>
                  <span className="relative"> Have a question? </span>
                </span>
                <br className="block sm:hidden" />
                Ask me on{" "}
                <a
                  href="#"
                  title=""
                  className="transition-all duration-200 text-sky-500 hover:text-sky-600 hover:underline"
                >
                  Twitter
                </a>
              </p>
            </div>

            <div className="relative">
              <img
                className="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg"
                alt=""
              />

              <img
                className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/business-woman.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <div className="text-center p-8">
        <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Why to choose US?
        </h2>

        <div className="flex flex-wrap items-center mt-20 text-left text-center">
          <div className="w-full md:w-3/5 lg:w-1/2 px-4">
            <img
              src="https://picsum.photos/400/240"
              alt="gem"
              className="inline-block rounded shadow-lg border border-merino-400"
            />
          </div>
          <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
            <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
              Simple integration
            </h3>
            <p className="sm:text-lg mt-6">
              Use the LocaleData gem to download translations directly into your
              Ruby on Rails projects using the provided command line interface.
              Just create a project and follow the step-by-step instructions.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center mt-20 text-left text-center">
          <div className="w-full md:w-3/5 lg:w-1/2 px-4">
            <img
              src="https://picsum.photos/400/240"
              alt="project members"
              className="inline-block rounded shadow-lg border border-merino-400"
            />
          </div>
          <div className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
            <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
              Easy collaboration
            </h3>
            <p className="sm:text-lg mt-6">
              All LocaleData projects are private. Each project can have
              multiple collaborators with different roles and access
              permissions. You determine who can see and edit your translations.
              Just add admins, developers, translators and configure their
              access rights.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center mt-20 text-center">
          <div className="w-full md:w-3/5 lg:w-1/2 px-4">
            <img
              src="https://picsum.photos/400/240"
              alt="editor"
              className="inline-block rounded shadow-lg border border-merino-400"
            />
          </div>
          <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
            <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
              No more syntax errors
            </h3>
            <p className="sm:text-lg mt-6">
              LocaleData provides you easy import/export functions for your YAML
              files. Use a simple editor with many predefined languages to
              manage your locales. LocaleData also supports multiple translation
              types, such as simple text, plural forms, numbers, booleans,
              symbols, arrays, ...
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center mt-20 text-left text-center">
          <div className="w-full md:w-3/5 lg:w-1/2 px-4">
            <img
              src="https://picsum.photos/400/240"
              alt="bulk editing"
              className="inline-block rounded shadow-lg border border-merino-400"
            />
          </div>
          <div className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
            <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
              Bulk editing
            </h3>
            <p className="sm:text-lg mt-6">
              Do you need to change the path of many translation keys at once?
              No problem, just use the bulk editing feature and enjoy the
              results.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 dark:bg-gray-800 pt-12 sm:pt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              The Ultimate Data Analytics Platform
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
                      Data Sources, including APIs and databases
                    </dt>
                    <dd className="order-1 text-5xl font-bold tracking-tight text-green-600 dark:text-green-400">
                      <span>30</span>+
                    </dd>
                  </div>
                  <div className="flex flex-col border-t border-b border-gray-100 dark:border-gray-700 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                    <dt className="order-2 mt-2 text-lg font-normal leading-6 text-gray-500 dark:text-gray-300">
                      Analytic Tools and Machine Learning Models
                    </dt>
                    <dd className="order-1 text-5xl font-bold tracking-tight text-green-600 dark:text-green-400">
                      <span>100</span>+
                    </dd>
                  </div>
                  <div className="flex flex-col border-t border-gray-100 dark:border-gray-700 p-6 text-center sm:border-0 sm:border-l">
                    <dt className="order-2 mt-2 text-lg font-normal leading-6 text-gray-500 dark:text-gray-300">
                      Real-time Data Streams and Dashboards
                    </dt>
                    <dd className="order-1 text-5xl font-bold tracking-tight text-green-600 dark:text-green-400">
                      <span>10</span>+
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-8">What our users are saying</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow rounded-lg p-8">
              <p className="text-gray-700 mb-4">
                "This app has been a game changer for me! I highly recommend it
                to anyone looking to streamline their workflow."
              </p>
              <p className="text-gray-700 font-medium">- John Doe, CEO</p>
            </div>
            <div className="bg-white shadow rounded-lg p-8">
              <p className="text-gray-700 mb-4">
                "I've tried a lot of different apps, but this one really stands
                out. It's so easy to use, and the features are exactly what I
                need."
              </p>
              <p className="text-gray-700 font-medium">
                - Jane Smith, Designer
              </p>
            </div>
            <div className="bg-white shadow rounded-lg p-8">
              <p className="text-gray-700 mb-4">
                "I love how customizable this app is. I can really make it work
                for me, no matter what project I'm working on."
              </p>
              <p className="text-gray-700 font-medium">
                - Singam Suriya, Developer
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
