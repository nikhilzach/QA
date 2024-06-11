class FlightDetailsPage {
    get departure() { return $('id:com.lixar.allegiant:id/editTextLayout'); }
    get departureOption() { return $('-android uiautomator:new UiSelector().text("Bellingham, WA / Vancouver, BC (BLI)")'); }
    get destination() { return $('id:com.lixar.allegiant:id/destinationEditTextLayout'); }
    get destinationOption() { return $('-android uiautomator:new UiSelector().text("Palm Springs, CA (PSP)")'); }
    get oneWay() { return $('accessibility id:one way'); }
    get departingCalendar() { return $('id:com.lixar.allegiant:id/departing_calendar_icon'); }
    get departureDate() { return $('-android uiautomator:new UiSelector().resourceId("com.lixar.allegiant:id/squareBgView").instance(17)'); }
    get saveDate() { return $('accessibility id:Save'); }
    get search() { return $('id:com.lixar.allegiant:id/search_button'); }

    async enterDepartureLocation() {
        await this.departure.click();
        await this.departureOption.click();
    }

    async enterDestinationLocation() {
        await this.destination.click();
        await this.destinationOption.click();
    }

    async selectOneWay() {
        await this.oneWay.click();
    }

    async selectDepartureDate() {
        await this.departingCalendar.click();
        await this.departureDate.click();
        await this.saveDate.click();
    }

    async searchFlights() {
        await this.search.click();
    }
}

module.exports = new FlightDetailsPage();
