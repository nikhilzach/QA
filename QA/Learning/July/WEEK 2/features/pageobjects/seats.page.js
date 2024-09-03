const Swipe = require('./swipe');


class SeatsPage {
    get ksmRoadways() { return $("-android uiautomator:new UiSelector().text(\"KSM Roadways\")"); }
    get boardingDropping() { return $("-android uiautomator:new UiSelector().text(\"Select boarding & dropping points\")"); }
    get boarding() { return $("-android uiautomator:new UiSelector().className(\"android.widget.RadioButton\").instance(2)"); }
    get dropping() { return $("-android uiautomator:new UiSelector().className(\"android.widget.RadioButton\").instance(1)"); }

    async selectSeatsUntilDisplayed() {
        const firstRowCoords = [
            { x: 156, y: 936 },
            { x: 340, y: 936 },
            { x: 440, y: 936 }
        ];
        const yOffset = 1138 - 936;
        const numRows = 5;
        const seatCoordinates = [];
        let selectedSeatCoords = [];
        let i = 0;

        for (let row = 0; row < numRows; row++) {
            for (const coord of firstRowCoords) {
                seatCoordinates.push({ x: coord.x, y: coord.y + row * yOffset });
            }
        }

        for (const coordinates of seatCoordinates) {
            if (i == 2) break;
            await Swipe.tap(coordinates.x, coordinates.y);

            let isElementDisplayed;
            isElementDisplayed = await $('-android uiautomator:new UiSelector().text("Select boarding & dropping points")').isDisplayed();

            if (isElementDisplayed) {
                console.log('Desired element is displayed. Stopping the loop.');
                selectedSeatCoords.push({ x: coordinates.x, y: coordinates.y });
                await Swipe.tap(coordinates.x, coordinates.y)
                i++;
            }
            await browser.pause(1000);
        }

        await Swipe.tap(selectedSeatCoords[0].x, selectedSeatCoords[0].y);
        await browser.pause(2000);
        console.log("Seat 1");
        await Swipe.tap(selectedSeatCoords[1].x, selectedSeatCoords[1].y);
        console.log("Seat 2");
    }

    async selectBoardingDroppingPoints() {
        await this.boardingDropping.click();
        await this.boarding.click();
        await this.dropping.click();
    }
}

module.exports = new SeatsPage();
