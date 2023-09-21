import { postJson } from "../utils/api";
import {
  DetailAiTool,
  ToolSearchCriteria,
  ToolSearchResult,
} from "@/types/ai-tool";

interface IAiToolRepository {
  searchTools(searchCriteria: ToolSearchCriteria): Promise<ToolSearchResult>;
  getToolDetail(id: number): Promise<DetailAiTool>;
}
export class AiToolRepository implements IAiToolRepository {
  constructor() {}
  async getToolDetail(id: number): Promise<DetailAiTool> {
    return Promise.resolve({
      name: `test name ${id}`,
      short_description: `test name ${id}`,
      full_description: `test name ${id}`,
      photo: `test name ${id}`,
      pricing_type: [`test pricing_type`],
      price_from: `test name ${id}`,
      tags: ["tag-1", "tag-2"],
      website_url: "https://website_url",
    });
  }

  async searchTools(
    searchCriteria: ToolSearchCriteria
  ): Promise<ToolSearchResult> {
    return await (await postJson("search-tools", searchCriteria)).json();
  }
}
