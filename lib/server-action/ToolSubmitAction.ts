"use server";

import { SubmitNewTool } from "@/types/submit-request";
import { ToolRequestRepository } from "../repository/tool-request-respository";

export async function SAToolSubmitAction(request: SubmitNewTool) {
  const toolRequestRepository = new ToolRequestRepository();
  return await toolRequestRepository.sunmitRequest(request);
}
