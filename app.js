const navbar = document.querySelector('.navbar');
const navBtn = document.querySelector('.nav-btn');
const links = document.querySelector('.links');
const linksContainer = document.querySelector('.links-container');
const linksHeight = links.getBoundingClientRect().height;

window.addEventListener('scroll', () => {
  if (window.scrollY > 65) {
    navbar.classList.add('fixed-nav');
  } else {
    navbar.classList.remove('fixed-nav');
  }
});

navBtn.addEventListener('click', () => {
  const containerHeight = linksContainer.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

links.addEventListener('click', (e) => {
  e.preventDefault();
  const linkName = e.target.getAttribute('href').slice(1);
  const element = document.getElementById(linkName);
  let yValue = element.offsetTop;
  console.log(yValue);
  window.scrollTo(0, yValue);
});
