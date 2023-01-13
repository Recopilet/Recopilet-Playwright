import { test, expect } from '@playwright/test'

import { LoginPO } from '../pageObjeect/LoginPO'
import { FundingSourcePO } from '../pageObjeect/FundingSourcePO'

import { AccountData } from '../pageData/commonData'

test.describe('Add bank account functionality', () => {
  test('Verify that user successfully add bank account', async ({ page }) => {
    const Login = new LoginPO(page)
    const Funding = new FundingSourcePO(page)

    // Step 1: Login into the website
    await Login.loginIntoTheApplication()

    // Step 2: Verify the app logo is displayed
    await Login.verifyApplicationLogoIsDisplayed()

    // Step 3: Click on the funding source option from the side bar
     Funding.clickOnFundingSource()

    //Step 4: Click on add account button
    await Funding.clickOnAddAccountButton()

    // Step 5: Add bank account details
    await Funding.addBankAccountDetails()

    //Step 6: Verify Add account data
    const actualInstituteName = await Funding.getTextOfInstituteName()
    const actualLastFourDigit = await (await Funding.getTextOfLastFourDigit()).split("(")[1].replace(/[^\d]/g, "").trim()
    const actualAmount = await (await Funding.getTextOfAmount()).replace(/[^\d]/g, "").trim()

    
    expect(actualInstituteName).toBe(AccountData.instituteName)
    expect(actualLastFourDigit).toBe(AccountData.fourDigit)
    expect(actualAmount).toBe(AccountData.amount)
  })
})
