import { test, expect } from "@playwright/test";
import { ArithmeticFunctions } from "../../pages/arithmeticOperations";
import { HomePage } from "../../pages/homePage";
import { NumberInput } from "../../pages/numericInput";



test("Add four integers values using calculaotr keypad and computer keyboard", async ({
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
    await test.step("Enter 2nd value", async () => {
        await numberInput.clickDigitFive()
        await numberInput.clickDigitSix()
        await numberInput.clickDigitSeven()
    });
    await test.step("Enter + after the second value", async () => {
        await arithmeticFunctions.clickPlusButton()
    });
    await test.step("Click Input field", async () => {
        await homePage.clickInputField()
    });
    await test.step("Enter 3rd value", async () => {
        await numberInput.typeDigitsByKeyboard("890")
    });
    await test.step("Enter + after the third value", async () => {
        await arithmeticFunctions.clickPlusButton()
    });
    await test.step("Enter 4th value", async () => {
        await numberInput.clickDigitEight()
        await numberInput.clickDigitNine()
        await numberInput.clickDigitZero()
    });
    await test.step("Click equal button ", async () => {
        await homePage.clickEqualButton()
    });
    await test.step("Result", async () => {
        await homePage.verifyResult("2470")
    });
});


test("Add integer value to an existing result", async ({ page }) => {
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
        await numberInput.typeDigitsByKeyboard("50")
    });
    await test.step("Enter + after the first value", async () => {
        await arithmeticFunctions.clickPlusButton()
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
    await test.step("Enter + after the first value", async () => {
        await arithmeticFunctions.clickPlusButton()
    });
    await test.step("Click Input field", async () => {
        await homePage.clickInputField()
    });
    await test.step("Enter value to add to the result", async () => {
        await numberInput.typeDigitsByKeyboard("4500")
    });
    await test.step("Click equal button ", async () => {
        await homePage.clickEqualButton()
    });
    await test.step("Result", async () => {
        await homePage.verifyResult("4586")
    });
});

test("Add negative integer value to a positive value", async ({ page }) => {
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
    await test.step("Enter + after the first value", async () => {
        await arithmeticFunctions.clickPlusButton()
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
        await homePage.verifyResult("12")
    });
});

test("Add long integer values using calculator keypad", async ({ page }) => {
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
        await numberInput.clickDigitNine()
        await numberInput.clickDigitZero()
    });
    await test.step("Enter + after the first value", async () => {
        await arithmeticFunctions.clickPlusButton();
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
        await homePage.verifyResult("1291356902")
    });
});

