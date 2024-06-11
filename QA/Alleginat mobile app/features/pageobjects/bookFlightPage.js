class BookFlightPage {
    get bookFlight() { return $('-android uiautomator:new UiSelector().text("Book Flight")'); }
    async clickBookFlight() {
        await this.bookFlight.click();
    }
}

module.exports = new BookFlightPage();
