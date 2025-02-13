/**************************************************/
/* section1 */
/**************************************************/

/* 버튼 클릭해서 사진 넘어가도록 */
var slideIndex = 1;

/* 시작페이지가 사진1이 되도록 */
window.onload=function(){
    showSlides(slideIndex);
    setInterval(function(){
      plusSlides(1);
    },3000);
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function move(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("Slide");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
      dots[i].classList.remove("active-dot");

  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
 dots[slideIndex-1].classList.add("active-dot");
  slides[slideIndex-1].style.display = "block";  
  //dots[slideIndex-1].className += " active";

}
