type Author = {
  name: string;
  image: string;
  designation: string;
};

export type AiTool = {
  id: number;
  name: string;
  short_description: string;
  photo?: string;
  pricing_type?: string[];
  price_from?: string;
  tags?: string[];
  website_url?: string;
};

export type DetailAiTool = {
  //id: number;
  name: string;
  short_description: string;
  full_description: string;
  photo?: string;
  pricing_type?: string[];
  price_from?: string;
  tags?: string[];
  website_url?: string;
};

export enum SortBy {
  CREATED_AT_DESC = 0,
  CREATED_AT_ASC,
}

export interface ToolSearchCriteria {
  pricing_type?: string[] | null;
  tags?: string[] | null;
  result_per_page?: number;
  current_page?: number;
  sorted_by?: SortBy;
}

export interface ToolSearchResult {
  totalResults: number;
  data: AiTool[];
}
