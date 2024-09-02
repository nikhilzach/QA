class SearchPage {
    get viewSource() { return $("-android uiautomator:new UiSelector().resourceId(\"View_source\")"); }
    get sourceField() { return $("-android uiautomator:new UiSelector().className(\"android.widget.EditText\")"); }
    get bangaloreOption() { return $("-android uiautomator:new UiSelector().text(\"Bangalore\")"); }
    get viewDestination() { return $("-android uiautomator:new UiSelector().resourceId(\"View_destination\")"); }
    get hyderabadOption() { return $("-android uiautomator:new UiSelector().text(\"Hyderabad\")"); }
    get journeyDate() { return $("-android uiautomator:new UiSelector().text(\"Date of Journey\")"); }
    get searchButton() { return $("-android uiautomator:new UiSelector().className(\"android.widget.Button\").instance(3)"); }

    async enterJourneyDetails(source, destination, date) {
        await this.viewSource.click();
        await this.sourceField.addValue(source);
        await browser.pause(500);
        await this.bangaloreOption.click();
        await this.viewDestination.click();
        await this.hyderabadOption.click();
        await this.journeyDate.click();
        const dateOption = await $(`-android uiautomator:new UiSelector().text("${date}")`);
        await dateOption.click();
        await this.searchButton.click();
        await browser.pause(10000);
    }
}

module.exports = new SearchPage();
