const { expect } = require("chai")
const internetPage = require("../../pages/internet.page")
const loginData = require("../../data/logindata")

describe("Test element actions", function (){
    it("Should click element",() => {
        browser.url('/')
        internetPage.clickOnFirstLink()
        expect(browser.getUrl()).equals("http://the-internet.herokuapp.com/abtest")
    })
    it("Should get text", () => {
        browser.url('/')
        expect(internetPage.getSpecificElementText(1)).equals('A/B Testing')
    })
    it("Should click checkbox", () => {
        browser.url('/')
        internetPage.clickOnLink(6)
        internetPage.clickCheckbox(1)
        expect(internetPage.checkboxes(1).isSelected()).equals(true)
    })
    it("Should uncheck checkbox", () => {
        browser.url('/')
        internetPage.clickOnLink(6)
        internetPage.clickCheckbox(3)
        expect(internetPage.checkboxes(3).isSelected()).equals(false)
    })
    it("Should login", () => {
        browser.url('/')
        internetPage.clickOnLink(21)
        internetPage.enterUsername(loginData.userName)
        internetPage.enterPassword(loginData.password)
        internetPage.clickLoginButton()
        expect(internetPage.loginConfirmation()).contains("You logged into a secure area!")
    })
})