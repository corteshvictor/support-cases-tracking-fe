import { test, expect } from "@playwright/test";

import { SUPPORT_CASES_FE_URL, SUPPORT_CASES_API_URL } from "./constants";

test("has title", async ({ page }) => {
  await page.goto(SUPPORT_CASES_FE_URL);

  await expect(page).toHaveTitle(/Support case Tracking/);
});

test("A support case is being successfully created", async ({ page }) => {
  await page.goto(SUPPORT_CASES_FE_URL, { waitUntil: "networkidle" });

  await expect(
    page.getByRole("heading", { name: "Support Case Form" })
  ).toBeVisible();

  await page.getByPlaceholder("SC-").click();
  await page.getByPlaceholder("SC-").fill("VHC-0001");

  await page.getByPlaceholder("Description").click();
  await page.getByPlaceholder("Description").fill("Description e2e");

  await page.getByLabel("Status").selectOption("In Progress");

  await page.getByPlaceholder("Database Name").click();
  await page.getByPlaceholder("Database Name").fill("Stores");

  await page.getByPlaceholder("Schema Name").click();
  await page.getByPlaceholder("Schema Name").fill("Users");

  await page.getByPlaceholder("Query Executed").click();
  await page.getByPlaceholder("Query Executed").fill("Select * from Users");

  await page.getByPlaceholder("Executed By").click();
  await page.getByPlaceholder("Executed By").fill("admin");

  await page.getByPlaceholder("Requester").click();
  await page.getByPlaceholder("Requester").fill("manager");

  await page.getByLabel("Priority").selectOption("Medium");
  await page.getByRole("button", { name: "Submit" }).click();

  await expect(
    page.getByRole("heading", { name: "List of case supports" })
  ).toBeVisible();
});

test("should submit form and receive 201 status code", async ({ page }) => {
  await page.goto(SUPPORT_CASES_FE_URL, { waitUntil: "networkidle" });

  await page.route(`${SUPPORT_CASES_API_URL}/support_cases`, (route) => {
    const request = route.request();

    if (request.method() === "POST") {
      route.continue();
    } else {
      route.abort();
    }
  });

  await page.getByPlaceholder("SC-").click();
  await page.getByPlaceholder("SC-").fill("VHC-0001");
  await page.getByPlaceholder("Description").click();
  await page.getByPlaceholder("Description").fill("Description e2e");
  await page.getByPlaceholder("Database Name").fill("Stores");
  await page.getByPlaceholder("Schema Name").click();
  await page.getByPlaceholder("Schema Name").fill("Users");
  await page.getByPlaceholder("Query Executed").click();
  await page.getByPlaceholder("Query Executed").fill("Select * from Users");
  await page.getByPlaceholder("Executed By").click();
  await page.getByPlaceholder("Executed By").fill("admin");
  await page.getByPlaceholder("Requester").click();
  await page.getByPlaceholder("Requester").fill("manager");
  await page.getByLabel("Priority").selectOption("Medium");
  await page.getByRole("button", { name: "Submit" }).click();

  const response = await page.waitForResponse(
    (response) =>
      response.url().includes("/support_cases") && response.status() === 201
  );

  expect(response.status()).toBe(201);

  await expect(
    page.getByRole("heading", { name: "List of case supports" })
  ).toBeVisible();
});
