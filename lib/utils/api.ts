import ConfigService from "./config";
import { getPublicApiKeyHeaders } from "./public-request";

export const DEFAULT_CACHE_FETCHING = 30 * 60; // 30 minutes
async function fetchApi(
  url: string,
  init: RequestInit,
  nextOptions: any = { next: { revalidate: DEFAULT_CACHE_FETCHING } }
): Promise<Response> {
  /* const token = AuthService.getAuthToken();
  if (token && token !== "") {
    if (init && init.headers)
      init.headers = { ...init?.headers, Authorization: `Bearer ${token} ` };
    else if (init)
      init.headers = {
        Authorization: token,
        "Content-Type": "application/json",
      };
  } */
  const backendUrl = ConfigService.getBackendUrl();
  const response = await fetchWithTimeout(
    `${backendUrl}${url}`,
    init,
    nextOptions
  );
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const responseBodyMethod = (
    response.headers.get("content-type") || ""
  ).includes("json")
    ? "json"
    : "text";

  return Promise.reject({
    statusCode: response.status,
    error: (await response[responseBodyMethod]()) || response.statusText,
    requestMethod: init?.method || "GET",
    message: response.statusText,
  });
}

export async function fetchWithTimeout(
  url: string,
  options: Parameters<typeof fetch>[1],
  nextOptions?: any,
  timeout = 30000
): Promise<Response> {
  return Promise.race([
    fetch(url, { ...options, ...nextOptions }),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Request timed out")), timeout)
    ) as any as Response,
  ]);
}

export async function postJson<T>(
  url: string,
  data?: T,
  headerOptions: HeadersInit = getPublicApiKeyHeaders(),
  nextOptions?: any
): Promise<Response> {
  return fetchApi(
    url,
    {
      method: "POST",
      headers: {
        ...headerOptions,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    },
    nextOptions
  );
}

export async function putJson<T>(
  url: string,
  data: T,
  headerOptions: HeadersInit = getPublicApiKeyHeaders()
): Promise<Response> {
  return fetchApi(url, {
    method: "PUT",
    headers: {
      ...headerOptions,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  });
}

export async function getJson(
  url: string,
  headerOption: HeadersInit = getPublicApiKeyHeaders(),
  nextOptions?: any
): Promise<Response> {
  return fetchApi(
    url,
    {
      method: "GET",
      headers: {
        ...headerOption,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    },
    nextOptions
  );
}
