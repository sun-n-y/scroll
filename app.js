const navBtn = document.querySelector('.nav-btn');
const links = document.querySelector('.links');
const linksContainer = document.querySelector('.links-container');

navBtn.addEventListener('click', () => {
  const linksHeight = links.getBoundingClientRect().height;
  const containerHeight = linksContainer.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});
