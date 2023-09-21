"use client";
import { SAToolSubmitAction } from "@/lib/server-action/ToolSubmitAction";
import NewsLatterBox from "./NewsLatterBox";
import { useState } from "react";
import SupportChat from "../Common/SupportChat";

const Contact = () => {
  /* const [errorMessage, setErrorMessage] = useState<string>();
  const [sendMessageSuccess, setSendMessageSuccess] = useState(false);

  const handleToolSubmit = async (event: any) => {
    setSendMessageSuccess(false);
    setErrorMessage(null);
    if (event.target.value.length === 0) {
      return;
    }
    const formData = event.target;
    try {
      const searchResult = await SAToolSubmitAction({
        name: formData.app_name,
        email: formData.email,
        website_url: formData.website,
        message: formData.email,
      });
      setSendMessageSuccess(true);
    } catch (error) {
      setSendMessageSuccess(false);
      setErrorMessage(
        "Unexpected error occurred. Please try again or contact us for support"
      );
    }
  }; */
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="wow fadeInUp mb-12 rounded-md bg-primary/[3%] px-8 py-11 dark:bg-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Submit new AI apps for FREE? Send us a message
              </h2>
              <p className="my-5 text-base font-medium text-body-color">
                Message content should be include: Your app name, app
                description and app website URL
              </p>
              <p className="mb-12 text-base font-medium text-body-color">
                Our support team will review and get back to you via email as
                soon as possible.
              </p>
              {/* <div className="w-full flex items-center justify-center">
                <SupportChat />
              </div> */}
              {/* <form onSubmit={handleToolSubmit}>
                  <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                          htmlFor="email"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Your Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          placeholder="Enter your email"
                          className="w-full rounded-md border border-transparent px-6 py-3 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                        />
                      </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                          htmlFor="app_name"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Your App Name
                        </label>
                        <input
                          type="text"
                          name="app_name"
                          placeholder="Enter App name"
                          className="w-full rounded-md border border-transparent px-6 py-3 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                        />
                      </div>
                    </div>
                    <div className="w-full px-4">
                      <div className="mb-8">
                        <label
                          htmlFor="website"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Website URL
                        </label>
                        <input
                          name="website"
                          placeholder="Enter website url"
                          className="w-full resize-none rounded-md border border-transparent px-6 py-3 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                        ></input>
                      </div>
                    </div>
                    <div className="w-full px-4">
                      <div className="mb-8">
                        <label
                          htmlFor="message"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Your Message
                        </label>
                        <textarea
                          name="message"
                          rows={5}
                          placeholder="Enter your AI App info (ie. Website URL, short description, full description, price if any...)"
                          className="w-full resize-none rounded-md border border-transparent px-6 py-3 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                        ></textarea>
                      </div>
                    </div>
                    <div className="w-full px-4">
                      <button className="rounded-md bg-primary px-9 py-4 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
                        Submit AI Apps Info
                      </button>
                    </div>
                  </div>
                </form> */}
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
