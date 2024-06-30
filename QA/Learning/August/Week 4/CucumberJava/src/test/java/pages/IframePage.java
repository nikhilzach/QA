package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class IframePage {

    WebDriver driver;

    @FindBy(id = "iframe")
    WebElement iframeButton;

    @FindBy(id = "nav-title")
    WebElement navTitle;

    @FindBy(xpath = "//*[@data-slide='next']")
    WebElement nextSlideButton;

    @FindBy(name = "first_name")
    WebElement firstNameField;

    @FindBy(name = "last_name")
    WebElement lastNameField;

    @FindBy(name = "email")
    WebElement emailField;

    @FindBy(name = "message")
    WebElement messageField;

    @FindBy(xpath = "//*[@value='SUBMIT']")
    WebElement submitButton;

    public IframePage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }

    public void clickIframeButton() {
        iframeButton.click();
    }

    public WebElement getNavTitle() {
        return navTitle;
    }

    public WebElement getNextSlideButton() {
        return nextSlideButton;
    }

    public WebElement getFirstNameField() {
        return firstNameField;
    }

    public WebElement getLastNameField() {
        return lastNameField;
    }

    public WebElement getEmailField() {
        return emailField;
    }

    public WebElement getMessageField() {
        return messageField;
    }

    public WebElement getSubmitButton() {
        return submitButton;
    }
}
