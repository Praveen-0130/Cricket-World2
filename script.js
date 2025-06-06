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
