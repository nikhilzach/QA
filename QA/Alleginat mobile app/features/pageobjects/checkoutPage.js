const Swipe = require('../pageobjects/swipe');

class CheckoutPage {
    get addBag() { return $('-android uiautomator:new UiSelector().resourceId("com.lixar.allegiant:id/increment").instance(0)'); }
    get incrementBag() { return $('accessibility id:Increment'); }
    get checkout() { return $('id:com.lixar.allegiant:id/checkoutButton'); }
    get continueButton() { return $('-android uiautomator:new UiSelector().text("CONTINUE")'); }
    get searchHotel() { return $('-android uiautomator:new UiSelector().resourceId("com.lixar.allegiant:id/search_hotel_button").instance(0)'); }
    get selectRoom() { return $('id:com.lixar.allegiant:id/room_list_action_select_room'); }
    get continueRoom() { return $('id:com.lixar.allegiant:id/action_rooms_continue'); }
    get roomPrice() { return $('-android uiautomator:new UiSelector().text("$324.54")'); }
    get confirmContinue() { return $('id:com.lixar.allegiant:id/continueButton'); }
    get purchaseTrip() { return $('id:com.lixar.allegiant:id/purchaseTripButton'); }
    get paymentMethod() { return $('id:com.lixar.allegiant:id/paymentMethodChevron'); }
    get cardNumber() { return $('id:com.lixar.allegiant:id/cardNumberTextField'); }
    get cardIcon() { return $('-android uiautomator:new UiSelector().resourceId("com.lixar.allegiant:id/text_input_end_icon").instance(0)'); }
    get cardFrame() { return $('-android uiautomator:new UiSelector().className("android.widget.FrameLayout").instance(16)'); }
    get cardView() { return $('-android uiautomator:new UiSelector().className("android.view.View").instance(0)'); }
    get cvv() { return $('id:com.lixar.allegiant:id/cvvField'); }
    get savePayment() { return $('accessibility id:Save'); }
    get cardEndIcon() { return $('-android uiautomator:new UiSelector().resourceId("com.lixar.allegiant:id/text_input_end_icon").instance(1)'); }
    get expiryYear() { return $('id:com.lixar.allegiant:id/yearDropdown'); }
    get saveCard() { return $('accessibility id:Save'); }
    get finalizePurchase() { return $('id:com.lixar.allegiant:id/purchaseTripButton'); }
    get billingAddress() { return $('id:com.lixar.allegiant:id/billingAddressChevron'); }
    get address() { return $('id:com.lixar.allegiant:id/addressTextField'); }
    get apartment() { return $('id:com.lixar.allegiant:id/apartmentNumberTextField'); }
    get city() { return $('id:com.lixar.allegiant:id/cityTextField'); }
    get postalCode() { return $('id:com.lixar.allegiant:id/zipCodeTextField'); }
    get finalPhoneNumber() { return $('id:com.lixar.allegiant:id/phoneNumber'); }
    get saveAddress() { return $('accessibility id:Save'); }
    get agreement() { return $('id:com.lixar.allegiant:id/agreementCheckBox'); }
    get finalConfirmation() { return $('id:android:id/button1'); }
    get state() { return $('-android uiautomator:new UiSelector().resourceId(\"com.lixar.allegiant:id/text_input_end_icon\").instance(2)');}
    get finalEmail() { return $("id:com.lixar.allegiant:id/email")  }

    async addBaggage() {
        await this.addBag.click();
        await this.addBag.click();
        await Swipe.swipe(554, 1759, 545, 833);
        await this.incrementBag.click();
        await Swipe.swipe(615, 1977, 628, 624);
        await Swipe.swipe(441, 1977, 436, 375);
    }

    async proceedToCheckout() {
        await this.checkout.click();
        await browser.pause(4000);
        await this.continueButton.click();
        await browser.pause(8000);
        await Swipe.swipe(576, 1876, 554, 637);
    }

    async searchHotelRoom() {
        await this.searchHotel.click();
        await Swipe.swipe(554, 1907, 559, 371);
        await this.selectRoom.click();
        await this.continueRoom.click();
    }

    async confirmRoomPrice() {
        await this.roomPrice.click();
        await this.confirmContinue.click();
        await this.purchaseTrip.click();
        await browser.pause(1000)
    }

    async enterPaymentDetails(cardNumberValue, cvvValue, expiryYearValue) {
        await Swipe.swipe(554, 1807, 537, 48);
        await this.paymentMethod.click();
        await this.cardNumber.click();
        await this.cardNumber.addValue(cardNumberValue);
        await this.cardIcon.click();
        await this.cardFrame.click();
        await this.cardView.click();
        await this.cvv.addValue(cvvValue);
        await this.savePayment.click();
        await this.cardEndIcon.click();
        const els1 = await driver.$$("xpath://*[text()=\"2026\"]");
        await this.expiryYear.addValue(expiryYearValue);
        await this.saveCard.click();
        await browser.pause(500)
        await this.finalizePurchase.click();
        await browser.pause(1000)
        await Swipe.swipe(497, 1702, 502, 170);
    }

    async enterBillingAddress(addressValue, apartmentValue, cityValue, postalCodeValue, phoneValue) {
        await this.billingAddress.click();
        await this.address.addValue(addressValue);
        await this.apartment.addValue(apartmentValue);
        await this.city.addValue(cityValue);
        await browser.pause(1000)
        await this.state.click();
        await browser.pause(1000)
        await Swipe.tap(754,933);
        await this.postalCode.addValue(postalCodeValue);
        await driver.pressKeyCode(4);
        await this.finalPhoneNumber.addValue(phoneValue);
        await this.saveAddress.click();
    }

    async finalizePurchaseDetails(finalEmailValue) {
        await this.finalizePurchase.click();
        await this.finalEmail.addValue(finalEmailValue);
        await this.finalizePurchase.click();
        await this.agreement.click();
        await this.finalizePurchase.click();
        await browser.pause(7000);
        await this.finalConfirmation.click();
        await Swipe.swipe(541, 2378, 545, 170);
    }
}

module.exports = new CheckoutPage();
