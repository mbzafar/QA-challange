import { test, expect } from "@playwright/test";
import { ArithmeticFunctions } from "../../pages/arithmeticOperations";
import { HomePage } from "../../pages/homePage";
import { NumberInput } from "../../pages/numericInput";


// DMAS test 1
test("Add, Subtract and multiply in one claculation", async ({
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
    await test.step("Enter - after the third value", async () => {
        await arithmeticFunctions.clickSubtractButton()
    });
    await test.step("Enter 4th value", async () => {
        await numberInput.clickDigitEight()
        await numberInput.clickDigitNine()
    });
    await test.step("Enter * after the 4th value", async () => {
        await arithmeticFunctions.clickMultiplyButton()
    });
    await test.step("Enter 5th value", async () => {
        await numberInput.clickDigitNine()
        await numberInput.clickDigitZero()
    });
    await test.step("Click equal button ", async () => {
        await homePage.clickEqualButton()
    });
    await test.step("Result", async () => {
        await homePage.verifyResult("-6430")
    });
});

// DMAS test 2
// test("Divide, Add, Subtract and multiply in one claculation", async ({
//     page,
// }) => {
//     const homePage = new HomePage(page)
//     const numberInput = new NumberInput(page)
//     const arithmeticFunctions = new ArithmeticFunctions(page)

//     await test.step("Go to URL", async () => {
//         await homePage.goToUrl()
//     });
//     await test.step("Click Input field", async () => {
//         await homePage.clickInputField()
//         await page.pause()
//     });
//     await test.step("Enter 1st value", async () => {
//         await numberInput.typeDigitsByKeyboard("124.24")
//     });
//     await test.step("Enter / after the first value", async () => {
//         await arithmeticFunctions.clickDivideButton()
//     });
//     await test.step("Click Input field", async () => {
//         await homePage.clickInputField()
//     });
//     await test.step("Enter 2nd value", async () => {
//         await numberInput.typeDigitsByKeyboard("2")
//     });
//     await test.step("Enter + after the second value", async () => {
//         await arithmeticFunctions.clickPlusButton()
//     });
//     await test.step("Click Input field", async () => {
//         await homePage.clickInputField()
//     });
//     await test.step("Enter 3rd value", async () => {
//         await numberInput.typeDigitsByKeyboard("890")
//     });
//     await test.step("Enter - after the third value", async () => {
//         await arithmeticFunctions.clickSubtractButton()
//     });
//     await test.step("Click Input field", async () => {
//         await homePage.clickInputField()
//     });
//     await test.step("Enter 4th value", async () => {
//         await numberInput.typeDigitsByKeyboard("89")
//     });
//     await test.step("Enter * after the 4th value", async () => {
//         await arithmeticFunctions.clickMultiplyButton()
//     });
//     await test.step("Click Input field", async () => {
//         await homePage.clickInputField()
//     });
//     await test.step("Enter 5th value", async () => {
//         await numberInput.typeDigitsByKeyboard("9")
//     });
//     await test.step("Click equal button ", async () => {
//         await homePage.clickEqualButton()
//     });
//     await test.step("Result", async () => {
//         await homePage.verifyResult("151.12")
//     });
// });