/**
 * Carousel Js
 */

 var myCarousel = document.querySelector('#carouselExampleCaptions')
 var carousel = new bootstrap.Carousel(myCarousel, { interval: 333000, wrap: true })
 var slides = document.querySelectorAll('.carousel .carousel-item')
 
 slides.forEach((el) => {
   // number of slides per carousel-item
   let minPerSlide = slides.length
   if(minPerSlide>3){
     minPerSlide=3;
   }
   let next = el.nextElementSibling
   for (var i = 1; i < minPerSlide; i++) {
     if (!next) {
       // wrap carousel by using first child
       next = slides[0]
     }
     let cloneChild = next.cloneNode(true)
     el.appendChild(cloneChild.children[0])
     next = next.nextElementSibling
   }
 })
 