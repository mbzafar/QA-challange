import { test, expect } from "@playwright/test";
import { ArithmeticFunctions } from "../../pages/arithmeticOperations";
import { HomePage } from "../../pages/homePage";
import { NumberInput } from "../../pages/numericInput";


test("Multiply decimal number to integer using keyboard ", async ({ page }) => {
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
        await numberInput.typeDigitsByKeyboard("896")
    });
    await test.step("Enter * after the first value", async () => {
        await arithmeticFunctions.typeArithmeticSignByKeyboard("*")
    });
    await test.step("Enter 2nd value", async () => {
        await numberInput.typeDigitsByKeyboard("567.9")
    });
    await test.step("Click equal button ", async () => {
        await homePage.clickEqualButton()
    });
    await test.step("Result", async () => {
        await homePage.verifyResult("508838.39999999997")
    });
});


test("Multiply 2 decimal values using calculaotr keypad and computer keyboard", async ({
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
        await numberInput.typeDigitsByKeyboard("125.5")
    });
    await test.step("Enter * after the first value", async () => {
        await arithmeticFunctions.clickMultiplyButton()
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
        await homePage.verifyResult("7115.85")
    });
});


test("Multiply negative decimal value to a positive decimal value", async ({
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
        await numberInput.typeDigitsByKeyboard("-223.4")
    });
    await test.step("Enter * after the first value", async () => {
        await arithmeticFunctions.clickMultiplyButton()
    });
    await test.step("Click Input field", async () => {
        await homePage.clickInputField()
    });
    await test.step("Enter 2nd value", async () => {
        await numberInput.typeDigitsByKeyboard("363.89")
    });
    await test.step("Click equal button ", async () => {
        await homePage.clickEqualButton()
    });
    await test.step("Result", async () => {
        await homePage.verifyResult("-81293.026")
    });
});
