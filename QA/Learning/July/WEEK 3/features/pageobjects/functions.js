class functions{
    async randomfunc(){
    
      async function swipe(startX, startY, endX, endY) {
        await browser.performActions([{
            type: 'pointer',
            id: 'finger1',
            parameters: { pointerType: 'touch' },
            actions: [
                { type: 'pointerMove', duration: 0, x: startX, y: startY },
                { type: 'pointerDown', button: 0 },
                { type: 'pointerMove', duration: 1000, x: endX, y: endY },
                { type: 'pointerUp', button: 0 }
            ]
        }]);
        await browser.releaseActions();
    }
    
    const el1 = await driver.$("id:in.redbus.android:id/continueButton");
    await el1.click();
    const el2 = await driver.$("-android uiautomator:new UiSelector().className(\"android.widget.TextView\").instance(3)");
    await el2.click();
    const el3 = await driver.$("accessibility id:Skip");
    await el3.click();
    const el4 = await driver.$("id:in.redbus.android.authmodule:id/buttonSkip");
    await el4.click();
    const el5 = await driver.$("id:com.android.permissioncontroller:id/permission_deny_button");
    await el5.click();
    const el6 = await driver.$("-android uiautomator:new UiSelector().resourceId(\"View_source\")");
    await el6.click();
    const el7 = await driver.$("-android uiautomator:new UiSelector().text(\"Bangalore\")");
    await el7.click();
    const el8 = await driver.$("-android uiautomator:new UiSelector().resourceId(\"View_destination\")");
    await el8.click();
    const el9 = await driver.$("-android uiautomator:new UiSelector().text(\"Hyderabad\")");
    await el9.click();
    const el10 = await driver.$("-android uiautomator:new UiSelector().text(\"Tue 16-Jul\")");
    await el10.click();
    const el11 = await driver.$("-android uiautomator:new UiSelector().text(\"31\")");
    await el11.click();
    const el12 = await driver.$("-android uiautomator:new UiSelector().className(\"android.widget.Button\").instance(3)");
    await el12.click();
    const el13 = await driver.$("-android uiautomator:new UiSelector().resourceId(\"SrpTuple_27093543\")");
    await el13.click();
    await driver.touchAction({
    action: 'tap', x: 345, y: 1143
    });
    await driver.touchAction({
    action: 'tap', x: 342, y: 1143
    });
    await driver.touchAction({
    action: 'tap', x: 351, y: 1157
    });
    await driver.touchAction({
    action: 'tap', x: 456, y: 1168
    });
    const el14 = await driver.$("-android uiautomator:new UiSelector().text(\"Select boarding & dropping points\")");
    await el14.click();
    const el15 = await driver.$("-android uiautomator:new UiSelector().className(\"android.widget.RadioButton\").instance(2)");
    await el15.click();
    const el16 = await driver.$("-android uiautomator:new UiSelector().className(\"android.widget.RadioButton\").instance(1)");
    await el16.click();
    const el17 = await driver.$("-android uiautomator:new UiSelector().className(\"android.widget.EditText\").instance(0)");
    await el17.click();
    await el17.addValue("Nikhil@gmail.com");

    await swipe(1080,1381,851,1378)

    const el18 = await driver.$("-android uiautomator:new UiSelector().className(\"android.widget.EditText\").instance(1)");
    await el18.addValue("675678766");
    await el18.addValue("6756787665");
    await swipe(544,1839,550,812)

    const el19 = await driver.$("-android uiautomator:new UiSelector().className(\"android.widget.EditText\").instance(0)");
    await el19.addValue("Nikhil");
    const el20 = await driver.$("-android uiautomator:new UiSelector().className(\"android.widget.EditText\").instance(1)");
    await el20.addValue("22");
    const el21 = await driver.$("-android uiautomator:new UiSelector().className(\"android.view.View\").instance(7)");
    await el21.click();
    const el22 = await driver.$("-android uiautomator:new UiSelector().className(\"android.widget.EditText\").instance(2)");
    await el22.addValue("John");
    const el24 = await driver.$("-android uiautomator:new UiSelector().className(\"android.widget.EditText\").instance(3)");
    await el24.addValue("24");
    const el25 = await driver.$("-android uiautomator:new UiSelector().className(\"android.view.View\").instance(13)");
    await el25.click();
    await swipe(533,1906,550,403)

    const el26 = await driver.$("-android uiautomator:new UiSelector().className(\"android.widget.RadioButton\").instance(0)");
    await el26.click();
    const el27 = await driver.$("-android uiautomator:new UiSelector().className(\"android.widget.Button\").instance(1)");
    await el27.click();
    const el29 = await driver.$("-android uiautomator:new UiSelector().className(\"android.widget.RadioButton\").instance(0)");
    await el29.click();
    const el30 = await driver.$("accessibility id:Go back to previous page");
    await el30.click();
    const el31 = await driver.$("-android uiautomator:new UiSelector().className(\"android.widget.Button\").instance(1)");
    await el31.click();
    await swipe(621,2370,630,991)
    }
}

module.exports=new functions();