package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class addtocart {
    WebDriver driver;

    @FindBy(xpath = "//*[text()=' Products']")
    WebElement productsLink;

    @FindBy(xpath = "//*[text()='View Cart']")
    WebElement viewCartButton;

    @FindBy(xpath = "//*[text()='Proceed To Checkout']")
    WebElement proceedToCheckoutButton;

    @FindBy(xpath = "//*[text()='Place Order']")
    WebElement placeOrderButton;

    @FindBy(xpath = "//*[text()='Order Placed!']")
    WebElement orderPlacedMessage;

    @FindBy(xpath = "//*[text()='Download Invoice']")
    WebElement downloadInvoiceButton;

    public addtocart(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }

    public void selectProduct(String productId) {
        productsLink.click();
        WebElement product = driver.findElement(By.xpath("//*[@data-product-id='" + productId + "']"));
        Actions action = new Actions(driver);
        action.moveToElement(product).perform();
        product.click();
    }

    public void viewCartAndCheckout() throws InterruptedException {
        Thread.sleep(2000); 
        viewCartButton.click();
        proceedToCheckoutButton.click();
        placeOrderButton.click();
    }

    public void enterCardDetails(String name, String cardNumber, String cvc, String expiryMonth, String expiryYear) {
        driver.findElement(By.name("name_on_card")).sendKeys(name);
        driver.findElement(By.name("card_number")).sendKeys(cardNumber);
        driver.findElement(By.name("cvc")).sendKeys(cvc);
        driver.findElement(By.name("expiry_month")).sendKeys(expiryMonth);
        driver.findElement(By.name("expiry_year")).sendKeys(expiryYear);
        driver.findElement(By.id("submit")).click();
    }

    public void verifyOrderPlaced() throws InterruptedException {
        orderPlacedMessage.click();
        Thread.sleep(1000); 
        downloadInvoiceButton.click();
    }
}
