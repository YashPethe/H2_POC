class AjaxFormSubmitPage {

    navigate() {
        browser.url("https://www.seleniumeasy.com/test/ajax-form-submit-demo.html");
        browser.$("#site-name").waitForDisplayed();
    }

    get popup() {
        return browser.$("#image-darkener:nth-child(1)");
    }

    cancelPopup() {
        browser.$("#at-cv-lightbox-button-holder a:nth-child(2)").waitForDisplayed();
        browser.$("#at-cv-lightbox-button-holder a:nth-child(2)").click();
    }

    get ajaxFormNameInput() {
        browser.$("#frm input[name='title']").waitForDisplayed();
        return browser.$("#frm input[name='title']");
    }

    get ajaxFormcomment() {
        browser.$("#frm textarea").waitForDisplayed();
        return browser.$("#frm textarea");
    }

    get submitButton() {
        return browser.$("#frm #submit-control input");
    }

    get successMsg() {
        browser.$("#frm #submit-control").waitForDisplayed();
        return browser.$("#frm #submit-control");
    }

    submitAjaxForm(name, comment) {
        this.ajaxFormNameInput.setValue(name);
        this.ajaxFormcomment.setValue(comment);
        this.submitButton.click();
    }
}
module.exports = new AjaxFormSubmitPage();
