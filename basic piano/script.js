// Map notes to sound file paths
const noteToFile = {
  C: "sounds/C.mp3",
  D: "sounds/D.mp3",
  E: "sounds/E.mp3",
  F: "sounds/F.mp3",
  G: "sounds/G.mp3",
  A: "sounds/A.mp3",
  B: "sounds/B.mp3",

    // Black keys (NEW!)
  "C#": "sounds/Ab3.mp3",
  "D#": "sounds/Bb3.mp3",
  "F#": "sounds/Db3.mp3", 
  "G#": "sounds/Eb3.mp3",
  "A#": "sounds/Gb3.mp3"


};

// Play sound for a given note
function playNote(note) {
  const file = noteToFile[note];
  if (!file) return;
  const audio = new Audio(file);
  // audio.currentTime = 0;
  audio.play();
}

// Click support
document.querySelectorAll(".key").forEach((key) => {
  key.addEventListener("click", () => {
    const note = key.dataset.note;
    playNote(note);
  });
});

// Optional: keyboard support (qwerty -> notes)
const keyToNote = {
  q: "C",
  w: "D",
  e: "E",
  r: "F",
  t: "G",
  y: "A",
  u: "B",

   // Black keys  
  a: "C#",   s: "D#",          f: "F#",
  g: "G#",   h: "A#"
};

window.addEventListener("keydown", (event) => {
  const note = keyToNote[event.key.toLowerCase()];
  if (note) {
    playNote(note);
    const button = document.querySelector(`.key[data-note="${note}"]`);
    if (button) {
      button.classList.add("active");
      setTimeout(() => button.classList.remove("active"), 100);
    }
  }
});
