import { test, expect } from "@playwright/test";
import { ArithmeticFunctions } from "../../pages/arithmeticOperations";
import { HomePage } from "../../pages/homePage";
import { NumberInput } from "../../pages/numericInput";


test("Add decimal and integer values", async ({ page }) => {
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
        await numberInput.typeDigitsByKeyboard("567")
    });
    await test.step("Click equal button ", async () => {
        await homePage.clickEqualButton()
    });
    await test.step("Result", async () => {
        await homePage.verifyResult("690.22")
    });
});


test("Add 2 decimal values using calculaotr keypad and computer keyboard", async ({
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
        await numberInput.typeDigitsByKeyboard("123.5")
    });
    await test.step("Enter + after the first value", async () => {
        await arithmeticFunctions.clickPlusButton()
    });
    await test.step("Enter 2nd value", async () => {
        await numberInput.clickDigitFive()
        await numberInput.clickDigitSix()
        await numberInput.clickDecimalBtn()
        await numberInput.clickDigitSeven()
    });

    await test.step("Click equal button ", async () => {
        await homePage.clickEqualButton()
    });
    await test.step("Result", async () => {
        await homePage.verifyResult("180.2")
    });
});

test("Add negative decimal value to a positive decimal value", async ({page,}) => {
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
        await numberInput.typeDigitsByKeyboard("-2224.4")
    });
    await test.step("Enter + after the first value", async () => {
        await arithmeticFunctions.clickPlusButton()
    });
    await test.step("Click Input field", async () => {
        await homePage.clickInputField()
    });
    await test.step("Enter 2nd value", async () => {
        await numberInput.typeDigitsByKeyboard("36333.8")
    });
    await test.step("Click equal button ", async () => {
        await homePage.clickEqualButton()
    });
    await test.step("Result", async () => {
        await homePage.verifyResult("34109.4")
    });
});
