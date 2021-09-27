let popup = document.querySelector('.popup');
let form = popup.querySelector('.form');
let main = document.querySelector('.main');
let profile = main.querySelector('.profile');
let popupCloseIcon = popup.querySelector('.popup__close-icon');
let profileEditBtn = profile.querySelector('.profile__edit-button');
let formField = popup.querySelectorAll('.form__field');
let profileName = main.querySelector('.profile__name');
let profileAbout = main.querySelector('.profile__about');
let safeBtn = popup.querySelector('.form__safe-btn');

function switchPopup() {
  profileEditBtn.classList.toggle('profole__edit-button_clicked');
  popup.classList.toggle('popup_opened');
  formField[0].value = profileName.textContent;
  formField[1].value = profileAbout.textContent;
 }

function safeInfo(evt) {
  evt.preventDefault()
  profileName.textContent = formField[0].value;
  profileAbout.textContent = formField[1].value;
  switchPopup();
}

popupCloseIcon.addEventListener('click', switchPopup);
profileEditBtn.addEventListener('click', switchPopup);
form.addEventListener('submit', safeInfo);



