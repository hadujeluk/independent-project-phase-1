
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
  
    
  });
  document.addEventListener('DOMContentLoaded', function() {
    // Fetch data from db.json
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
  
  });
  
  