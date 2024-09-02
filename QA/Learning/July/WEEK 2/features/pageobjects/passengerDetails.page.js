const Swipe = require('./swipe');

class PassengerDetailsPage {
    get email() { return $("-android uiautomator:new UiSelector().className(\"android.widget.EditText\").instance(0)"); }
    get phone() { return $("-android uiautomator:new UiSelector().className(\"android.widget.EditText\").instance(1)"); }
    get name() { return $("-android uiautomator:new UiSelector().className(\"android.widget.EditText\").instance(0)"); }
    get age() { return $("-android uiautomator:new UiSelector().className(\"android.widget.EditText\").instance(1)"); }
    get gender() { return $("-android uiautomator:new UiSelector().text(\"Male\")"); }
    get passengerName() { return $("-android uiautomator:new UiSelector().className(\"android.widget.EditText\").instance(2)"); }
    get passengerAge() { return $("-android uiautomator:new UiSelector().className(\"android.widget.EditText\").instance(3)"); }
    get passengerGender(){return $("-android uiautomator:new UiSelector().text(\"Male\").instance(1)")}
    get proceed() { return $("-android uiautomator:new UiSelector().className(\"android.view.View\").instance(13)"); }
    get payment() { return $("-android uiautomator:new UiSelector().className(\"android.widget.RadioButton\").instance(0)"); }
    get confirmBooking() { return $("-android uiautomator:new UiSelector().className(\"android.widget.Button\").instance(1)"); }
    get paymentMethod() { return $("-android uiautomator:new UiSelector().className(\"android.widget.RadioButton\").instance(0)"); }
    get goBack() { return $("accessibility id:Go back to previous page"); }
    get proceedToPayment() { return $("-android uiautomator:new UiSelector().className(\"android.widget.Button\").instance(1)"); }

    async enterPassengerDetails(details) {
        await this.email.addValue(details.email);
        await this.phone.addValue(details.phone);
        await Swipe.swipe(509, 2019, 514, 41);
        await this.name.addValue(details.name);
        await this.age.addValue(details.age);
        await browser.pause(1000);
        await this.gender.click();
        await this.passengerName.addValue(details.passengerName);
        await this.passengerAge.addValue(details.passengerAge);
        await this.passengerGender.click()
        await this.proceed.click();
        await Swipe.swipe(533, 1906, 550, 403);
    }

    async makePayment() {
        await this.payment.click();
        await this.confirmBooking.click();
        await this.paymentMethod.click();
        await browser.pause(3000);
        await this.goBack.click();
        await this.proceedToPayment.click();
        await Swipe.swipe(621, 2370, 630, 991);
    }
}

module.exports = new PassengerDetailsPage();
