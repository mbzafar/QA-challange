import { test, expect } from "@playwright/test";
import { ArithmeticFunctions } from "../../pages/arithmeticOperations";
import { HomePage } from "../../pages/homePage";
import { NumberInput } from "../../pages/numericInput";



test("multiply four integers values using calculaotr keypad and computer keyboard", async ({
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
        await numberInput.typeDigitsByKeyboard("99")
    });
    await test.step("Enter * after the first value", async () => {
        await arithmeticFunctions.clickMultiplyButton()
    });
    await test.step("Enter 2nd value", async () => {
        await numberInput.clickDigitFive()
        await numberInput.clickDigitSix()
        await numberInput.clickDigitSeven()
    });
    await test.step("Enter * after the second value", async () => {
        await arithmeticFunctions.clickMultiplyButton()
    });
    await test.step("Click Input field", async () => {
        await homePage.clickInputField()
    });
    await test.step("Enter 3rd value", async () => {
        await numberInput.typeDigitsByKeyboard("11")
    });
    await test.step("Enter * after the third value", async () => {
        await arithmeticFunctions.clickMultiplyButton()
    });
    await test.step("Enter 4th value", async () => {
        await numberInput.clickDigitEight()
        await numberInput.clickDigitNine()
    });
    await test.step("Click equal button ", async () => {
        await homePage.clickEqualButton()
    });
    await test.step("Result", async () => {
        await homePage.verifyResult("54954207")
    });
});

test("Multiply integer value to an existing result", async ({ page }) => {
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
        await numberInput.typeDigitsByKeyboard("500")
    });
    await test.step("Enter * after the first value", async () => {
        await arithmeticFunctions.clickMultiplyButton()
    });
    await test.step("Click Input field", async () => {
        await homePage.clickInputField()
    });
    await test.step("Enter 2nd value", async () => {
        await numberInput.typeDigitsByKeyboard("300")
    });
    await test.step("Click equal button ", async () => {
        await homePage.clickEqualButton()
    });
    await test.step("Enter * after the first value", async () => {
        await arithmeticFunctions.clickMultiplyButton()
    });
    await test.step("Click Input field", async () => {
        await homePage.clickInputField()
    });
    await test.step("Enter value to multiply to the result", async () => {
        await numberInput.typeDigitsByKeyboard("50")
    });
    await test.step("Click equal button ", async () => {
        await homePage.clickEqualButton()
    });
    await test.step("Result", async () => {
        await homePage.verifyResult("7500000")
    });
});

test("Multiply negative integer value to a positive value", async ({
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
        await numberInput.typeDigitsByKeyboard("-24")
    });
    await test.step("Enter * after the first value", async () => {
        await arithmeticFunctions.clickMultiplyButton()
    });
    await test.step("Click Input field", async () => {
        await homePage.clickInputField()
    });
    await test.step("Enter 2nd value", async () => {
        await numberInput.typeDigitsByKeyboard("36")
    });
    await test.step("Click equal button ", async () => {
        await homePage.clickEqualButton()
    });
    await test.step("Result", async () => {
        await homePage.verifyResult("-864")
    });
});

test("Multiply long integer values using calculator keypad", async ({
    page,
}) => {
    const homePage = new HomePage(page)
    const numberInput = new NumberInput(page)
    const arithmeticFunctions = new ArithmeticFunctions(page)

    await test.step("Go to URL", async () => {
        await homePage.goToUrl()
    });
    await test.step("Verify input field", async () => {
        await homePage.verifyResultField()
    });

    await test.step("Enter 1st value", async () => {
        await numberInput.clickDigitOne()
        await numberInput.clickDigitTwo()
        await numberInput.clickDigitThree()
        await numberInput.clickDigitFour()
        await numberInput.clickDigitFive()
        await numberInput.clickDigitSix()
        await numberInput.clickDigitSeven()
        await numberInput.clickDigitEight()
    });
    await test.step("Enter * after the first value", async () => {
        await arithmeticFunctions.clickMultiplyButton()
    });
    await test.step("Enter 2nd value", async () => {
        await numberInput.clickDigitFive()
        await numberInput.clickDigitSix()
        await numberInput.clickDigitSeven()
        await numberInput.clickDigitEight()
        await numberInput.clickDigitNine()
        await numberInput.clickDigitZero()
        await numberInput.clickDigitOne()
        await numberInput.clickDigitTwo()
    });
    await test.step("Click equal button ", async () => {
        await homePage.clickEqualButton()
    });
    await test.step("Result", async () => {
        await homePage.verifyResult("701098856090136")
    });
});
