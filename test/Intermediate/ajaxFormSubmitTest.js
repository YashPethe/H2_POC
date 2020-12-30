const ajaxFormSubmitPage = require("../../page-object/Intermediate/AjaxFormSubmitPage");

describe("Intermediate html elements automation demo", () => {
    before(() => {
        ajaxFormSubmitPage.navigate();
        browser.maximizeWindow();
        if (ajaxFormSubmitPage.popup.isExisting()) {
            ajaxFormSubmitPage.cancelPopup();
        }
    });

    it("should submit ajax form", () => {
        const name = "Ajax form user";
        const comment = "This is examination form";
        ajaxFormSubmitPage.submitAjaxForm(name, comment);
        browser.waitUntil(() => (ajaxFormSubmitPage.successMsg.getText() === "Form submited Successfully!"));
        expect(ajaxFormSubmitPage.successMsg.getText()).toEqual("Form submited Successfully!");
    });

});