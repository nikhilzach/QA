class SeatSelectionPage {
        get selectSeat() { return $('id:com.lixar.allegiant:id/select_seat_textview'); }
        get chooseSeat() { return $('//androidx.recyclerview.widget.RecyclerView[@resource-id="com.lixar.allegiant:id/seat_section_recycler"][2]//androidx.cardview.widget.CardView/android.view.ViewGroup'); }
        get confirmSeat() { return $('id:com.lixar.allegiant:id/seatMapSelectButton'); }
        get saveSeat() { return $('id:com.lixar.allegiant:id/save_seats_button'); }
    
        async selectSeatOption() {
            await this.selectSeat.waitForDisplayed();
            await browser.pause(1000)
            await this.selectSeat.click();
            await browser.pause(5000);
            await this.chooseSeat.click();
            await this.confirmSeat.click();
            await browser.pause(4000)
            await this.saveSeat.waitForDisplayed()
            await browser.pause(2000)
            await this.saveSeat.click();
            await browser.pause(2500);
        }
    }
    
    module.exports = new SeatSelectionPage();
    