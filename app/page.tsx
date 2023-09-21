import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import ToolFilter from "@/components/ToolFilter";
import ToolSearchResult from "@/components/ToolList";
import { AiToolRepository } from "@/lib/repository/tool-repository";
import { SortBy } from "@/types/ai-tool";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default async function Home({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
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
  });
  return (
    <>
      <ScrollUp />
      <Hero />
      <ToolFilter />
      <ToolSearchResult data={data} totalResults={totalResults} />
      {/* <Features />
      <Video />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      <Pricing />
      <Blog /> */}
      <Contact />
    </>
  );
}
