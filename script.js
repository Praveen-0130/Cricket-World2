// Subscribe button alert
function alertSubscribe() {
  alert("Thanks for subscribing to Cricket World!");
}

// Log info about players loaded
for (let i = 1; i <= 100; i++) {
  console.log(`Loaded player ${i} info`);
}

// Countdown timers for upcoming matches
function initializeMatchCountdowns() {
  const matches = document.querySelectorAll('.match');

  matches.forEach((match) => {
    // Create countdown element
    const countdownEl = document.createElement('p');
    countdownEl.classList.add('countdown');
    match.appendChild(countdownEl);

    // Get the match date text
    const dateParagraph = Array.from(match.querySelectorAll('p')).find(p =>
      p.textContent.startsWith('Date:')
    );

    if (!dateParagraph) return;

    const matchDateStr = dateParagraph.textContent.replace('Date:', '').trim();
    const matchDate = new Date(`${matchDateStr}T00:00:00`);

    // Update countdown every second
    const intervalId = setInterval(() => {
      const now = new Date();
      const diff = matchDate - now;

      if (diff <= 0) {
        countdownEl.textContent = 'Match started!';
        clearInterval(intervalId);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      countdownEl.textContent = `Starts in: ${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
  });
}

// Theme Toggle Logic
document.getElementById("theme-toggle").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  document.body.classList.toggle("light-mode");
});

function tossCoin() {
  const outcome = Math.random() < 0.5 ? "Heads - Team A bats first!" : "Tails - Team B bats first!";
  document.getElementById("toss-result").innerText = outcome;
}


// Player search filter
function initializePlayerSearch() {
  const container = document.querySelector('.featured-players .container');
  const searchDiv = document.createElement('div');
  searchDiv.classList.add('search-container');
  searchDiv.innerHTML = `
    <input type="text" id="playerSearch" placeholder="Search players by name..." />
  `;
  container.insertBefore(searchDiv, container.querySelector('.players-wrapper'));

  const input = document.getElementById('playerSearch');
  const players = container.querySelectorAll('.player');

  input.addEventListener('input', () => {
    const filter = input.value.toLowerCase();
    players.forEach(player => {
      const name = player.querySelector('h3').textContent.toLowerCase();
      player.style.display = name.includes(filter) ? '' : 'none';
    });
  });
}

// Smooth scroll for nav links
function initializeSmoothScroll() {
  const navLinks = document.querySelectorAll('nav ul li a');

  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
}

// Initialize all functions after DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
  initializeMatchCountdowns();
  initializePlayerSearch();
  initializeSmoothScroll();
});

window.addEventListener("DOMContentLoaded", () => {
  const ball = document.querySelector(".rolling-ball-container");

  // Remove ball after animation
  if (ball) {
    setTimeout(() => {
      ball.style.opacity = "0";
      ball.style.display = "none";
    }, 5000); // match animation duration
  }
});
function createFloatingItem() {
  const container = document.querySelector(".float-container");
  const item = document.createElement("img");
  item.src = Math.random() > 0.5 ? "assets/ball.svg" : "assets/bat.svg";
  item.className = "float-item";
  item.style.left = `${Math.random() * 100}vw`;
  item.style.animationDuration = `${3 + Math.random() * 4}s`;
  container.appendChild(item);

  // Remove item after animation completes
  setTimeout(() => container.removeChild(item), 7000);
}

// Generate floating items every 400ms
setInterval(createFloatingItem, 400);

// Top Scorer Widget
function displayTopScorer() {
  const widget = document.createElement('div');
  widget.className = 'top-scorer-widget';
  widget.style.position = 'fixed';
  widget.style.bottom = '20px';
  widget.style.right = '20px';
  widget.style.backgroundColor = '#222';
  widget.style.color = '#fff';
  widget.style.padding = '15px';
  widget.style.borderRadius = '8px';
  widget.style.boxShadow = '0 0 10px rgba(0,0,0,0.3)';
  widget.style.zIndex = '9999';
  widget.innerHTML = `
    <strong>🏆 Top Scorer This Week</strong><br>
    Rohit Sharma<br>
    <small>Runs: 372</small>
  `;

  document.body.appendChild(widget);

  // Auto-hide after 10 seconds
  setTimeout(() => {
    widget.remove();
  }, 10000);
}

window.addEventListener('load', displayTopScorer);
// 🧠 Match Predictor Feature
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("predictor-form");
  const resultDiv = document.getElementById("prediction-result");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const selected = form.team.value;
    const feedback = [
      "Interesting choice!",
      "You're backing a strong team!",
      "Let’s see if your prediction comes true!",
      "Cricket is unpredictable, but good luck!"
    ];
    const randomMessage = feedback[Math.floor(Math.random() * feedback.length)];

    resultDiv.innerHTML = `
      <p>You predicted: <strong>${selected}</strong></p>
      <p>${randomMessage}</p>
    `;

    form.reset();


// 🔝 Show/Hide Back-to-Top Button
window.addEventListener('scroll', () => {
  const topButton = document.getElementById('back-to-top');
  if (window.scrollY > 300) {
    topButton.style.display = 'block';
  } else {
    topButton.style.display = 'none';
  }
});

// 🔝 Smooth scroll to top
document.getElementById('back-to-top').addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'

  });
});

