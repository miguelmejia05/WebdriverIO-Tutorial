const { expect, assert } = require("chai")
const internetPage = require("../pages/internet.page")

describe("WebdriverIO API actions", function (){
    it("Should show user name when hover", () => {
        browser.url('/')
        internetPage.clickOnLink(25)
        expect(internetPage.getUserNameFromImage(3)).contains("user1")
    })

    it("Should show user name when hover on image 2", () => {
        browser.url('/')
        internetPage.clickOnLink(25)
        expect(internetPage.getUserNameFromImage(4)).contains("user2")
    })

    it("Should show user name when hover on image 3", () => {
        browser.url('/')
        internetPage.clickOnLink(25)
        expect(internetPage.getUserNameFromImage(5)).contains("user3")
    })

    it("Should show the key pressed", () =>{
        browser.url('/')
        internetPage.clickOnLink(31)
        internetPage.sendKeytoTarget("A")
        expect(internetPage.getResultText()).equals("You entered: A")
    })

    it("Should show footer in viewport", () => {
        browser.url('/')
        internetPage.pageHeader.waitForDisplayed()
        internetPage.scrollToPageFooter()
        assert.equal(true, internetPage.pageFooter.isDisplayedInViewport())
    })
})