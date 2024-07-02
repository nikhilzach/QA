package StepDefinitions;

import org.openqa.selenium.*;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.*;

public class googlesteps {
	
	WebDriver driver= null;
	
	@Given("browser is open")
	public void browser_is_open() {
	   System.out.println("Hello");
	   System.setProperty("webdriver.chrome.driver","C:\\Users\\P10\\eclipse-workspace\\CucumberJava\\src\\test\\resources\\drivers\\drivers\\chromedriver.exe");
	   driver = new ChromeDriver();
	}

	@And("user is on google search page")
	public void user_is_on_google_search_page() {
		driver.navigate().to("https://www.google.com/");
		
	}

	@When("user enters a text in search box")
	public void user_enters_a_text_in_search_box() {
		driver.findElement(By.name("q")).sendKeys("Automation");
	}

	@And("hits enter")
	public void hits_enter() {
		System.out.println("Hello");
		driver.findElement(By.name("q")).sendKeys(Keys.ENTER);
	}

	@Then("user is navigated to search results")
	public void user_is_navigated_to_search_results() {
		driver.getPageSource().contains("Spiceworks");
		driver.close();
		driver.quit();
	}

}
