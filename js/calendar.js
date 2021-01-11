$(document).ready(function(){
	$('.slider').slick({
		slidesToShow:3,
		
	
});
})



/*
let menu = ['ноябрь', 'декабрь', 'январь']
let mySwiper = new Swiper('.swiper-container', {
  slidesPerView: 5,
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (menu[index]) + '</span>';
        },
    },
  prevArrow: '<img src="img/icon/left.jpg">',
    nextArrow: '<img src="img/icon/right.jpg">'
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
      },  
})
*/
/*let btnMonth = document.getElementById("month");
let btnItem = btnMonth.getElementsByClassName("month__name");
for (let i = 0; i < btnItem.length; i++) {
  btnItem[i].addEventListener("click", function(){
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
*/
/*
let months = document.querySelectorAll('.month__name');
let cards = document.querySelectorAll('.calendar-card');
for(let  month of months){
	 month.onclick = function(){
		 month.classList.toggle('calendar__cardactive');
		 month.classList.toggle('calendar__card');
		 
	};
};
*/

/*

*/



 /*   
    let width = 130; // ширина картинки
    let count = 3; // видимое количество изображений

    let list = pagination.querySelector('.month');
    let listElems = pagination.querySelectorAll('.month__name');

    let position = 0; // положение ленты прокрутки

    pagination.querySelector('.pagination__left').onclick = function() {
      // сдвиг влево
      position += width * 1;
      // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
      position = Math.min(position, 0)
      list.style.marginLeft = position + 'px';
    };

    pagination.querySelector('.pagination__right').onclick = function() {
      // сдвиг вправо
      position -= width * 1;
      // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
      position = Math.max(position, -width * (listElems.length - count));
      list.style.marginLeft = position + 'px';
    };
    */
/*
var monthIndex = 1;
showIndex(monthIndex);

function minusMonth() {
    showIndex(monthIndex -= 1);  
}

function plusMonth() {
    showIndex(monthIndex += 1);
}

function currentSlide(month) {
    showIndex(monthIndex = month);
}

function showIndex(month){
	var i;
    var slides = document.getElementsByClassName("month__name");
    
    if (month > slides.length) {
      slideIndex = 1
    }
    if (month < 1) {
        slideIndex = slides.length
    }
    for (i = 3; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[monthIndex + 1].style.display = "block";
    
}
*/