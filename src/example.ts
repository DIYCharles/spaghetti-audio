import SpaghettiAudio from '@modules/spaghetti-audio'

const spaghettiAudio = new SpaghettiAudio({
  withLocalStorage: true,
  withClearButton: true,
  spaghettiWidth: 15,
  hitboxSize: 80,
  viscosity: 90,
  damping: 0.15,
  debug: true,
})

document.body.appendChild(spaghettiAudio.canvas)
document.body.appendChild(spaghettiAudio.ui)
