import { test, expect } from "@playwright/test";
import arithmeticOperations, { ArithmeticFunctions } from "../../pages/arithmeticOperations";
import { HomePage } from "../../pages/homePage";
import { NumberInput } from "../../pages/numericInput";


test("Clear input field after entering values", async ({
    page,
}) => {
    const homePage = new HomePage(page)
    const numberInput = new NumberInput(page)
    const arithmeticFunctions = new ArithmeticFunctions(page)

    await test.step("Go to URL", async () => {
        await homePage.goToUrl()
    });
    await test.step("Click Input field", async () => {
        await homePage.clickInputField()
    });
    await test.step("Enter 1st value", async () => {
        await numberInput.typeDigitsByKeyboard("123")
    });
    await test.step("Enter + after the first value", async () => {
        await arithmeticFunctions.clickPlusButton()
    });
    await test.step("Press Clear key", async () => {
        await homePage.clickClearButton()
    });
    await test.step("Verify input field to be empty", async () => {
        await homePage.verifyResult("")
    });
    await test.step("Enter Long Value", async () => {
        await numberInput.clickDigitFive()
        await numberInput.clickDigitSix()
        await numberInput.clickDigitSeven()
        await numberInput.clickDigitFive()
        await numberInput.clickDigitSix()
        await numberInput.clickDigitSeven()
        await numberInput.clickDecimalBtn()
    });
    await test.step("Press Clear key", async () => {
        await homePage.clickClearButton()
    });
    await test.step("Verify input field to be empty", async () => {
        await homePage.verifyResult("")
    });
    await test.step("Enter all operation signs", async () => {
        await arithmeticFunctions.clickDivideButton()
        await arithmeticFunctions.clickMultiplyButton()
        await arithmeticFunctions.clickPlusButton()
        await arithmeticFunctions.clickSubtractButton()
    });
    await test.step("Press Clear key", async () => {
        await homePage.clickClearButton()
    });
    await test.step("Verify input field to be empty", async () => {
        await homePage.verifyResult("")
    });
});

test("Clear key after a calculation is done", async ({ page }) => {
    const homePage = new HomePage(page);
    const numberInput = new NumberInput(page);
    const arithmeticFunctions = new ArithmeticFunctions(page);

    await test.step("Go to URL", async () => {
        await homePage.goToUrl()
    });
    await test.step("Click Input field", async () => {
        await homePage.clickInputField()
    });
    await test.step("Enter 1st value", async () => {
        await numberInput.typeDigitsByKeyboard("123.22")
    });
    await test.step("Enter + after the first value", async () => {
        await arithmeticFunctions.typeArithmeticSignByKeyboard("+")
    });
    await test.step("Enter 2nd value", async () => {
        await numberInput.typeDigitsByKeyboard("567.9")
    });
    await test.step("Click equal button ", async () => {
        await homePage.clickEqualButton()
    });
    await test.step("Result", async () => {
        await homePage.verifyResult("691.12")
    });
    await test.step("Press Clear key", async () => {
        await homePage.clickClearButton()
    });
    await test.step("Verify input field to be empty", async () => {
        await homePage.verifyResult("")
    });
});
