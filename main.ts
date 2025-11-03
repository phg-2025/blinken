input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.setLedColor(0xff0000)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    basic.setLedColor(0x007fff)
})
let dauer = 200
let zeit = input.runningTime()
basic.forever(function () {
    led.toggle(0, 0)
    basic.pause(500)
    led.toggle(0, 0)
    basic.pause(500)
})
