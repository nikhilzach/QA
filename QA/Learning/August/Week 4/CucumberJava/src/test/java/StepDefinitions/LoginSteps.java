//package StepDefinitions;
//
//import java.io.File;
//import org.openqa.selenium.By;
//import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.chrome.ChromeDriver;
//import org.openqa.selenium.chrome.ChromeOptions;
//import io.cucumber.java.Before;
//import io.cucumber.java.Scenario;
//import io.cucumber.java.en.*;
//import pages.addtocart;
//import pages.loginPage;
//
//public class LoginSteps {
//    WebDriver driver = null;
//    loginPage login;
//    addtocart cart;
//
//    @Before
//    public void browserSetup() {
//        System.setProperty("webdriver.chrome.driver", "C:\\Users\\P10\\eclipse-workspace\\CucumberJava\\src\\test\\resources\\drivers\\drivers\\chromedriver.exe");
//        ChromeOptions options = new ChromeOptions();
//        options.addArguments("--incognito");
//        driver = new ChromeDriver(options);
//        driver.navigate().to("https://www.automationexercise.com");
//        
//        login = new loginPage(driver);
//        cart = new addtocart(driver);
//    }
//
//    @Given("user is on login page")
//    public void user_is_on_login_page() {
//        driver.findElement(By.xpath("//*[text()=' Signup / Login']")).click();
//    }
//
//    @When("^user enters (.*) and (.*) and login$")
//    public void user_enters_user1_and_pass1(String username, String password) {
//        login.login(username, password);
//    }
//
//    @Then("user is navigated to the home page")
//    public void user_is_navigated_to_the_home_page() {
//        // Add verification steps here          
//    }
//
//    @Given("^user clicks on (.*) product$")
//    public void user_clicks_on_product_product(String productId) {
//        cart.selectProduct(productId);
//    }
//
//    @When("user clicks on add to cart")
//    public void user_clicks_on_add_to_cart() {
//        // Add the steps to click on add to cart here
//    }
//
//    @When("views cart and checksout")
//    public void views_cart_and_checksout() throws InterruptedException {
//        cart.viewCartAndCheckout();
//    }
//
//    @When("enters card details")
//    public void enters_card_details() {
//        cart.enterCardDetails("Nikhil Zach", "1111 1111 1111 1111", "123", "11", "2026");
//    }
//
//    @Then("order is placed successfully")
//    public void order_is_placed_successfully() throws InterruptedException {
//        cart.verifyOrderPlaced();
//    }
//
//    @Then("invoice is downloaded")
//    public void invoice_is_downloaded() {
//        File file = new File("C:/Users/P10/Downloads/invoice.txt");
//        if (file.exists()) {
//            System.out.println("File downloaded successfully.");
//        } else {
//            System.out.println("File not downloaded.");
//        }
//        
//        driver.close();
//    }
//}
