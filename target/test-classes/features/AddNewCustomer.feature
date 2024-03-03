
Feature: Adding new customer validation
	@Reg
	Scenario Outline: User should be able to add new customer 
		Given User is on CodeFios login page
		When User enters "<username>" in username field
		When User enters "<password>" in password field
		And User clicks on the Sighin key
		Then User should land on CodeFios dashboard page
		When User clicks on Customer menu
		And User clicks on Add Customer menu
		Then User should land on CodeFios Add New Customer page
		When User enters "<fullname>" in fullname field
		When User enters "<company>" in company field
		When User enters "<email>" in email field
		When User enters "<phone>" in phone field
		When User enters "<address>" in address field
		When User enters "<city>" in city field
		When User enters "<zipCode>" in zipCode field
		When User enters "<country>" in country field
		When User enters "<group>" in group field
		And User clicks on the save key
		Then User should see the new inserted customer information
		
		Examples:
		| username          | password | fullname 		 | company | email          | phone       | address | city   | zipCode | country | group |
		| demo@codefios.com | abc123   | cucumberJunit | Apple   | apple@aple.com | 55555555555 | Home    | Paris  | 55555   | France  | Lazy  |		