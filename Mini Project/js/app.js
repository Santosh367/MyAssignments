const UInotes = document.querySelector('#notes')

window.addEventListener('keydown', (e) => {
  playNotes(e.key)
})

function playNotes(key) {
  const notes = document.querySelector(`audio[data-key="${key.toLowerCase()}"]`)
  if (!notes) return
  notes.currentTime = 0
  notes.play()
}