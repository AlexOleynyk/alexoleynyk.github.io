console.log('Привет');

var formDiv = document.querySelector('.write-us');
var form = document.querySelector('.write-us form');
var writeUsButton = document.querySelector('.about-map a.btn');
var popupOverlay = document.querySelector('.popup-overlay');
var closeForm = formDiv.querySelector('.close-form');
var submitForm = document.querySelector('.write-us button[name=button]');

writeUsButton.addEventListener('click', function(e){
  e.preventDefault();
  formDiv.classList.add('write-us-show');
  popupOverlay.classList.add('popup-overlay-show');
});

closeForm.addEventListener('click', function(e){
  e.preventDefault();
  formDiv.classList.remove('write-us-show');
  popupOverlay.classList.remove('popup-overlay-show');
  formDiv.classList.remove('write-us-error');
});

popupOverlay.addEventListener('click', function(e){
  e.preventDefault();
  formDiv.classList.remove('write-us-show');
  popupOverlay.classList.remove('popup-overlay-show');
  formDiv.classList.remove('write-us-error');
    mapDiv.classList.remove('fullmap-container-show');
});

form.addEventListener('submit', function(e){
  e.preventDefault();
  var name = form.querySelector('[name=name]')
  var email = form.querySelector('[name=email]')

  console.log(name);
});

submitForm.addEventListener('click', function(e){
  e.preventDefault();
  var name = form.querySelector('[name=name]').value;
  var email = form.querySelector('[name=email]').value;
  // console.log(name.value);



  if (!name || !email) {
    // alert('Введите имя и корректный Email');
    formDiv.classList.add('write-us-error');
  }  else form.submit();
});

/* map */

var mapDiv = document.querySelector('.fullmap-container');
var map = document.querySelector('.minimap');
var closeMap = mapDiv.querySelector('.close-form');

map.addEventListener('click', function(e){
  e.preventDefault();
  mapDiv.classList.add('fullmap-container-show');
  popupOverlay.classList.add('popup-overlay-show');
});

closeMap.addEventListener('click', function(e){
  e.preventDefault();
  mapDiv.classList.remove('fullmap-container-show');
  popupOverlay.classList.remove('popup-overlay-show');
});

/*  slider 1  */

var heroTriggers = document.querySelectorAll('.slider-dot');
var heroSlides = document.querySelectorAll('.hero-slide');
var heroNext = document.querySelector('.next-slide');
var heroPrev = document.querySelector('.prev-slide');
var heroCount = heroSlides.length;
var currentSlide = 0;

console.log(heroSlides);

for (let i = 0; i < heroCount; i++) {
  let trigger = heroTriggers[i];
  let slide = heroSlides[i];
  trigger.addEventListener('click', function(e){
    for (let j = 0; j < heroCount; j++){
      heroTriggers[j].classList.remove('slider-dot-active');
      heroSlides[j].classList.remove('hero-slide-active');
    }
    trigger.classList.add('slider-dot-active');
    slide.classList.add('hero-slide-active');
  });
}

heroNext.addEventListener('click', function(e){
  var prevSlide = 0;
  if (currentSlide >= heroCount - 1) {
    currentSlide = 0;
    prevSlide = heroCount - 1;
  } else {
    prevSlide = currentSlide;
    currentSlide++;

  }

  console.log(currentSlide, prevSlide);

  heroTriggers[prevSlide].classList.remove('slider-dot-active');
  heroSlides[prevSlide].classList.remove('hero-slide-active');

  heroTriggers[currentSlide].classList.add('slider-dot-active');
  heroSlides[currentSlide].classList.add('hero-slide-active');

});

heroPrev.addEventListener('click', function(){
  var prevSlide = 0;
  if (currentSlide < 1) {
    currentSlide = heroCount - 1;
    prevSlide = 0;
  } else {
    prevSlide = currentSlide;
    currentSlide--;
  }

  heroTriggers[prevSlide].classList.remove('slider-dot-active');
  heroSlides[prevSlide].classList.remove('hero-slide-active');

  heroTriggers[currentSlide].classList.add('slider-dot-active');
  heroSlides[currentSlide].classList.add('hero-slide-active');

});

/*  slider 2  */

var triggers = document.querySelectorAll('.slider-trigger');
var slides = document.querySelectorAll('.slider-slide');

for (let i = 0; i < triggers.length; i++) {
  let trigger = triggers[i];
  let slide = slides[i];
  trigger.addEventListener('click', function(e){
    for (let j = 0; j < triggers.length; j++){
      triggers[j].classList.remove('slider-trigger-active');
      slides[j].classList.remove('slider-slide-active');
    }
    trigger.classList.add('slider-trigger-active');
    slide.classList.add('slider-slide-active');
  });
}
