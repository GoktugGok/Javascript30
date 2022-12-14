const secondHand = document.querySelector('.short-hand')
const minsHands = document.querySelector('.middle-hand')
const hourHand = document.querySelector('.long-hand')
const dijital = document.querySelector('.dijital')
function setDate(){
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`
    
    const mins = now.getMinutes()
    const minsDegrees = ((mins / 60) * 360 ) + 90;
    minsHands.style.transform = `rotate(${minsDegrees}deg)`

    const hour = now.getHours()
    const hourDegrees = ((hour / 12) * 360 ) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`

    dijital.innerHTML = `${hour} : ${mins} : ${seconds} `
}
setInterval(setDate, 1000);