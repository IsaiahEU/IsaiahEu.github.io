// script.js

// 1. Live Search Filter for Product Catalog
const searchInput = document.querySelector('#catalog input[type="text"]');
const productCards = document.querySelectorAll('.product-card');


  productCards.forEach(card => {
    const title = card.querySelector('h3').textContent.toLowerCase();
    if (title.includes(searchValue)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});

// 2. Bulk Order Form Submission (simple alert confirmation)
const bulkOrderForm = document.querySelector('#bulk-order form');

bulkOrderForm.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Bulk order added! Please proceed to checkout.');
  this.reset();
});

// 3. Customer Account Login (Fake login for demo)
const loginForm = document.querySelector('#account form');

loginForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const email = this.email.value;
  const password = this.password.value;

  if (email && password) {
    alert(`Welcome back, ${email}!`);
    this.reset();
  } else {
    alert('Please enter your email and password.');
  }
});

// 4. Request a Quote (simple success message)
const quoteForm = document.querySelector('#quote form');

quoteForm.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Your quote request has been submitted. Our team will contact you soon!');
  this.reset();
});

// 5. Checkout Form (basic validation)
const checkoutForm = document.querySelector('#checkout form');

checkoutForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const billing = this.billing.value;
  const payment = this.payment.value;

  if (billing && payment) {
    alert('Order placed successfully! Thank you for your purchase.');
    this.reset();
  } else {
    alert('Please complete all checkout fields.');
  }
});

// 6. Contact Form Submission
const contactForm = document.querySelector('#contact form');

contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for contacting us! We will get back to you soon.');
  this.reset();
});

// 7. Smooth Scrolling for Navigation Links
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

