let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

document.onscroll = function() {scrollFunction()};

function scrollFunction() {
  // console.log("scrolled");
  if (document.documentElement.scrollTop > 160 || document.body.scrollTop > 160) {
    // console.log("disappear");
    document.getElementById("topbar").style.height = "0px";
    document.getElementById("tbtext").style.opacity = "0";
    document.getElementById("tbimg").style.opacity = "0";
  } else {
    document.getElementById("topbar").style.height = "160px";
    document.getElementById("tbtext").style.opacity = "1";
    document.getElementById("tbimg").style.opacity = "1";
    // console.log("appear");
  }
}
window.transitionToPage = function(href) {
  document.getElementById("overlay").style.height = "100%"
  setTimeout(function() { 
      window.location.href = href
  }, 300)
}

document.addEventListener('DOMContentLoaded', function(event) {
  document.getElementById("overlay").style.height = 0
})

document.getElementById("body").onscroll = function myFunction() {  
  var scrolltotop = document.scrollingElement.scrollTop;
  var targets = document.querySelectorAll(".main1");
  targets.forEach(element => {
    var target = element;
    var xvalue = "center";
    var factor = 0.5;
    var yvalue = scrolltotop * factor;
    target.style.backgroundPosition = xvalue + " " + yvalue + "px";
  });
}

function topbar() {
  // console.log("triggered");
  var x = document.getElementById("mtbbg");
  var y = document.getElementById("mtbin");
  var li = document.getElementById("mtbli");
  if (x.style.opacity === "1") {
    x.style.opacity = 0;
    x.style.width = 0;
    li.style.display="none";
    // x.style.display = "none";
    y.classList.remove("show");
    // console.log("gone");
  } else {
    x.style.opacity = 1;
    x.style.width = "100%";
    li.style.display="block";
    // x.style.display = "block";
    y.classList.add("show");
    // console.log("open");
  }
}

