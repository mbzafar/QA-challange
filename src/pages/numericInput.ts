import { expect, Locator, Page } from "@playwright/test"


export class NumberInput {

    private buttonOne : Locator
    private buttonTwo : Locator
    private buttonThree : Locator
    private buttonFour : Locator
    private buttonFive : Locator
    private buttonSix : Locator
    private buttonSeven : Locator
    private buttonEight : Locator
    private buttonNine : Locator
    private buttonZero : Locator
    private buttonDecimal: Locator

    constructor(private page:Page){
        this.buttonOne = page.locator('[value="1"]')
        this.buttonTwo = page.locator('[value="2"]')
        this.buttonThree = page.locator('[value="3"]')
        this.buttonFour = page.locator('[value="4"]')
        this.buttonFive = page.locator('[value="5"]')
        this.buttonSix = page.locator('[value="6"]')
        this.buttonSeven = page.locator('[value="7"]')
        this.buttonEight = page.locator('[value="8"]')
        this.buttonNine = page.locator('[value="9"]')
        this.buttonZero = page.locator('[value="0"]')
        this.buttonDecimal = page.locator('[value="."]')
    }

    async clickDigitOne(){
        await this.buttonOne.click()
    }
    async clickDigitTwo(){
        await this.buttonTwo.click()
    }
    async clickDigitThree(){
        await this.buttonThree.click()
    }
    async clickDigitFour(){
        await this.buttonFour.click()
    }
    async clickDigitFive(){
        await this.buttonFive.click()
    }
    async clickDigitSix(){
        await this.buttonSix.click()
    }
    async clickDigitSeven(){
        await this.buttonSeven.click()
    }
    async clickDigitEight(){
        await this.buttonEight.click()
    }
    async clickDigitNine(){
        await this.buttonNine.click()
    }
    async clickDigitZero(){
        await this.buttonZero.click()
    }
    async clickDecimalBtn(){
        await this.buttonDecimal.click()
    }

    // Type digits using keyboard
    async typeDigitsByKeyboard(value: string){
        await this.page.keyboard.type(value, {delay: 100})
    }

}

export default (page:Page): NumberInput => new NumberInput(page)
