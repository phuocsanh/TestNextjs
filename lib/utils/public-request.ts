// deno-lint-ignore-file no-explicit-any
"use server";
import PrivateConfigService from "./private-config";

// WARNING: do not change these values
const PUBLIC_REQUEST_HEADER_AGENT_VALUE = "web-next";

export const getPublicApiKeyHeaders = () => {
  return {
    "x-e-next-api-key": PrivateConfigService.getPublicApiSecret() ?? "",
    "x-e-agent": PUBLIC_REQUEST_HEADER_AGENT_VALUE,
  };
};
