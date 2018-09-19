window.onload = function () {
  //console.log(this)
}
import '../sass/main.scss';
const aboutBtn = document.getElementById('header__about--link');
const aboutBackBtn = document.getElementById('header-2--backbtn');
const aboutCheckBox = document.getElementById('header--checkbox');
aboutBtn.addEventListener('click', function (e) {
  e.preventDefault();
  aboutCheckBox.checked = true;
})

aboutBackBtn.addEventListener('click', function (e) {
  e.preventDefault();
  aboutCheckBox.checked = false;
})