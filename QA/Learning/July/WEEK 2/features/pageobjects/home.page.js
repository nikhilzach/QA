const Swipe = require('./swipe');

class HomePage {
    get continueButton() { return $("id:in.redbus.android:id/continueButton"); }
    get selectSeat() { return $("-android uiautomator:new UiSelector().className(\"android.widget.TextView\").instance(3)"); }
    get skip() { return $("accessibility id:Skip"); }
    get skipAuth() { return $("id:in.redbus.android.authmodule:id/buttonSkip"); }
    get denyPermission() { return $("id:com.android.permissioncontroller:id/permission_deny_button"); }
   
    get notification(){return $('-android uiautomator:new UiSelector().className("android.view.View").instance(7)')}

    async newUser() {
        await this.continueButton.click();
        await this.selectSeat.click();

        await Swipe.swipe(991, 1060, 96, 1055);
        await Swipe.swipe(977, 1060, 133, 1046);
    }

    async skipall() {
        await this.skip.click();
        await this.skipAuth.click();
        await this.denyPermission.click();
        await this.notification.click();
    }
}

module.exports = new HomePage();
