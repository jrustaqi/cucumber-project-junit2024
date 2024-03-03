package steps;

import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.*;
import pages.AddNewCustomerPage;
import pages.DashboardPage;
import pages.LoginPage;
import pages.TestBase;

public class AddCustomerStepDefination extends TestBase{
	
	LoginPage loginPage;
	DashboardPage dashboardPage;
	AddNewCustomerPage addNewCustomerPage;
	
	@Before
	public void initMethod() {
		initDriver();
		loginPage = PageFactory.initElements(driver, LoginPage.class);
		dashboardPage = PageFactory.initElements(driver, DashboardPage.class); 
		addNewCustomerPage = PageFactory.initElements(driver, AddNewCustomerPage.class); 
	}
	
	@Given("^User is on CodeFios login page$")
	public void user_is_on_CodeFios_login_page() {
		driver.get("https://www.codefios.com/ebilling/login");
	}

	@When("^User enters \"([^\"]*)\" in username field$")
	public void user_enters_in_username_field(String username) {
		loginPage.insertUsername(username);
	}

	@When("^User enters \"([^\"]*)\" in password field$")
	public void user_enters_in_password_field(String password) {
		loginPage.insertPassword(password);
	}
	
	@When("^User clicks on the Sighin key$")
	public void user_clicks_on_the_Sighin_key() {
		loginPage.clickOnSinginButton();
	}
	
	@Then("^User should land on CodeFios dashboard page$")
	public void user_should_land_on_CodeFios_dashboard_page() {
		Assert.assertEquals("Codefios", loginPage.getPageTitle());
		takeScreenshot(driver);
	}

	@When("^User clicks on Customer menu$")
	public void user_clicks_on_Customer_menu() {
		dashboardPage.clickOnCustomersMenu();
	}

	@When("^User clicks on Add Customer menu$")
	public void user_clicks_on_Add_Customer_menu() {
		dashboardPage.clickOnAddCustomerMenu();
	}
	
	@Then("^User should land on CodeFios Add New Customer page$")
	public void user_should_land_on_CodeFios_Add_New_Customer_page() {
		Assert.assertEquals("Manage Client", dashboardPage.getPageTitle());
		takeScreenshot(driver);
	}

	@When("^User enters \"([^\"]*)\" in fullname field$")
	public void user_enters_in_fullname_field(String fullname) {
		addNewCustomerPage.insertFullname(fullname);
	}

	@When("^User enters \"([^\"]*)\" in company field$")
	public void user_enters_in_company_field(String company) {
		addNewCustomerPage.selectCompanyfromDropDown(company);
	}

	@When("^User enters \"([^\"]*)\" in email field$")
	public void user_enters_in_email_field(String email) {
		addNewCustomerPage.insertEmail(email);
	}

	@When("^User enters \"([^\"]*)\" in phone field$")
	public void user_enters_in_phone_field(String phone) {
		addNewCustomerPage.insertPhone(phone);
	}

	@When("^User enters \"([^\"]*)\" in address field$")
	public void user_enters_in_address_field(String address) {
		addNewCustomerPage.insertAddress(address);
	}

	@When("^User enters \"([^\"]*)\" in city field$")
	public void user_enters_in_city_field(String city) {
		addNewCustomerPage.insertCity(city);
	}

	@When("^User enters \"([^\"]*)\" in zipCode field$")
	public void user_enters_in_zipCode_field(String zipCode) {
		addNewCustomerPage.insertZipCode(zipCode);
	}

	@When("^User enters \"([^\"]*)\" in country field$")
	public void user_enters_in_country_field(String country) {
		addNewCustomerPage.selectCountryFromDropDown(country);
	}

	@When("^User enters \"([^\"]*)\" in group field$")
	public void user_enters_in_group_field(String group) {
		addNewCustomerPage.selectGroupFromDropDown(group);
	}
	
	@When("^User clicks on the save key$")
	public void user_clicks_on_the_save_key() {
		addNewCustomerPage.clickOnSaveButton();
	}

	@Then("^User should see the new inserted customer information$")
	public void user_should_see_the_new_inserted_customer_information() {
		Assert.assertEquals("Manage Client", addNewCustomerPage.getPageTitle());
		addNewCustomerPage.validateInsertedCustomer();
		takeScreenshot(driver);
	}
	
	//@After
	public void tearDown(){
		driver.close();
		driver.quit();
	}

}
