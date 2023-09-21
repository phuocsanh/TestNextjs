import { AiTool } from "@/types/ai-tool";
import Image from "next/image";
import Link from "next/link";
import style from "./SingleResultItem.module.css";
const SingleResultItem = ({ blog }: { blog: AiTool }) => {
  const {
    name: title,
    photo,
    short_description,
    tags,
    pricing_type,
    price_from,
    website_url,
  } = blog;
  return (
    <>
      <div
        className="wow fadeInUp relative overflow-hidden rounded-md bg-white shadow-one dark:bg-dark"
        data-wow-delay=".1s"
      >
        <Link href="/" className="relative block h-[220px] w-full">
          {pricing_type && (
            <span
              className={`${style["gradient"]} absolute right-6 top-6 z-20 inline-flex items-center justify-center rounded-full  px-4 py-2 text-sm font-semibold capitalize text-white`}
            >
              {pricing_type}
            </span>
          )}
          <div className={style["image-container"]}>
            <Image src={photo} alt="image" fill />
          </div>
        </Link>
        <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
          <h3>
            <Link
              href="/"
              className="mb-4 block text-xl font-bold  uppercase text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
            >
              {title}
            </Link>
          </h3>
          <div
            className="wow fadeInUp mx-auto mt-4 max-w-[800px] text-left"
            data-wow-delay=".2s"
          >
            {tags.map((tag, index) => (
              <span
                key={index}
                className={`${style.tag} bg-green-50 text-green-700 ring-green-600/20 mr-2 inline-flex cursor-pointer items-center rounded-md px-2 py-1 font-medium ring-1 ring-inset`}
              >
                {tag}
              </span>
            ))}
          </div>
          <p className=" mt-4 border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
            {short_description}
          </p>
          {price_from && (
            <p className="border-body-color border-opacity-10 pb-6 text-base font-medium italic text-body-color dark:border-white dark:border-opacity-10">
              Starting from {price_from}
            </p>
          )}
          <div className="flex items-center border-t border-body-color pt-5">
            <div className=" mr-5 flex w-full items-center justify-center border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
              <a
                href={website_url}
                target="_blank"
                rel="noreferrer"
                className="bg-grey-light hover:bg-grey text-grey-darkest inline-flex items-center rounded px-4 py-2 font-bold"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>

                <span className="ml-2">Visit Website</span>
              </a>
            </div>
            {/* <div className="flex w-1/2 items-center justify-center">
              <button className="bg-grey-light hover:bg-grey text-grey-darkest inline-flex items-center rounded px-4 py-2 font-bold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
                <span className="ml-2">Favorite</span>
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleResultItem;
