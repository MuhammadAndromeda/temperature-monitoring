input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
    basic.showString("Celcius")
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(input.temperature() * 0.8)
    basic.showString("Reamour")
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.temperature() * (1.8 + 32))
    basic.showString("Fahrenheit")
})
basic.showIcon(IconNames.Happy)
