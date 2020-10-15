const internetPage = require("../pages/internet.page")
describe("Interacting with elements", function(){
    it("Get text for element",() =>{
        browser.url('/')
        let text = $(".heading").getText()
        console.log(text)
        internetPage.getLiText()
        internetPage.getSpecificElementText(3)
    })
    it("Is footer displayed", () =>{
        console.log(internetPage.pageFooter.isDisplayed())
    })
    it("Does the header exists", () =>{
        console.log(internetPage.pageHeader.isExisting())
    })
    it("Is footer in viewport", () =>{
        console.log(internetPage.pageFooter.isDisplayedInViewport())
    })
    it("Is header in viewport", () =>{
        console.log(internetPage.pageHeader.isDisplayedInViewport())
    })
    it("Is subheader enabled", () =>{
        console.log(internetPage.pageHeader.isEnabled())
    })
    it("Click element", () =>{
        internetPage.clickOnLink(1)
    })
})