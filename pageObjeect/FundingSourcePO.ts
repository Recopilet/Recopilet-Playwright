import { Locator, Page } from '@playwright/test'
import { AccountData } from '../pageData/commonData'

export class FundingSourcePO {
  page: Page
  navigationElementList: Locator
  addAccountButton: Locator
  instituteNameTextBox: Locator
  streetNameTextBox: Locator
  unitTextBox: Locator
  cityTextBox: Locator
  stateDropdown: Locator
  selectState: Locator
  zipCodeTextBox: Locator
  nextButton: Locator
  accountNameTextBox: Locator
  lastFourDigit: Locator
  qualifiedButton: Locator
  typeDropDown: Locator
  selectType: Locator
  subTypeDropDown: Locator
  amountTextBox: Locator
  addBankAccountButton: Locator
  getInstituteName: Locator
  getAmount: Locator
  getLastFourDigit: Locator

  constructor(page: Page) {
    this.page = page
    this.navigationElementList = page.locator(
      "nav[aria-label='Sidebar'] >div:first-child >button"
    )
    this.addAccountButton = page.locator(
      "[data-cy='btn-funding-sources-show-manual-entry']"
    )
    this.instituteNameTextBox = page.locator("[data-cy='txt-institution-name']")
    this.streetNameTextBox = page.locator("[data-cy='txt-address-street']")
    this.unitTextBox = page.locator("[data-cy='txt-address-unit']")
    this.cityTextBox = page.locator("[data-cy='txt-address-city']")
    this.stateDropdown = page.locator("[data-cy='select-address-state']")
    this.selectState = page.locator("ul[role='listbox']> li:nth-child(1)")
    this.zipCodeTextBox = page.locator("[data-cy='txt-address-zip']")
    this.nextButton = page.locator('#btn-bank-account-wizard-next')
    this.accountNameTextBox = page.locator(
      '#institution-info-form > div > div:nth-child(1) input'
    )
    this.lastFourDigit = page.locator(
      '#institution-info-form > div > div:nth-child(2) input'
    )
    this.qualifiedButton = page.locator(
      '#institution-info-form > div > div:nth-child(3)  > label  >span:last-child'
    )
    this.typeDropDown = page.locator('#select-account-type')
    this.selectType = page.locator("li[data-value='Investment']")
    this.subTypeDropDown = page.locator('#select-account-subtype')
    this.amountTextBox = page.locator(
      '#institution-info-form > div > div:nth-child(6) input'
    )
    this.addBankAccountButton = page.locator('#btn-bank-account-wizard-finish')
    this.getInstituteName = page.locator(
      'table > tbody  > tr:nth-child(1) > td:nth-child(2) > p:nth-child(1)'
    )
    this.getAmount = page.locator(
      'table > tbody  > tr:nth-child(1) > td:nth-child(4) > span'
    )
    this.getLastFourDigit = page.locator(
      'table > tbody  > tr:nth-child(1) > td:nth-child(2) > p:nth-child(2)'
    )
  }

  async clickOnFundingSource() {
    await this.page
      .locator("//nav[@aria-label='Sidebar']/div[1]/button[2]")
      .click()
  }

  async clickOnAddAccountButton() {
    await this.addAccountButton.click()
  }

  async addBankAccountDetails() {
    await this.instituteNameTextBox.type(AccountData.instituteName, {
      delay:50
    })
    await this.streetNameTextBox.click()
    await this.streetNameTextBox.type(AccountData.streetName)
    await this.unitTextBox.click()
    await this.unitTextBox.type(AccountData.unit)
    await this.cityTextBox.click()
    await this.cityTextBox.type(AccountData.cityName)
    await this.stateDropdown.click()
    await this.selectState.click()
    await this.zipCodeTextBox.type(AccountData.zipCode)
    await this.nextButton.click()
    await this.accountNameTextBox.type(AccountData.accountName)
    await this.lastFourDigit.type(AccountData.fourDigit)
    await this.qualifiedButton.click()
    await this.typeDropDown.click()
    await this.selectType.click()
    await this.subTypeDropDown.click()
    await this.selectType.click()
    await this.amountTextBox.type(AccountData.amount)
    await this.addBankAccountButton.click()
    await this.page.waitForTimeout(2000)
  }
  async getTextOfInstituteName() {
    return await this.getInstituteName.innerText()
  }

  async getTextOfAmount() {
    return await this.getAmount.innerText()
  }

  async getTextOfLastFourDigit() {
    return await this.getLastFourDigit.innerText()
  }
}
