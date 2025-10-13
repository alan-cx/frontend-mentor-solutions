const links = document.querySelectorAll('nav a');
const cards = document.querySelectorAll('.card');
let activities = [];

async function getData() {
  try {
    const resp = await fetch('./assets/data/data.json');
    activities = await resp.json();
    updateCards('weekly'); 
  } catch (error) {
    console.error('Error al cargar el JSON:', error);
  }
}

function updateCards(period) {
  activities.forEach((activity, index) => {
    const card = cards[index];
    const current = activity.timeframes[period].current;
    const previous = activity.timeframes[period].previous;
    const currentEl = card.querySelector('.current');
    const previousEl = card.querySelector('span');
    currentEl.textContent = `${current}hrs`;
    previousEl.textContent = `${previous}hrs`;
  });
}

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    links.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
    const period = link.textContent.toLowerCase();
    updateCards(period);
  });
});

getData();