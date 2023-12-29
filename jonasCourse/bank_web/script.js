'use strict';

///////////////////////////////////////
// Modal window
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
// Buttons elements
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
// Operations section elements
const operationsTabBtns = document.querySelectorAll('.operations__tab');
const operationContainerTab = document.querySelector('.operations__tab-container');
const tabsContents = document.querySelectorAll('.operations__content');
// Navigations elements
const nav = document.querySelector('.nav');
const navigation = document.querySelector('.nav__links');
const header = document.querySelector('.header');
// section elements
const allSections = document.querySelectorAll('.section');
// Lazy loading images
const imageTarget = document.querySelectorAll('img[data-src]');
// Slide elemts
const slides = document.querySelectorAll('.slide');
const sldBtnLft = document.querySelector('.slider__btn--left');
const sldBtnRth = document.querySelector('.slider__btn--right');
const dottedBtn = document.querySelector('.dots');
///////////////////////////////////////////////////////////////

/////////////////////FUNCTIONS////////////////////
// Opening and Closing modal function
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal))

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/////////////////////////////////////////////////////
// Page Navigation and Scroll effect
btnScrollTo.addEventListener('click', function (e) {
  section1.scrollIntoView({
    behavior: 'smooth'
  })
})
// 1. Add event listener to a common parent element
// 2. Determine what element originated the event
navigation.addEventListener('click', function (e) {
  e.preventDefault();
  // sifting the parent element from the child elements
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth'
    });
  }
});

//////////////////////////////////////////////////////
// Tabbing functionality
operationContainerTab.addEventListener('click', function (e) {
  const clickedTab = e.target.closest('.operations__tab');
  // Guard clause for producing errors
  if (!clickedTab) return;
  // Active tab
  operationsTabBtns.forEach(tab => tab.classList.remove('operations__tab--active'));
  clickedTab.classList.add('operations__tab--active');
  // Making content area visible
  tabsContents.forEach(tabCon => tabCon.classList.remove('operations__content--active'));
  tabsContents[+clickedTab.dataset.tab - 1].classList.add('operations__content--active');
})

////////////////////////////////////////////////////////
// Navigation hover effect
const fadeInOut = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const linkSiblings = link.closest('.nav__links').querySelectorAll('.nav__link');

    linkSiblings.forEach(li => {
      if (li !== link) li.style.opacity = this
    })
  }
}
// explicity calling the "this" keyword using the "bind" method.
// this allow us to pass an "argument" into fadeInOut function.
// It's a work-around.
navigation.addEventListener('mouseover', fadeInOut.bind(0.5));
navigation.addEventListener('mouseout', fadeInOut.bind(1));

////////////////////////////////////////////////////////
// implementing Scroll event for our sticky navigation
// using InterSectionObserver API
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky')
}

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  rootMargin: `-${navHeight}px`,
  threshold: 0
});

headerObserver.observe(header);

/////////////////////////////////////////////////////////////
// Reveal section animation
const revealSections = function (entries, observer) {
  const [theEntry] = entries;
  // using guard clause
  if (!theEntry.isIntersecting) return;
  // but if isIntersecting
  theEntry.target.classList.remove('section--hidden')
  observer.unobserve(theEntry.target);
}

const sectionObserver = new IntersectionObserver(revealSections, {
  root: null,
  threshold: 0.15
});

allSections.forEach(function (sect) {
  sectionObserver.observe(sect);
  // sect.classList.add('section--hidden')
})

// /////////////////////////////////////////////////////
// Lazy loading images
const lazyLoad = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  // replace src with data-src
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img')
  });

  observer.unobserve(entry.target);
}

const imgObserver = new IntersectionObserver(lazyLoad, {
  root: null,
  rootMargin: '200px',
  threshold: 0
});

imageTarget.forEach(imgTar => imgObserver.observe(imgTar));

// ////////////////////////////////////////////////////////
// testimonial slider functionality
const theSlider = function() {

  let currentSlide = 0;
  const lenOfSlide = slides.length;
  
  const dotgenerator = function () {
    slides.forEach(function (_, index) {
      dottedBtn.insertAdjacentHTML('beforeend',
      `<button class="dots__dot" data-slide=${index}></button>`)
    })
  }
  
  const activeDot = function (slide) {
    document.querySelectorAll('.dots__dot').forEach(dot => dot.classList.remove('dots__dot--active'));
    
    document.querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add('dots__dot--active');
  }
  
  const moveSlide = function (slideCount) {
    slides.forEach((slide, index) => (slide.style.transform = `translateX(${100 * (index - slideCount)}%)`));
  }
  
  const nxtSlide = function () {
    if (currentSlide === lenOfSlide - 1) currentSlide = 0;
    else currentSlide++;
    moveSlide(currentSlide);
    activeDot(currentSlide);
  }
  
  const prevSlide = function () {
    if (currentSlide === 0) currentSlide = lenOfSlide - 1;
    else currentSlide--;
    moveSlide(currentSlide);
    activeDot(currentSlide);
  }
  
  // Intiallizing the slider function
  const initFunc = function () {
    moveSlide(currentSlide);
    dotgenerator();
    activeDot(currentSlide);
  }
  
  initFunc();
  
  // right btn functionality
  sldBtnRth.addEventListener('click', nxtSlide);
  sldBtnLft.addEventListener('click', prevSlide);
  // keydown presses (right/left) arrow keys
  document.addEventListener('keydown', function (e) {
    e.key === 'ArrowLeft' && prevSlide();
    e.key === 'ArrowRight' && nxtSlide();
    
  })
  // dotted button functionality
  dottedBtn.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const {
        slide
      } = e.target.dataset;
      moveSlide(slide);
      activeDot(slide);
    }
  });
};
// Calling theSilder function
theSlider();
  // /////////////////////////////////////////