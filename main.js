// It is always helpful to use comments in your code!

var onHover = document.getElementsByClassName('main-menu-labels');
var showMenu = document.getElementsByClassName('sub-menu');


function openOne() {
  showMenu[0].classList.toggle('show');
}

onHover[0].addEventListener('mouseenter', openOne);
onHover[0].addEventListener('mouseleave', openOne);


function openTwo() {
  showMenu[1].classList.toggle('show');
}

onHover[1].addEventListener('mouseenter', openTwo);
onHover[1].addEventListener('mouseleave', openTwo);


function openThree() {
  showMenu[2].classList.toggle('show');
}

onHover[2].addEventListener('mouseenter', openThree);
onHover[2].addEventListener('mouseleave', openThree);
