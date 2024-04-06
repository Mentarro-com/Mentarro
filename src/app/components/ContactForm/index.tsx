'use client'

import React, { useEffect } from "react";
interface CustomWindow extends Window {
  hbspt?: {
    forms: {
      create: (options: {
        portalId: string | undefined;
        formId: string | undefined;
        target: string;
      }) => void;
    };
  };
}

const PORTAL_ID: any = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID;
const FORM_ID: any = process.env.NEXT_PUBLIC_HUBSPOT_FORM_ID;

const HubSpotForm: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.charset = "utf-8";
    script.type = "text/javascript";
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    document.body.appendChild(script);

    const loadHandler = () => {
      const customWindow = window as CustomWindow;

      if (customWindow.hbspt) {
        customWindow.hbspt.forms.create({
          portalId: PORTAL_ID,
          formId: FORM_ID,
          target: "#hubspot-form-container",
        });
      }
    };

    script.addEventListener("load", loadHandler);

    return () => {
      document.body.removeChild(script);
      script.removeEventListener("load", loadHandler);
    };
  }, []);

  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-20 ">
      <div>
        <h1
          id="hubspot"
          className="font-bold text-3xl mb-6 md:mb-9 ml-4 md:ml-12"
        >
          Contact us
        </h1>
      </div>
      <div className="p-6 md:p-16 flex flex-col md:flex-row items-center border border-black mb-6 bg-gray-100 rounded-lg">
        <div className="text-lg font-light md:p-4 w-full md:w-1/2 ">
          <h4 className="font-bold text-xl md:text-2xl lg:text-2xl mb-4 md:mb-8">
            Take a Look Behind the data with us
          </h4>
          <p className="mb-4 md:mb-0">
            Book a personalized demo and we&apos;ll show you how our analytics
            platform and solutions can help you operate smarter - with data on
            your
          </p>
        </div>
        <div
          id="hubspot-form-container"
          className="border border-black p-4 md:p-7 md:w-1/2 shadow-2xl rounded-lg"
        ></div>
      </div>
    </div>
  );
};

export default HubSpotForm;
