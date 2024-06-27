package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ActionsPage {

    WebDriver driver;

    @FindBy(id = "draggable")
    WebElement draggableElement;

    @FindBy(id = "droppable")
    WebElement droppableElement;

    @FindBy(id = "double-click")
    WebElement doubleClickButton;

    @FindBy(id = "click-box")
    WebElement clickBox;

    @FindBy(xpath = "//*[text()='Hover Over Me First!']")
    WebElement hoverFirstButton;

    @FindBy(xpath = "//*[text()='Hover Over Me Second!']")
    WebElement hoverSecondButton;

    @FindBy(xpath = "//*[text()='Hover Over Me Third!']")
    WebElement hoverThirdButton;

    public ActionsPage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }

    public WebElement getDraggableElement() {
        return draggableElement;
    }

    public WebElement getDroppableElement() {
        return droppableElement;
    }

    public WebElement getDoubleClickButton() {
        return doubleClickButton;
    }

    public WebElement getClickBox() {
        return clickBox;
    }

    public WebElement getHoverFirstButton() {
        return hoverFirstButton;
    }

    public WebElement getHoverSecondButton() {
        return hoverSecondButton;
    }

    public WebElement getHoverThirdButton() {
        return hoverThirdButton;
    }
}
