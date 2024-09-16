import { http, HttpResponse } from "msw";

import { SUPPORT_CASES } from "./data";
import { SUPPORT_CASES_API_URL } from "shared/constants";
import { SupportCases } from "shared/types";

export const handlers = [
  http.get(`${SUPPORT_CASES_API_URL}/support_cases`, () => {
    const response = {
      info: {
        count: SUPPORT_CASES.length,
        pages: 1,
        next: null,
        prev: null,
      },
      results: SUPPORT_CASES,
    };

    return HttpResponse.json(response);
  }),

  http.post(`${SUPPORT_CASES_API_URL}/support_cases`, async ({ request }) => {
    const newPost = (await request.json()) as SupportCases;

    return HttpResponse.json({ ...newPost, id: 4 }, { status: 201 });
  }),
];
