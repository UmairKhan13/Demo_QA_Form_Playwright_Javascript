const { PlaywrightCore } = require("../../module-imports/helperFunctions.imports");
import Locators from "./de-qa-form.locators.json";

exports.DemoQAPage = class DemoQAPage {

  constructor(page) {
    this.intializePage(page);
  }
  intializePage(page) {
    this.page = page;
    this.baseURL = "./"
    this.firstNameTxtBox = this.page.locator(Locators.firstNameTxtBox);
    this.lastNameTxtBox = this.page.locator(Locators.lastNameTxtBox);
    this.emailTxtBox = this.page.locator(Locators.emailTxtBox);
    this.maleRadioBtn = this.page.locator(Locators.maleRadioBtn);
    this.femaleRadioBtn = this.page.locator(Locators.femaleRadioBtn);
    this.mobileNumberTxtBox = this.page.locator(Locators.mobileNumberTxtBox);
    this.dateOfBithInputField = this.page.locator(Locators.dateOfBithInputField);
    this.subjectTxtBox = this.page.locator(Locators.subjectTxtBox);
    this.sportsCheckBox = this.page.locator(Locators.sportsCheckBox);
    this.readingCheckBox = this.page.locator(Locators.readingCheckBox);
    this.musicCheckBox = this.page.locator(Locators.musicCheckBox);
    this.uploadPicture = this.page.locator(Locators.uploadPicture);
    this.currentAddressTxtBox = this.page.locator(Locators.currentAddressTxtBox);
    this.selectStateDropDowm = this.page.locator(Locators.selectStateDropDowm);
    this.selectCityDropDown = this.page.locator(Locators.selectCityDropDown);
  }

  async NavigateToDemoQAPage(){
    await PlaywrightCore.goTo(this.page, this.baseURL)
    }

};