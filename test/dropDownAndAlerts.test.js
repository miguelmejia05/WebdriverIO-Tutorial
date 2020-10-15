const { expect, assert } = require("chai")
const internetPage = require("../pages/internet.page")

describe("Drop down menu and alert test", function (){
    it("Should select from drop down menu", () =>{
        browser.url("/")
        internetPage.clickOnLink(11)
        expect(internetPage.dropDownHeaderValue()).equals("Dropdown List")
        internetPage.clickDropDownMenu()
        internetPage.clickDropDownMenuOption1()
        expect(internetPage.dropDownMenuOption1.isSelected()).equals(true)
        //assert.equal(internetPage.dropDownMenuOption1.isSelected(), true)
    })

    it("Should select option2 from drop down menu", () =>{
        browser.url("/")
        internetPage.clickOnLink(11)
        expect(internetPage.dropDownHeaderValue()).equals("Dropdown List")
        internetPage.clickDropDownMenu()
        internetPage.clickDropDownMenuOption2()
        expect(internetPage.dropDownMenuOption2.isSelected()).equals(true)
        //assert.equal(internetPage.dropDownMenuOption1.isSelected(), true)
    })

    it("Should acept alert", () =>{
        browser.url("/")
        internetPage.clickOnLink(29)
        internetPage.clickJavascriptAlertButton(1)
        expect(browser.getAlertText()).equals("I am a JS Alert")
        browser.acceptAlert()
        expect(internetPage.getJavascriptAlertResultValue()).equals("You successfuly clicked an alert")
    })

    it("Should click Ok on alert", () =>{
        browser.url("/")
        internetPage.clickOnLink(29)
        internetPage.clickJavascriptAlertButton(2)
        expect(browser.getAlertText()).equals("I am a JS Confirm")
        browser.acceptAlert()
        expect(internetPage.getJavascriptAlertResultValue()).equals("You clicked: Ok")
    })

    it("Should click Cancel on alert", () =>{
        browser.url("/")
        internetPage.clickOnLink(29)
        internetPage.clickJavascriptAlertButton(2)
        expect(browser.getAlertText()).equals("I am a JS Confirm")
        browser.dismissAlert()
        expect(internetPage.getJavascriptAlertResultValue()).equals("You clicked: Cancel")
    })
    
    it("Should send text to alert", () =>{
        browser.url("/")
        internetPage.clickOnLink(29)
        internetPage.clickJavascriptAlertButton(3)
        expect(browser.getAlertText()).equals("I am a JS prompt")
        browser.sendAlertText("Hola Mundo!")
        browser.acceptAlert()
        expect(internetPage.getJavascriptAlertResultValue()).equals("You entered: Hola Mundo!")
    })

    it("Should cancel send text to alert", () =>{
        browser.url("/")
        internetPage.clickOnLink(29)
        internetPage.clickJavascriptAlertButton(3)
        expect(browser.getAlertText()).equals("I am a JS prompt")
        browser.dismissAlert()
        expect(internetPage.getJavascriptAlertResultValue()).equals("You entered: null")
    })
})