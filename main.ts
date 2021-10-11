input.onButtonPressed(Button.A, function () {
    if (numero1 < numero2) {
        basic.showString("<")
        basic.pause(100)
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showString("<")
        basic.pause(100)
        basic.showIcon(IconNames.Sad)
    }
})
input.onButtonPressed(Button.AB, function () {
    if (numero1 == numero2) {
        basic.showString("=")
        basic.pause(100)
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showString("=")
        basic.pause(100)
        basic.showIcon(IconNames.Sad)
    }
})
input.onButtonPressed(Button.B, function () {
    if (numero1 > numero2) {
        basic.showString(">")
        basic.pause(100)
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showString(">")
        basic.pause(100)
        basic.showIcon(IconNames.Sad)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    numero1 = randint(0, 100)
    basic.showNumber(numero1)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . # # # .
        `)
    numero2 = randint(0, 100)
    basic.showNumber(numero2)
})
let numero2 = 0
let numero1 = 0
numero1 = 0
numero2 = 0
