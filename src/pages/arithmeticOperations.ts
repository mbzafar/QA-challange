import { expect, Locator, Page } from "@playwright/test";

export class ArithmeticFunctions {
  private plus: Locator;
  private subtract: Locator;
  private multiply: Locator;
  private divide: Locator;

  constructor(private page: Page) {
    this.plus = page.locator('[value="+"]');
    this.subtract = page.locator('[value="-"]');
    this.multiply = page.locator('[value="x"]');
    this.divide = page.locator('[value="/"]');
  }

  async clickPlusButton() {
    await this.plus.click();
  }
  async clickSubtractButton() {
    await this.subtract.click();
  }
  async clickMultiplyButton() {
    await this.multiply.click();
  }
  async clickDivideButton() {
    await this.divide.click();
  }
   // Type operation signs using keyboard
  async typeArithmeticSignByKeyboard(sign: string) {
    await this.page.keyboard.type(sign)
  }
}

export default (page: Page): ArithmeticFunctions =>
  new ArithmeticFunctions(page);
