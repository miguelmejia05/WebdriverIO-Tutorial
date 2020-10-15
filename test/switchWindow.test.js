const { expect, assert } = require("chai")
const internetPage = require("../pages/internet.page")

describe("Switch Window", function (){
    it("Should switch to the next window", () =>{
        browser.url("/")
        internetPage.clickOnLink(33)
        internetPage.openNewTab()
        browser.switchWindow("New Window")
        expect(internetPage.newWindowHeaderText()).equals("New Window")
    })

    it('Should switch to frame', ()=> {
        browser.url("/")
        internetPage.clickOnLink(22)
        internetPage.openIFrame()
        browser.switchToFrame(internetPage.iFrame)
        internetPage.sendTextToBody("Hola Mundo!")
        expect(internetPage.getValueFromBody()).equals("Hola Mundo!")
    })

    it("Should drag and drop", () => {
        browser.url("/")
        internetPage.clickOnLink(10)
        expect(internetPage.getDragAndDropValue()).equals("Drag and Drop")
        internetPage.dragAToB()
        expect(internetPage.getHeaderAValue()).equals("B")
        expect(internetPage.getHeaderBValue()).equals("A")
    })
})