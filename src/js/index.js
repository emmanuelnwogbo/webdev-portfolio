import '../sass/main.scss';
const overlay = document.getElementById('overlay');
const aboutBtn = document.getElementById('header__about--link');
const contactBtn = document.getElementById('header__contact--link');
const aboutBackBtn = document.getElementById('header-2--backbtn');
const overLayCheckBox = document.getElementById('overlay--control');
const contactSection = document.getElementById('contact--section');
const aboutCheckBox = document.getElementById('header--checkbox');

window.onload = function () {

}

aboutBtn.addEventListener('click', function (e) {
  e.preventDefault();
  aboutCheckBox.checked = true;
})

aboutBackBtn.addEventListener('click', function (e) {
  e.preventDefault();
  aboutCheckBox.checked = false;
})

contactBtn.addEventListener('click', function (e) {
  e.preventDefault();
  overLayCheckBox.checked = true;
})

contactSection.addEventListener('click', function () {
  overLayCheckBox.checked = true;
});

overlay.addEventListener('click', function () {
  overLayCheckBox.checked = false;
})