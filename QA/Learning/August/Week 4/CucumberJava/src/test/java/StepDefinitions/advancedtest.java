package StepDefinitions;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.*;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import pages.ActionsPage;
import pages.AjaxLoaderPage;
import pages.PopupPage;
import pages.ScrollPage;
import pages.IframePage;
import org.openqa.selenium.WebElement;
import java.time.Duration;
import java.util.ArrayList;

public class advancedtest {

    WebDriver driver;
    WebDriverWait wait;
    ActionsPage actionsPage;
    AjaxLoaderPage ajaxLoaderPage;
    PopupPage popupPage;
    ScrollPage scrollPage;
    IframePage iframePage;

    @Before
    public void setUp() {
        System.setProperty("webdriver.chrome.driver", "C:\\Users\\P10\\eclipse-workspace\\CucumberJava\\src\\test\\resources\\drivers\\drivers\\chromedriver.exe");
        ChromeOptions options = new ChromeOptions();
        options.addArguments("--incognito");
        driver = new ChromeDriver(options);
        wait = new WebDriverWait(driver, Duration.ofSeconds(10));
        driver.manage().window().maximize();
        driver.get("https://www.webdriveruniversity.com");

        ajaxLoaderPage = new AjaxLoaderPage(driver);
        actionsPage = new ActionsPage(driver);
        popupPage = new PopupPage(driver);
        scrollPage = new ScrollPage(driver);
        iframePage = new IframePage(driver);
    }

    @Given("I am on ajax loader page")
    public void i_am_on_ajax_loader_page() {
        ajaxLoaderPage.clickAjaxLoader();

        switchToNewTab();
    }

    @And("i wait for element to appear")
    public void i_wait_for_element_to_appear() {
        WebElement element = wait.until(ExpectedConditions.elementToBeClickable(By.id("button1")));
    }

    @Then("I should be able to click on the button")
    public void i_should_be_able_to_click_on_the_button() {
        WebElement element = driver.findElement(By.id("button1"));
        element.click();
    }

    @Given("I am on actions page")
    public void i_am_on_actions_page() {
        driver.findElement(By.id("actions")).click();
        switchToNewTab();
    }

    @When("i drag element")
    public void i_drag_element() {
        actionsPage.getDraggableElement();  
        actionsPage.getDroppableElement();
    }

    @Then("element should be dropped")
    public void element_should_be_dropped() throws InterruptedException {
        Actions actions = new Actions(driver);
        Thread.sleep(1500);
        actions.clickAndHold(actionsPage.getDraggableElement())
                .moveToElement(actionsPage.getDroppableElement())
                .release(actionsPage.getDroppableElement())
                .perform();
    }

    @When("i double click")
    public void i_double_click() {
        Actions actions = new Actions(driver);
        actions.doubleClick(actionsPage.getDoubleClickButton()).perform();
    }

    @And("Hover on first second and third buttons")
    public void hover_on_first_second_and_third_buttons() throws InterruptedException {
        Actions actions = new Actions(driver);
        Thread.sleep(1000);
        actions.moveToElement(actionsPage.getHoverFirstButton()).perform();
        actions.moveToElement(actionsPage.getHoverSecondButton()).perform();
        actions.moveToElement(actionsPage.getHoverThirdButton()).perform();
    }

    @And("i click and hold on button")
    public void i_click_and_hold_on_button() throws InterruptedException {
        Actions actions = new Actions(driver);
        Thread.sleep(1000);
        actions.clickAndHold(actionsPage.getClickBox()).perform();
    }

    @Then("I successfully complete")
    public void i_successfully_complete_all_actions() {
        driver.close();
    }

    @Given("I am on scroll page")
    public void i_am_on_scroll_page() {
        scrollPage.clickScrollingAround();
        switchToNewTab();
    }

    @And("i wait for element")
    public void i_wait_for_element() {
        scrollPage.getMainHeader().isDisplayed();
    }

    @Then("i scroll to all elements")
    public void i_scroll_to_all_elements() throws InterruptedException {
        Actions actions = new Actions(driver);
        Thread.sleep(1000);
        actions.moveToElement(scrollPage.getZone1()).perform();
        actions.moveByOffset(0, 100).perform();
        actions.moveByOffset(0, -100).perform();

        for (int i = 0; i < 10; i++) {
            actions.moveToElement(scrollPage.getZone2Entries()).perform();
            actions.moveByOffset(0, 100).perform();
            actions.moveByOffset(0, -100).perform();
        }
    }

    @Given("I am on popup page")
    public void i_am_on_popup_page() {
        popupPage.clickPopupAlerts();
        switchToNewTab();
    }

    @When("Page has appeared")
    public void page_has_appeared() {
        popupPage.getButton1().isDisplayed();
    }

    @Then("i interact with all popups")
    public void i_interact_with_all_popups() throws InterruptedException {
        popupPage.getButton1().click();
        Alert alert = driver.switchTo().alert();
        Thread.sleep(1000);
        alert.accept();

        popupPage.getButton4().click();
        alert = driver.switchTo().alert();
        Thread.sleep(1000);
        alert.dismiss();
    }

    @Given("I am on iframe page")
    public void i_am_on_iframe_page() {
        iframePage.clickIframeButton();
        switchToNewTab();
    }

    @When("iframe has appeared")
    public void iframe_has_appeared() {
        iframePage.getNavTitle().isDisplayed();
    }

    @Then("i interact with Iframe")
    public void i_interact_with_iframe() throws InterruptedException {
        driver.switchTo().frame("frame");

        for (int i = 0; i < 3; i++) {
            iframePage.getNextSlideButton().click();
            Thread.sleep(500);
        }

        for (int i = 1; i <= 3; i++) {
            driver.findElement(By.xpath("(//ul//li)[" + i + "]")).click();
            Thread.sleep(200);
        }

        iframePage.getFirstNameField().sendKeys("Nikhil");
        iframePage.getLastNameField().sendKeys("Zach");
        iframePage.getEmailField().sendKeys("Nikhilzach5@gmail.com");
        iframePage.getMessageField().sendKeys("Hyalooo");

        iframePage.getSubmitButton().click();
    }

    @After
    public void tearDown() {
        driver.quit();
    }

    private void switchToNewTab() {
    
        ArrayList<String> tabs = new ArrayList<>(driver.getWindowHandles());
        driver.switchTo().window(tabs.get(tabs.size() - 1));
    }
}
