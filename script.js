const secondHand = document.querySelector('.second-hand') 
const minuteHand = document.querySelector('.min-hand') 
const hourHand = document.querySelector('.hour-hand') 
function setDate() {

  const date = new Date()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  
  const secondDegrees = ((second/60)*360) + 90
  const minuteDegrees = ((minute/60)*360) + 90
  const hourDegrees = ((hour/12)*360) + 90

  secondHand.style.transform = `rotate(${secondDegrees}deg)`
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`
  hourHand.style.transform = `rotate(${hourDegrees}deg)`


  }
setInterval(setDate, 1000)
