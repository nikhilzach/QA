package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class loginPage {
	WebDriver driver;
	@FindBy(name="email")
	WebElement txt_username;
	
	@FindBy(name="password")
	WebElement txt_password;
	
	@FindBy(xpath="//*[text()='Login']")
	WebElement loginbutton;
	
	public loginPage(WebDriver driver) {
		this.driver=driver;
		PageFactory.initElements(driver,this);
	}
	
	public void login(String username,String password)
	{
		txt_username.sendKeys(username);
		txt_password.sendKeys(password);
		loginbutton.click();
	}
}
