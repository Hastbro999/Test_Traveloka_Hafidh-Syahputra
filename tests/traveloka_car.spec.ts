import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  test.setTimeout(1000000);
  await page.goto('https://www.traveloka.com/en-id');
  await page.locator('#navbar-offset svg').nth(1).click();
  await page.getByTestId('auth-username').click();
  await page.getByTestId('auth-username').fill('hafidhsyahputra99@gmail.com');
  await page.getByTestId('auth-password').click();
  await page.getByTestId('auth-password').fill('WErkudoro99');
  await page.getByRole('button', { name: 'Log In' }).click();
  // send otp email manual testing becouse third party email
  // If I pass this stage I will ask for a local repo for testing
  // wait 11 second
  await page.waitForTimeout(11000);
  await page.locator('div').filter({ hasText: /^Car Rental$/ }).nth(1).click();
  await page.getByTestId('rental-search-form-location-input').click();
  await page.getByTestId('rental-search-form-location-input').fill('Jakarta');
  await page.getByLabel('Jakarta', { exact: true }).click();
  await page.getByTestId('rental-search-form-date-input-start').click();
  await page.locator('div:nth-child(19) > div > div > div:nth-child(2) > div:nth-child(2) > .css-901oao').first().click();
  await page.getByTestId('rental-search-form-date-input-end').click();
  await page.locator('div:nth-child(7) > div > div:nth-child(2) > div > div > div > div > div > div > div > div > div:nth-child(3) > div:nth-child(22) > div > div > div:nth-child(2) > div:nth-child(2) > .css-901oao').first().click();
  await page.getByTestId('rental-search-form-time-input-end').click();
  await page.locator('div:nth-child(12) > .css-901oao').click();
  await page.getByRole('button', { name: 'Done' }).click();
  await page.getByTestId('rental-search-form-cta').click();

  await page.locator('div').filter({ hasText: /^FromRp 179\.000\/dayContinueContinue$/ }).getByRole('button').click();
  await page.locator('div').filter({ hasText: /^Rp 716\.000totalRp 179\.000 \/dayContinueContinue1 car\(s\) left$/ }).getByRole('button').click();
  await page.getByRole('radio', { name: 'Rental Office' }).click();
  await page.getByText('Rental Office').nth(2).click();
  await page.locator('div:nth-child(2) > div > div > div > div:nth-child(2) > div > div > div > div > div > div > div > div > div:nth-child(2)').click();
  page.locator('#RENTAL_DROPOFF_LOCATION').getByRole('radio', { name: 'Other Locations' })
  page.locator('#RENTAL_DROPOFF_LOCATION').getByPlaceholder('Search location or address')
  await page.getByLabel('Soekarno Hatta International').nth(3).click();
  await page.getByPlaceholder('Additional notes (optional)').click();
  await page.getByPlaceholder('Additional notes (optional)').fill('testing');
  await page.goto('https://www.traveloka.com/en-id/booking/v2/lcx-12e9b942-bf07-46e5-9de9-1cff21a5310d');
  await page.getByLabel('Full Name*').first().click();
  await page.getByLabel('Full Name*').first().fill('Hafidh Syahputra');
  await page.getByLabel('Phone Number').first().click();
  await page.getByLabel('Phone Number').first().fill('12345235');
  await page.getByLabel('Phone Number').first().press('Tab');
  await page.getByLabel('Email*').fill('seleketep1@yopmail.com');
  await page.getByLabel('Title*').getByRole('combobox').selectOption('MISS');
  await page.locator('#adultForm0').getByLabel('Full Name*').click();
  await page.locator('#adultForm0').getByLabel('Full Name*').fill('Paijo Telo');
  await page.locator('#adultForm0').getByLabel('Full Name*').press('Tab');
  await page.locator('#adultForm0').getByText('Mobile Number*Afghanistan (+').click();
  await page.locator('#adultForm0').getByLabel('Phone Number').fill('123454365');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByPlaceholder('Odd or even license plates,').click();
  await page.getByPlaceholder('Odd or even license plates,').fill('testing');
  await page.getByRole('button', { name: 'Continue to Payment' }).click();
});