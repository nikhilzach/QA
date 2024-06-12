class SelectFlightPage {

    async selectFlightOption() {
        await browser.pause(2000)
        await $('id:com.lixar.allegiant:id/selectFlightButton').waitForDisplayed();
        await $('id:com.lixar.allegiant:id/selectFlightButton').click();
        await browser.pause(3000);
        console.log("Second button")
        await $('id:com.lixar.allegiant:id/selectFlightButton').waitForDisplayed()
        await browser.pause(1000)
        await $('id:com.lixar.allegiant:id/selectFlightButton').click();
        await browser.pause(2000);
    }
}

module.exports = new SelectFlightPage();
