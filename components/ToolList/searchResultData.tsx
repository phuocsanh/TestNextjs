import { AiTool } from "@/types/ai-tool";

const searchResultData: AiTool[] = [
  {
    id: 1,
    name: "Best UI components for modern websites",
    short_description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    photo: "/images/blog/blog-01.jpg",
    pricing_type: "free",
    tags: [1, 2, 3],
  },
  {
    id: 2,
    name: "9 simple ways to improve your design skills",
    short_description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    photo: "/images/blog/blog-02.jpg",
    tags: [1, 2, 3],
    pricing_type: "paid",
    price_from: "$15/month",
  },
  {
    id: 3,
    name: "Tips to quickly improve your coding speed.",
    short_description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    photo: "/images/blog/blog-03.jpg",
    tags: [1, 2, 3],
  },
];
export default searchResultData;
