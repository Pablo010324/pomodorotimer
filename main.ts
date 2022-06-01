function pomodoro () {
    basic.clearScreen()
    Rostro()
    t = 25 * 60
    while (t >= 0) {
        led.toggle(0, 3)
        led.toggle(4, 3)
        basic.pause(1000)
        t += 0 - 1
        led.toggle(0, 4)
        led.toggle(4, 4)
    }
}
input.onButtonPressed(Button.A, function () {
    secs = 0
    basic.showString("3")
    basic.showString("2")
    basic.showString("1")
    pomodoro()
    basic.showIcon(IconNames.Yes)
    basic.showString("Finish")
})
function Rostro () {
    led.plot(0, 0)
    led.plot(1, 0)
    led.plot(0, 1)
    led.plot(1, 1)
    led.plot(3, 0)
    led.plot(4, 0)
    led.plot(3, 1)
    led.plot(4, 1)
    led.plot(3, 4)
    led.plot(1, 4)
    led.plot(2, 4)
}
let secs = 0
let t = 0
basic.showString("A to start")
