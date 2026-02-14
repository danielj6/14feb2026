const input = document.getElementById("dateInput");
const msg = document.getElementById("lockMsg");

input.addEventListener("input", () => {
  if (input.value.length === 10) {
    if (input.value === "04/07/2025") {
      show("screen-love");
    } else {
      msg.innerText = "Intenta de nuevo mi amor";
      input.value = "";
    }
  }
});

function show(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function goToEnvelope() {
  show("screen-envelope");
}

function openLetter() {
  document.getElementById("letter").style.display = "block";
  document.getElementById("clickText").style.display = "none";
}

function goToFinal() {
  show("screen-final");
  hearts();
}

// Lluvia de corazones
function hearts() {
  setInterval(() => {
    const heart = document.createElement("span");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (16 + Math.random()*20) + "px";
    heart.style.animationDuration = (4 + Math.random()*3) + "s";
    document.querySelector(".hearts").appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  }, 300);
}

// Contador en tiempo real
const start = new Date("2025-10-04T00:00:00");
setInterval(() => {
  const now = new Date();
  const diff = now - start;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
  const minutes = Math.floor(diff / (1000 * 60)) % 60;
  const seconds = Math.floor(diff / 1000) % 60;

  document.getElementById("counter").innerText =
    `${days} días · ${hours} horas · ${minutes} min · ${seconds} seg`;
}, 1000);