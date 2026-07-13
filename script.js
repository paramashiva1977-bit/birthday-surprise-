function nextPage() {
  document.getElementById("welcome").style.display = "none";
  document.getElementById("passwordPage").style.display = "block";
}

function checkPassword() {
  let pass = document.getElementById("password").value.toLowerCase();

  if (pass === "sijo") {
    document.getElementById("passwordPage").style.display = "none";
    document.getElementById("loadingPage").style.display = "block";

    setTimeout(function () {
    document.getElementById("loadingPage").style.display = "none";
     document.getElementById("letterPage").style.display = "block";
      
    }, 3000);

  } else {
    document.getElementById("wrong").innerHTML =
      "❌ Oops... that's not the key to my heart ❤️";
  }
}
function showFinal() {
    document.getElementById("letterPage").style.display = "none";
    document.getElementById("finalPage").style.display = "block";
}
setInterval(function () {
    let heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "💗";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (15 + Math.random() * 20) + "px";

    document.body.appendChild(heart);

    setTimeout(function () {
        heart.remove();
    }, 6000);
}, 500);
// 🎵 Romantic music-box melody
function playRomanticMelody() {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    const ctx = new AudioCtx();

    const notes = [
        523.25, // C5
        659.25, // E5
        783.99, // G5
        880.00, // A5
        783.99, // G5
        659.25, // E5
        523.25  // C5
    ];

    notes.forEach((freq, index) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = "triangle";
        osc.frequency.value = freq;

        osc.connect(gain);
        gain.connect(ctx.destination);

        const start = ctx.currentTime + index * 0.35;

        gain.gain.setValueAtTime(0, start);
        gain.gain.linearRampToValueAtTime(0.15, start + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, start + 0.35);

        osc.start(start);
        osc.stop(start + 0.35);
    });
}

// Plays once on the first click
document.addEventListener("click", function () {
    playRomanticMelody();
}, { once: true });
