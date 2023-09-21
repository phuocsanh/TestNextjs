"use client";
import { useSearchParams } from "next/navigation";

import { AiTool } from "@/types/ai-tool";
import SingleResultItem from "./SingleResultItem/SingleResultItem";
import { Pagination } from "../Common/Pagination";

interface IToolSearchResult {
  data: AiTool[];
  totalResults: number;
  pathname?: string;
}

const ToolSearchResult = ({
  data,
  totalResults,
  pathname,
}: IToolSearchResult) => {
  const searchParams = useSearchParams();
  const RESULT_PER_PAGE = 6;
  const totalPages = Math.ceil(totalResults / RESULT_PER_PAGE);
  return (
    <section id="search-result" className="bg-primary/5 py-8">
      <div className="container">
        <div className="my-4 font-bold">Found {totalResults} AI Apps</div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {data.map((tool) => (
            <div key={tool.id} className="w-full">
              <SingleResultItem blog={tool} />
            </div>
          ))}
        </div>
        <div
          className="wow fadeInUp -mx-4 flex flex-wrap"
          data-wow-delay=".15s"
        >
          <div className="w-full px-4">
            <Pagination
              currentPage={Number(searchParams?.get("current_page") ?? 1)}
              totalPages={totalPages}
              pathName={pathname ?? ""}
              queryObject={undefined}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolSearchResult;
