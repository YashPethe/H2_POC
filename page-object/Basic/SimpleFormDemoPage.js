class SimpleFormDemoPage {

    navigate() {
        browser.url("https://www.seleniumeasy.com/test/basic-first-form-demo.html");
        browser.$("#site-name").waitForDisplayed();
    }

    get singleInputFieldForm() {
        browser.$("#get-input").waitForDisplayed();
        return browser.$("#get-input");
    }

    get enterMessage() {
        this.singleInputFieldForm.$("[placeholder='Please enter your Message']").waitForDisplayed();
        return browser.$("[placeholder='Please enter your Message']");
    }

    get showMessageButton() {
        this.singleInputFieldForm.$("button=Show Message").waitForDisplayed();
        return this.singleInputFieldForm.$("button=Show Message");
    }

    fillSingleInputFields(message) {
        this.enterMessage.setValue(message);
        this.showMessageButton.click();
    }

    get usersMessage() {
        browser.$("#user-message label ~ span").waitForDisplayed();
        return browser.$("#user-message label ~ span");
    }

    get popup() {
        return browser.$("#image-darkener:nth-child(1)");
    }

    cancelPopup() {
        browser.$("#at-cv-lightbox-button-holder a:nth-child(2)").waitForDisplayed();
        browser.$("#at-cv-lightbox-button-holder a:nth-child(2)").click();
    }

    get twoInputFieldForm() {
        browser.$("#gettotal").waitForDisplayed();
        return browser.$("#gettotal");
    }

    get enterA() {
        this.twoInputFieldForm.$("#sum1").waitForDisplayed();
        return this.twoInputFieldForm.$("#sum1");
    }

    get enterB() {
        this.twoInputFieldForm.$("#sum2").waitForDisplayed();
        return this.twoInputFieldForm.$("#sum2");
    }

    get getTotalButton() {
        this.twoInputFieldForm.$("button=Get Total").waitForDisplayed();
        return this.twoInputFieldForm.$("button=Get Total");
    }

    fillTwoInputFields(a, b) {
        this.enterA.setValue(a);
        this.enterB.setValue(b);
        this.getTotalButton.click();
    }

    get total() {
        browser.$("#displayvalue").waitForDisplayed();
        return browser.$("#displayvalue");
    }

}

module.exports = new SimpleFormDemoPage();
