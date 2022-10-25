window.addEventListener('keydown', playSound)
function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const box = document.querySelector(`.box[data-key="${e.keyCode}"]`)
    if(!audio) return;
    audio.currentTime = 0;
    audio.play()
    box.classList.add('playing')
}
function removeTransition(e){
    if(e.propertyName !== 'transform') return;

    this.classList.remove('playing')
}
const boxs = document.querySelectorAll('.box')
boxs.forEach(box => box.addEventListener('transitionend',removeTransition))