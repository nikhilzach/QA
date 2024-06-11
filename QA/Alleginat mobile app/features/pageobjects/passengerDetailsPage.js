const Swipe = require('../pageobjects/swipe');

class PassengerDetailsPage {
    get selectSeats() { return $('id:com.lixar.allegiant:id/select_seats_button'); }
    get editPassenger() { return $('id:com.lixar.allegiant:id/edit'); }
    get firstName() { return $('id:com.lixar.allegiant:id/firstName'); }
    get lastName() { return $('id:com.lixar.allegiant:id/lastName'); }
    get contactInfoIcon() { return $('-android uiautomator:new UiSelector().resourceId("com.lixar.allegiant:id/text_input_end_icon").instance(1)'); }
    get contactInfo() { return $('id:com.lixar.allegiant:id/contactInformationLabel'); }
    get dob() { return $('id:com.lixar.allegiant:id/dateOfBirth'); }
    get birthYear() { return $('-android uiautomator:new UiSelector().text("2002")'); }
    get prevMonth() { return $('accessibility id:Previous month'); }
    get nextMonth() { return $('accessibility id:Next month'); }
    get birthDate() { return $('accessibility id:28 March 2002'); }
    get saveDOB() { return $('id:android:id/button1'); }
    get genderDropdown() { return $('-android uiautomator:new UiSelector().description("Show drop-down menu").instance(2)'); }
    get phoneNumber() { return $('id:com.lixar.allegiant:id/phoneNumber'); }
    get email() { return $('id:com.lixar.allegiant:id/email'); }
    get saveContact() { return $('accessibility id:Save'); }

    async selectSeatsOption() {
        await this.selectSeats.click();
        await this.editPassenger.click();
    }

    async enterPassengerDetails(firstNameValue, lastNameValue) {
        await this.firstName.addValue(firstNameValue);
        await this.lastName.click();
        await this.lastName.addValue(lastNameValue);
    }

    async selectContactInfo() {
        await this.contactInfoIcon.click();
        await this.contactInfo.click();
    }

    async selectDateOfBirth() {
        await this.dob.click();
        await browser.pause(500)
        await Swipe.swipe(537, 934, 532, 1636);
        await browser.pause(3000);
        await Swipe.swipe(550, 873, 545, 2225);
        await this.birthYear.click();
        await this.prevMonth.click();
        await this.prevMonth.click();
        await this.prevMonth.click();
        await this.prevMonth.click();
        await this.prevMonth.click();
        await this.nextMonth.click();
        await this.birthDate.click();
        await this.saveDOB.click();
    }

    async selectGender() {
        await this.genderDropdown.click();
        await Swipe.swipe(227, 1510, 231, 201);
        await Swipe.swipe(201, 1501, 201, 31);
        await Swipe.tap(602, 1628);
    }

    async enterContactDetails(phoneValue, emailValue) {
        await this.phoneNumber.addValue(phoneValue);
        await this.email.addValue(emailValue);
        await this.saveContact.click();
        await driver.$("id:com.lixar.allegiant:id/selectFlightButton").click();
        await browser.pause(10000)
    }
}

module.exports = new PassengerDetailsPage();
