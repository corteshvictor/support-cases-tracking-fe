import { test, expect } from "@playwright/test";

import { SUPPORT_CASES_FE_URL, SUPPORT_CASES_API_URL } from "./constants";

test("should be able to navigate using the top menu", async ({ page }) => {
  await page.goto(SUPPORT_CASES_FE_URL, { waitUntil: "networkidle" });

  const linkSupportCases = page.getByRole("link", { name: "Support Cases" });
  await expect(linkSupportCases).toBeVisible();
  await expect(linkSupportCases).toHaveAttribute("href", "/cases");
  await expect(linkSupportCases).toHaveText("Support Cases");
  await linkSupportCases.click();

  const titleListSupportCases = page.getByRole("heading", {
    name: "List of case supports",
  });
  await expect(titleListSupportCases).toBeVisible();
  await expect(titleListSupportCases).toHaveText("List of case supports");
  await titleListSupportCases.click();

  const textStatusFilter = page.getByText("Status Filter");
  await expect(textStatusFilter).toBeVisible();
  await expect(textStatusFilter).toHaveText("Status Filter");

  const linkHome = page.getByRole("link", { name: "Home" });
  await expect(linkHome).toBeVisible();
  await expect(linkHome).toHaveAttribute("href", "/");
  await expect(linkHome).toHaveText("Home");
  await linkHome.click();

  await linkSupportCases.click();

  const columnheaderNumber = page.getByRole("columnheader", { name: "Number" });
  await expect(columnheaderNumber).toBeVisible();
  await expect(columnheaderNumber).toHaveText("Number");

  const rowheaderSC001 = page.getByRole("rowheader", { name: "SC001" });
  await expect(rowheaderSC001).toBeVisible();
  await expect(rowheaderSC001).toHaveText("SC001");
  await rowheaderSC001.click();

  const titleSupportCaseDetails = page.getByRole("heading", {
    name: "Support Case Details",
  });
  await expect(titleSupportCaseDetails).toBeVisible();
  await expect(titleSupportCaseDetails).toHaveText("Support Case Details");
});

test("pagination of the case list should work", async ({ page }) => {
  await page.goto(SUPPORT_CASES_FE_URL, { waitUntil: "networkidle" });
  
  await page.getByRole('link', { name: 'Support Cases' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Previous' }).click();
})

test("should return a 200 with the query for all cases", async ({ page }) => {
  await page.goto(SUPPORT_CASES_FE_URL, { waitUntil: "networkidle" });

  await page.route(`${SUPPORT_CASES_API_URL}/support_cases`, (route) => {
    const request = route.request();

    if (request.method() === "GET") {
      route.continue();
    } else {
      route.abort();
    }
  });

  await page.getByRole("link", { name: "Support Cases" }).click();

  const response = await page.waitForResponse(
    (response) =>
      response.url().includes("/support_cases") && response.status() === 200
  );

  expect(response.status()).toBe(200);

  await expect(
    page.getByRole("heading", { name: "List of case supports" })
  ).toBeVisible();
});

test("should return a 200 with a single case query", async ({ page }) => {
  await page.goto(SUPPORT_CASES_FE_URL, { waitUntil: "networkidle" });

  await page.route(`${SUPPORT_CASES_API_URL}/support_cases/1`, (route) => {
    const request = route.request();

    if (request.method() === "GET") {
      route.continue();
    } else {
      route.abort();
    }
  });

  await page.getByRole("link", { name: "Support Cases" }).click();
  await page.getByRole('rowheader', { name: 'SC001' }).click();

  const response = await page.waitForResponse(
    (response) =>
      response.url().includes("/support_cases/1") && response.status() === 200
  );

  expect(response.status()).toBe(200);

  await expect(
    page.getByRole("heading", { name: "Support Case Details" })
  ).toBeVisible();
});
