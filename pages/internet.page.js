class Internet {
    get pageHeader() { return $('h1.heading') }
    get subHeading() { return $('h2') }
    get h3Header() { return $('h3') }
    get pageFooter() { return $('#page-footer') }
    get parent() { return $('ul') }
    get childElements() { return this.parent.$$('li') }
    getLiText() {
        this.childElements.filter((element) => {
            console.log(element.getText())
        })
    }
    specificChildElement(index) { return this.parent.$(`li:nth-child(${index})`) }

    getSpecificElementText(index){
        this.specificChildElement(index).waitForDisplayed()
        return this.specificChildElement(index).getText()
    }

    get firstLink(){
        return $("ul li:nth-child(1) a")
    }
    /**
     * Clicks on the link
     * @param {Number} index the index of the element
     */
    link(index){
        return $(`ul li:nth-child(${index}) a`)
    }

    clickOnFirstLink(){
        if(this.firstLink.isDisplayed() === true){
            this.firstLink.click()
        }
    }

    clickOnLink(index){
        if(this.link(index).isDisplayed() === true){
            this.link(index).click()
        }
    }

    checkboxes(index){
        return $(`#checkboxes input:nth-child(${index})`)
    }

    clickCheckbox(index){
        this.checkboxes(index).waitForDisplayed()
        this.checkboxes(index).click()
    }

    get username(){
        return $("#username")
    }

    get password(){
        return $("#password")
    }
    /**
     * 
     * @param {Text} text the username to login with
     */
    enterUsername(text){
        this.username.waitForDisplayed()
        this.username.setValue(text)
    }
    /**
     * 
     * @param {Text} text the password of the username used
     */
    enterPassword(text){
        this.password.waitForDisplayed()
        this.password.setValue(text)
    }

    get loginButton(){
        return $('button.radius')
    }

    clickLoginButton(){
        this.loginButton.click()
    }

    get secureAreaBanner(){
        return $("#flash")
    }

    loginConfirmation(){
        this.secureAreaBanner.waitForDisplayed()
        return this.secureAreaBanner.getText()
    }
    /**
     * Returns the image of the selected index
     * @param {Number} index The index of the element
     */
    getUserImage(index){
        return $(`div.example div.figure:nth-child(${index}) img`)
    }
    /**
     * Return the details of the selected index
     * @param {Number} index The index of the element
     */
    getUserName(index){
        return $(`div.example div.figure:nth-child(${index}) h5`)
    }
    /**
     * Returns the user name of the selected index
     * @param {Number} index The index of the element
     */
    getUserNameFromImage(index){
        this.getUserImage(index).waitForDisplayed()
        this.getUserImage(index).moveTo()
        this.getUserName(index).waitForDisplayed()
        return this.getUserName(index).getText()
    }

    get target(){
        return $("#target")
    }

    get result(){
        return $("#result")
    }

    clickTarget(){
        this.target.waitForDisplayed()
        this.target.click()
    }
    /**
     * 
     * @param {String} text The keyboard text to be entered
     */
    sendKeytoTarget(text){
        this.clickTarget()
        browser.keys(text)
    }

    getResultText(){
        this.result.waitForDisplayed()
        return(this.result.getText())
    }

    scrollToPageFooter(){
        this.pageFooter.scrollIntoView()
    }

    get newTabLink(){
        return $("div.example a")
    }

    openNewTab(){
        this.newTabLink.waitForDisplayed()
        this.newTabLink.click()
    }

    get newWindowHeader(){
        return $('div.example h3')
    }

    newWindowHeaderText(){
        this.newWindowHeader.waitForDisplayed()
        return this.newWindowHeader.getText()
    }

    get nestedFrameLink(){
        return $("ul li:nth-child(1) a")
    }

    get iFrameLink(){
        return $("ul li:nth-child(2) a")
    }

    openNestedFrame(){
        this.nestedFrameLink.waitForDisplayed()
        this.nestedFrameLink.click()
    }

    openIFrame(){
        this.iFrameLink.waitForDisplayed()
        this.iFrameLink.click()
    }

    get iFrameBody(){
        return $("#tinymce")
    }

    get iFrame(){
        return $("#mce_0_ifr")
    }
    /**
     * Send given text to body element
     * @param {String} Text The value to send to body element
     */
    sendTextToBody(text){
        this.iFrameBody.waitForDisplayed()
        this.iFrameBody.setValue(text)
    }

    getValueFromBody(){
        this.iFrameBody.waitForDisplayed()
        return(this.iFrameBody.getText())
    }

    get dragAndDropHeader(){
        return $(".example h3")
    }

    getDragAndDropValue(){
        this.dragAndDropHeader.waitForDisplayed()
        return(this.dragAndDropHeader.getText())
    }

    get dragAndDropA(){
        return $("#column-a")
    }

    get dragAndDropB(){
        return $("#column-b")
    }

    dragAToB(){
        this.dragAndDropA.waitForDisplayed()
        this.dragAndDropA.dragAndDrop(this.dragAndDropB)
    }

    get dragAndDropAHeader(){
        return $("#column-a header")
    }

    get dragAndDropBHeader(){
        return $("#column-b header")
    }

    getHeaderAValue(){
        this.dragAndDropAHeader.waitForDisplayed()
        return(this.dragAndDropAHeader.getText())
    }

    getHeaderBValue(){
        this.dragAndDropBHeader.waitForDisplayed()
        return(this.dragAndDropBHeader.getText())
    }

    get dropDownHeader(){
        return $(".example h3")
    }

    dropDownHeaderValue(){
        this.dropDownHeader.waitForDisplayed()
        return(this.dropDownHeader.getText())
    }

    get dropDownMenu(){
        return $("#dropdown")
    }

    get dropDownMenuOption1(){
        return $("#dropdown option:nth-child(2)")
    }

    get dropDownMenuOption2(){
        return $("#dropdown option:nth-child(3)")
    }

    clickDropDownMenu(){
        this.dropDownMenu.waitForDisplayed()
        this.dropDownMenu.click()
    }

    clickDropDownMenuOption1(){
        this.dropDownMenuOption1.waitForDisplayed()
        this.dropDownMenuOption1.click()
    }

    clickDropDownMenuOption2(){
        this.dropDownMenuOption2.waitForDisplayed()
        this.dropDownMenuOption2.click()
    }

    javascriptAlertButton(index){
        return $(`ul li:nth-child(${index}) button`)
    }

    clickJavascriptAlertButton(index){
        this.javascriptAlertButton(index).waitForDisplayed()
        this.javascriptAlertButton(index).click()
    }

    get javascriptAlertResult(){
        return $("#result")
    }

    getJavascriptAlertResultValue(){
        this.javascriptAlertResult.waitForDisplayed()
        return(this.javascriptAlertResult.getText())
    }

    get dynamicControlsHeader(){
        return $(".example h4:first-child")
    }

    getDynamicControlsHeaderText(){
        this.dynamicControlsHeader.waitForDisplayed()
        return this.dynamicControlsHeader.getText()
    }

    get enableButton(){
        return $("#input-example button")
    }

    clickEnableButton(){
        this.enableButton.waitForDisplayed()
        this.enableButton.click()
    }

    get enableInput(){
        return $("#input-example input")
    }

    setEnableInput(text){
        this.enableInput.setValue(text)
    }

    getEnableInputText(){
        return(this.enableInput.getValue())
    }

    get enabledMessage(){
        return $("p#message")
    }

    getEnabledMessageValue(){
        this.enabledMessage.waitForDisplayed()
        return(this.enabledMessage.getText())
    }

    get addElementHeader(){
        return $("#content h3")
    }

    getAddElementHeaderValue(){
        this.addElementHeader.waitForDisplayed()
        return(this.addElementHeader.getText())
    }

    get addElementButton(){
        return $(".example button")
    }

    addElementButtonClick(){
        this.addElementButton.waitForDisplayed()
        this.addElementButton.click()
    }

    get addedElementButton(){
        return $("#elements button:first-child")
    }

    addedElementButtonClick(){
        this.addedElementButton.waitForDisplayed()
        this.addedElementButton.click()
    }

    get addRemoveButton(){
        return $("#checkbox-example button")
    }

    addRemoveButtonClick(){
        this.addRemoveButton.waitForDisplayed()
        this.addRemoveButton.click()
    }

    
}
module.exports = new Internet()