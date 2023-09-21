import { SubmitNewTool } from "@/types/submit-request";
import { postJson } from "../utils/api";
interface IToolRequestRepository {
  sunmitRequest(request: SubmitNewTool): Promise<any>;
}
export class ToolRequestRepository implements IToolRequestRepository {
  constructor() {}

  async sunmitRequest(request: SubmitNewTool) {
    return await (await postJson("tool-request/submit-tool", request)).json();
  }
}
