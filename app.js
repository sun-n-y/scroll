const navbar = document.querySelector('.navbar');
const navBtn = document.querySelector('.nav-btn');
const links = document.querySelector('.links');
const linksContainer = document.querySelector('.links-container');
const topLink = document.querySelector('.top-link');
const date = document.querySelector('#date');
const scrollLinks = document.querySelectorAll('.scroll-link');

date.textContent = new Date().getFullYear();

navBtn.addEventListener('click', () => {
  const linksHeight = links.getBoundingClientRect().height;
  const containerHeight = linksContainer.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 65) {
    navbar.classList.add('fixed-nav');
  } else {
    navbar.classList.remove('fixed-nav');
  }
  if (window.scrollY > 500) {
    topLink.classList.add('show-link');
  } else {
    topLink.classList.remove('show-link');
  }
});

scrollLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const id = e.currentTarget.getAttribute('href').slice(1);
    const element = document.getElementById(id);
    const navbarHeight = navbar.getBoundingClientRect().height;
    const linksHeight = linksContainer.getBoundingClientRect().height;
    let position = element.offsetTop - navbarHeight;

    if (!navbar.classList.contains('fixed-nav')) {
      position = position - navbarHeight;
    }

    if (linksHeight > 40) {
      position = position + linksHeight;
      linksContainer.style.height = 0;
    }

    window.scrollTo(0, position);
  });
});
