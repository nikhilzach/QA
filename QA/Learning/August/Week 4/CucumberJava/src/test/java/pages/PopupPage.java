package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class PopupPage {

    WebDriver driver;

    @FindBy(id = "popup-alerts")
    WebElement popupAlertsButton;

    @FindBy(id = "button1")
    WebElement button1;

    @FindBy(id = "button4")
    WebElement button4;

    public PopupPage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }

    public void clickPopupAlerts() {
        popupAlertsButton.click();
    }

    public WebElement getButton1() {
        return button1;
    }

    public WebElement getButton4() {
        return button4;
    }
}
