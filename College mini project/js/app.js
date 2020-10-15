const UInotes = document.querySelector('#notes')
window.addEventListener('keydown', (e) => {
  playNotes(e)
  playAnim(e)
})
window.addEventListener('keyup',(e) => {
  resetAnim(e)
})
function playNotes(e) {
  const notes = document.querySelector(`audio[data-key="${e.key.toLowerCase()}"]`)
  if (!notes) return
  notes.currentTime = 0
  notes.play()
}

function playAnim(e){

const currentKey=document.getElementById(e.key)
currentKey.style.animationName="anim"

}
function resetAnim(e){
  const currentKey=document.getElementById(e.key)
  currentKey.style.animationName="none"
}