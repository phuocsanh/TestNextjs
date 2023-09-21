import ToolFilter from "@/components/ToolFilter";
import ToolSearchResult from "@/components/ToolList";
import { AiToolRepository } from "@/lib/repository/tool-repository";
import { SortBy } from "@/types/ai-tool";
const ToolByTagPage = async ({
  params,
  searchParams,
}: {
  params: {
    slug: string;
  };
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  const aiToolRepository = new AiToolRepository();
  const current_page = searchParams["current_page"]
    ? Number(searchParams["current_page"])
    : 1;
  const sorted_by = searchParams["current_page"]
    ? Number(searchParams["current_page"])
    : SortBy.CREATED_AT_DESC;
  const { data, totalResults } = await aiToolRepository.searchTools({
    current_page,
    sorted_by,
    tags: [params.slug],
  });
  return (
    <div className="pt-[140px]">
      <ToolFilter />
      <ToolSearchResult
        data={data}
        totalResults={totalResults}
        pathname={`/ai-tools/${params.slug}`}
      />
    </div>
  );
};

export default ToolByTagPage;
