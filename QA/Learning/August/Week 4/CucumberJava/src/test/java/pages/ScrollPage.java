package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ScrollPage {

    WebDriver driver;

    @FindBy(id = "scrolling-around")
    WebElement scrollingAroundButton;

    @FindBy(id = "main-header")
    WebElement mainHeader;

    @FindBy(id = "zone1")
    WebElement zone1;

    @FindBy(id = "zone2-entries")
    WebElement zone2Entries;

    public ScrollPage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }

    public void clickScrollingAround() {
        scrollingAroundButton.click();
    }

    public WebElement getMainHeader() {
        return mainHeader;
    }

    public WebElement getZone1() {
        return zone1;
    }

    public WebElement getZone2Entries() {
        return zone2Entries;
    }
}
