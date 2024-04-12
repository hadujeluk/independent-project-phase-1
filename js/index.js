const navbarToggle = document.querySelector('[data-collapse-toggle="navbar-default"]');
const navbar = document.getElementById('navbar-default');

navbarToggle.addEventListener('click', function() {
    const expanded = this.getAttribute('aria-expanded') === 'true' || false;
    this.setAttribute('aria-expanded', !expanded);
    navbar.classList.toggle('hidden');
});

fetch('db.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

document.addEventListener('DOMContentLoaded', function() {
  fetch('db.json')
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });

  const buyButton = document.querySelector('.buy-button');
  buyButton.addEventListener('click', function() {
    alert('Buy button clicked!');
  });

  const addToBasketButton = document.querySelector('.add-to-basket-button');
  addToBasketButton.addEventListener('click', function() {
    alert('Add to basket button clicked!');
  });

  const getStartedButton = document.querySelector('.get-started-button');
  getStartedButton.addEventListener('click', function() {
    alert('Get Started button clicked!');
  });

  const galleryButton = document.querySelector('.gallery-button');
  galleryButton.addEventListener('click', function() {
    // Redirect to the gallery page
    window.location.href = 'gallery.html'; // Change 'gallery.html' to the actual URL of your gallery page
  });
});
