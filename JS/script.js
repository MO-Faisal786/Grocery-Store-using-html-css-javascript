
// get element for searching 
const searchBtn = document.getElementById("search-btn");
const searchForm = document.querySelector('.search-form');

// get Element for shopping-cart 
const cartBtn = document.querySelector("#cart-btn");
const shoppingCart = document.querySelector(".shopping-cart");

// get element for log in 
const loginBtn = document.querySelector("#login-btn");
const loginForm = document.querySelector(".login-form");

// get element for menu bar
const menuBtn = document.querySelector('#menu-btn');
const menuBar = document.querySelector(".navbar");

// event for search 
searchBtn.addEventListener("click", () => {
  searchForm.classList.toggle("active");
  shoppingCart.classList.remove("active");
  loginForm.classList.remove('active');
  menuBar.classList.remove("active");
})

// event for shopping-cart 
cartBtn.addEventListener("click", () => {
  shoppingCart.classList.toggle("active");
  searchForm.classList.remove("active");
  loginForm.classList.remove('active');
  menuBar.classList.remove("active");
})

// event for lo in form 
loginBtn.onclick = () => {
  loginForm.classList.toggle('active');
  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active")
  menuBar.classList.remove("active");
}

// click on window to remove 
window.onscroll = () => {
  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active")
  loginForm.classList.remove('active');
  menuBar.classList.remove("active");
}

menuBtn.addEventListener("click", () => {
  menuBar.classList.toggle("active");
  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active")
  loginForm.classList.remove('active');
})

var swiper = new Swiper(".product-slider", {
  loop:false,
  spaceBetween: 20,
  autoplay: {
      delay: 7500,
      disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});
var swiper = new Swiper(".review-slider", {
  loop: false,
  spaceBetween: 20,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});


