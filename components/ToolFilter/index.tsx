"use client";
import { useState } from "react";
import SearchPopup from "../SearchPopup";
const tags = [
  { name: "Tag 1", slug: "tag-1" },
  { name: "Tag 2", slug: "tag-2" },
  { name: "Tag 3", slug: "tag-3" },
  { name: "Tag 4", slug: "tag-4" },
  { name: "Tag 5", slug: "tag-5" },
  { name: "Tag 6", slug: "tag-6" },
];
const ToolFilter = () => {
  const [isShowSearchPopup, setIsShowSearchPopup] = useState(false);
  return (
    <>
      <section id="filter" className="relative z-10 overflow-hidden pb-5">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full  px-4">
              <div className="flex flex-row items-center">
                <label className="relative  mx-auto block w-[800px]  max-w-[800px]">
                  <span className="sr-only">Search</span>
                  <input
                    type="text"
                    name="search"
                    placeholder="Search for your AI tools..."
                    className="w-full rounded-md border border-transparent px-6 py-3 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                  ></input>

                  <span className="absolute inset-y-0 right-5 flex items-center pl-2">
                    <button className="bg-grey-light hover:bg-grey text-grey-darkest inline-flex items-center rounded px-4 py-2 font-bold">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="fill-slate-300 h-6 w-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        />
                      </svg>
                      <span className="ml-2">Search</span>
                    </button>
                  </span>
                </label>

                <button
                  onClick={() => setIsShowSearchPopup(true)}
                  className="ml-2 rounded bg-[#003cab] px-2 py-1 sm:ml-2  sm:px-3 sm:py-2"
                >
                  <p className="text-sm">Advance Search</p>
                </button>
              </div>
              <div
                className="wow fadeInUp mx-auto mt-4 max-w-[800px] text-center"
                data-wow-delay=".2s"
              >
                {tags.map((tag) => (
                  <a
                    href={`/ai-tools/${tag.slug}`}
                    key={tag.slug}
                    className="bg-green-50 text-green-700 ring-green-600/20 mr-2 inline-flex cursor-pointer items-center rounded-md px-2 py-1 font-medium ring-1 ring-inset"
                  >
                    {tag.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {isShowSearchPopup && (
        <SearchPopup
          togglePopup={setIsShowSearchPopup}
          isOpen={isShowSearchPopup}
        />
      )}
    </>
  );
};
export default ToolFilter;
