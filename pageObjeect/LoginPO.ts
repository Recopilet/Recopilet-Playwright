import { Locator, Page } from "@playwright/test"
import {loginData} from '../pageData/commonData'

export class LoginPO {
    page:Page
    appLogo:Locator
    signInIntoAccountButton:Locator
    passwordTextBox:Locator
    emailTextBox:Locator


    constructor(page:Page) {
        this.page =page
        this.emailTextBox =page.locator("#txt-login-email")
        this.passwordTextBox =page.locator("#txt-login-password")
        this.signInIntoAccountButton =page.locator("button[data-cy='button-sign-in']")
        this.appLogo =page.locator("svg[id^='Layer']")

    }

    /**
     * Login into the application
     */
    async loginIntoTheApplication() {
        await this.page.goto("/")
        await this.emailTextBox.type(loginData.email)
        await this.passwordTextBox.type(loginData.password)
        await this.signInIntoAccountButton.click()        
    }

    async verifyApplicationLogoIsDisplayed() {
       await  this.page.waitForSelector("svg[id^='Layer']")
        const appLogo=await this.page.isVisible("svg[id^='Layer']")
        console.log("App logo value is: "+appLogo)
        return appLogo
    }

    
}

