import { expect, Locator, Page } from "@playwright/test";

export class HomePage {
  private resultField: Locator;
  private clearBtn: Locator;
  private equalBtn: Locator;

  constructor(private page: Page) {
    this.resultField = page.locator('[class="result"]');
    this.clearBtn = page.locator('[value="C"]');
    this.equalBtn = page.locator('[value="="]');
  }
  async goToUrl() {
    await this.page.goto(
      "https://talentry-qa-take-home-exercise.s3.eu-central-1.amazonaws.com/index.html"
    );
  }
  async verifyResultField() {
    await this.resultField.isVisible();
  }
  async clickInputField() {
    await this.resultField.click();
  }
  async clickClearButton() {
    await this.clearBtn.click();
  }
  async clickEqualButton() {
    await this.equalBtn.click();
  }
  async verifyResult(value: string) {
    expect(await this.resultField.inputValue()).toBe(value);
  }
}

export default (page: Page): HomePage => new HomePage(page);
