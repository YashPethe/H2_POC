const simpleFormDemoPage = require("../../page-object/Basic/SimpleFormDemoPage");


describe("Basic html elements automation demo", () => {
    before(() => {
        simpleFormDemoPage.navigate();
        browser.maximizeWindow();
        if (simpleFormDemoPage.popup) {
            simpleFormDemoPage.cancelPopup();
        }
    });

    it("should display same text which user entered", () => {
        const msg = "User can write something here";
        simpleFormDemoPage.fillSingleInputFields(msg);
        expect(simpleFormDemoPage.usersMessage.getText()).toEqual(msg);
    });

    it("should add value of two input fields", () => {
        simpleFormDemoPage.twoInputFieldForm.scrollIntoView();
        simpleFormDemoPage.fillTwoInputFields(40, 60);
        expect(Number(simpleFormDemoPage.total.getText())).toEqual(100);
    });
});