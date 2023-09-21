import { PostgrestSingleResponse } from "@supabase/supabase-js";

interface IBookmarkToolRepository {
  bookmarkTool(user_id: string, tool_id: string): Promise<any>;
  getAllBookmarkedTools(user_id: string): Promise<
    PostgrestSingleResponse<
      {
        tool_id: string;
      }[]
    >
  >;
}

const BOOKMARK_TOOL_TABLE = "ai_bookmark_tool";
export class BookmarkToolRepository implements IBookmarkToolRepository {
  constructor() {}
  getAllBookmarkedTools(
    user_id: string
  ): Promise<PostgrestSingleResponse<{ tool_id: string }[]>> {
    throw new Error("Method not implemented.");
  }

  async bookmarkTool(user_id: string, tool_id: string) {
    throw new Error("Method not implemented.");
  }
}
