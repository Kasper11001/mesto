let popup = document.querySelector('.popup');
let main = document.querySelector('.main');
let profile = main.querySelector('.profile');
let popupCloseIcon = popup.querySelector('.popup__close-icon');
let profileEditBtn = profile.querySelector('.profile__edit-button');
let formField = popup.querySelectorAll('.form__field');
let profileName = main.querySelector('.profile__name');
let profileAbout = main.querySelector('.profile__about');

formField[0].setAttribute('placeholder', profileName.textContent);
formField[1].setAttribute('placeholder', profileAbout.textContent);

console.log(profileName.textContent);


 function switchPopup() {
  popup.classList.toggle('popup_opened');
 }

function qwe () {
  formField[0].removeAttribute('placeholder', '');
  formField[1].removeAttribute('placeholder', '');
}

popupCloseIcon.addEventListener('click', switchPopup);
profileEditBtn.addEventListener('click', switchPopup);
