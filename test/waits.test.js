const { expect, assert } = require("chai")
const internetPage = require("../pages/internet.page")

describe("Test the wait strategies", function (){

    beforeEach(() => {
        browser.url("/")
     });

    it.skip("Should wait for enabled", () =>{
        internetPage.clickOnLink(13)
        expect(internetPage.getDynamicControlsHeaderText()).equals("Dynamic Controls")
        internetPage.clickEnableButton()
        internetPage.enableInput.waitForEnabled()
        assert.equal(internetPage.enableInput.isEnabled(), true)
        internetPage.setEnableInput("Hola Mundo!")
        expect(internetPage.getEnableInputText()).equals("Hola Mundo!")
        expect(internetPage.getEnabledMessageValue()).equals("It's enabled!")
    })

    it.skip("Should wait for disabled", () =>{
        internetPage.clickOnLink(13)
        expect(internetPage.getDynamicControlsHeaderText()).equals("Dynamic Controls")
        internetPage.clickEnableButton()
        internetPage.enableInput.waitForEnabled()
        internetPage.setEnableInput("Hola Mundo!")
        internetPage.clickEnableButton()
        internetPage.enableInput.waitForEnabled({ reverse: true })
        assert.equal(internetPage.enableInput.isEnabled(), false)
        expect(internetPage.getEnableInputText()).equals("Hola Mundo!")
        expect(internetPage.getEnabledMessageValue()).equals("It's disabled!")
    })

    it("Should wait for exist", () =>{
        internetPage.clickOnLink(2)
        expect(internetPage.getAddElementHeaderValue()).equals("Add/Remove Elements")
        internetPage.addElementButtonClick()
        internetPage.addedElementButton.waitForExist()
        expect(internetPage.addedElementButton.isExisting()).equals(true)
        internetPage.addedElementButtonClick()
        internetPage.addedElementButton.waitForExist({ reverse: true })
        expect(internetPage.addedElementButton.isExisting()).equals(false)
    })

    it("Should wait until the button changes", () =>{
        internetPage.clickOnLink(13)
        expect(internetPage.getDynamicControlsHeaderText()).equals("Dynamic Controls")
        internetPage.addRemoveButtonClick()
        browser.waitUntil(() =>{
            return internetPage.addRemoveButton.getText() === "Add"
        }, 6000, "Expect button text to change")
        expect(internetPage.addRemoveButton.getText()).equals("Add")
        internetPage.addRemoveButtonClick()
        browser.waitUntil(() =>{
            return internetPage.addRemoveButton.getText() === "Remove"
        }, 6000, "Expect button text to change")
        expect(internetPage.addRemoveButton.getText()).equals("Remove")
    })
})