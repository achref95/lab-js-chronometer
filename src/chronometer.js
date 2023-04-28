class Chronometer {
  constructor() {

    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++
      printTimeCallback(this.currentTime)
    }, 1000)
  }

  getMinutes() {
    const timeInMn = this.currentTime / 60
    let minutes = Math.floor(timeInMn)
    if (minutes < 1) {
      return 0
    } else {
      return minutes
    }
  }

  getSeconds() {
    let seconds = this.currentTime % 60
    return seconds
  }

  computeTwoDigitNumber(value) {
    return String(value).padStart(2, '0')
  }

  stop() {
      clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    const timeInMn = this.currentTime / 60
    let minutes = Math.floor(timeInMn)
    const mResult = minutes.toString().padStart(2, '0')
    let seconds = this.currentTime % 60
    const sResult = seconds.toString().padStart(2, '0')

    return String(`${mResult}:${sResult}`)
  }
}
