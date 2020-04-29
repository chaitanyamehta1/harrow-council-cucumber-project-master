package uk.gov.harrow.pages;

import com.cucumber.listener.Reporter;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import uk.gov.harrow.utility.Utility;

/**
 * Created by Chaitanya
 */
public class LoginPage extends Utility {

    private static final Logger log = LogManager.getLogger(LoginPage.class.getName());

    //below locators for elements on home page
    @FindBy(className = "icon-fallback")
    WebElement _loginLink;
    @FindBy(xpath = "//input[@id='username-input']")
    WebElement _emailId;
    @FindBy(xpath = "//input[@id='password-input']")
    WebElement _password;
    @FindBy(xpath = "//input[@id='submitBtnSignIn']")
    WebElement _login;
    @FindBy(xpath = "//h2[contains(text(),'Log in')]")
    WebElement _getLoginText;
    @FindBy(xpath = "//span[@id='password.errors']")
    WebElement _getErrorText;
    @FindBy(xpath = "//span[@class='icon toggle-icon toggle-icon--search']")
    WebElement _searchSymbolLink;
    @FindBy(xpath = "//span[@class='button__text'][contains(text(),'Services')]")
    WebElement _servicesButton;
    @FindBy(xpath = "//div[@class='widget-row widget-row--flush widget-row--full-width']//a[2]")
    WebElement _councilTaxButton;

    //below method creation for web elements and doing action on elements
    public void clickOnLoginLink() {
        Reporter.addStepLog("Clicking on login button " + _loginLink.toString());
        clickOnElement(_loginLink);
        log.info("Clicking on login button " + _loginLink.toString());
    }


    public void enterEmailId(String email) {
        Reporter.addStepLog("Entering Email id " + "On Email Field " + _emailId.toString());
        sendTextToElement(_emailId, email);
        log.info("Entering Email id " + "On Email Field " + _emailId.toString());
    }

    public void enterPassword(String password) {
        Reporter.addStepLog("Entering Password " + "On Password Field " + _password.toString());
        sendTextToElement(_password, password);
        log.info("Entering Password " + "On Password Field " + _password.toString());

    }

    public void ClickOnLoginButton() {
        Reporter.addStepLog("Clicking on Login Button " + _login.toString());
        clickOnElement(_login);
        log.info("Clicking on Login Button " + _login.toString());
    }

    public String getLoginVerifyingText() {
        Reporter.addStepLog("Getting Login Text " + _getLoginText.toString());
        log.info("Getting Login Text " + _getLoginText.toString());
        return getTextFromElement(_getLoginText);
    }

    public String getErrorMessage() {
        Reporter.addStepLog("Getting Error Message " + _getErrorText.toString());
        log.info("Getting Error Message " + _getErrorText.toString());
        return getTextFromElement(_getErrorText);
    }


    public void clickOnSearchButton() {
        Reporter.addStepLog("Clicking on search button " + _searchSymbolLink.toString());
        clickOnElement(_searchSymbolLink);
        log.info("Clicking on search button " + _searchSymbolLink.toString());
    }

    public void clickOnServiceButton() {
        Reporter.addStepLog("Clicking on service button " + _servicesButton.toString());
        clickOnElement(_servicesButton);
        log.info("Clicking on service button " + _servicesButton.toString());
    }

    public void clickOnCouncilTaxFeature() {
        Reporter.addStepLog("Clicking on council tax button " + _councilTaxButton.toString());
        clickOnElement(_councilTaxButton);
        log.info("Clicking on council tax button " + _councilTaxButton.toString());
    }


}
