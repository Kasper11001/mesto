  import { Card } from "./Card.js";
  import { FormValidator } from "./FormValidator.js";
  const profileAddBtn = document.querySelector('.profile__add-button');
  const popupNewCard = document.querySelector('.popup-new-card');
  const popupEditProfile = document.querySelector('.popup-edit-profile');
  const profileEditBtn = document.querySelector('.profile__edit-button');
  const formEditProfile = document.querySelector('.form-edit-profile');
  const editProfileFormFields = formEditProfile.querySelectorAll('.form__field');
  const formFieldAddCard = document.querySelector('.form-add-card');
  const profileName = document.querySelector('.profile__name');
  const profileAbout = document.querySelector('.profile__about');
  const fieldsNewCards = formFieldAddCard.querySelectorAll('.form__field');
  const popupImage = document.querySelector('.popup-image');
  const imgBlock = document.querySelector('.popup-image__block');
  const imgText = document.querySelector('.popup-image__text');


 const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const validationConfig = {
  formSelector: '.form__fields',
  inputSelector: '.form__field',
  submitButtonSelector: '.form__safe-btn',
  inactiveButtonClass: 'form__safe-btn_unactive',
  inputErrorClass: 'error',
  errorClass: 'form__field_invalid'
}

const formValidator = new FormValidator(validationConfig);


initialCards.forEach((item) => {
  // Создадим экземпляр карточки
  const card = new Card(item,'#card-item-template', openPopupImage);
  // Создаём карточку и возвращаем наружу
  const cardElement = card.generateCard();

  // Добавляем в DOM
  document.querySelector('.cards').append(cardElement);
});

function closeByEscape(event) {
  const openedPopup = document.querySelector('.popup_opened');
    if (event.key === "Escape") {
      closePopup(openedPopup);
    }
}

function closePopup(openedPopup) {
  openedPopup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);
}

function openPopupEditProfile() {
  openPopup(popupEditProfile);
  editProfileFormFields[0].value = profileName.textContent;
  editProfileFormFields[1].value = profileAbout.textContent;
 }

function openPopupNewCard() {
 openPopup(popupNewCard);
}

function openPopupImage(name, link) {
  imgBlock.src = link;
  imgBlock.alt = name;
  imgText.textContent = name;
  openPopup(popupImage);
}

function safeInfo(evt) {
  evt.preventDefault();
  profileName.textContent = editProfileFormFields[0].value;
  profileAbout.textContent = editProfileFormFields[1].value;
  closePopup(popupEditProfile);
}

function safeNewCard(evt) {
  evt.preventDefault();
  const placeName = fieldsNewCards[0].value;
  const imageLink = fieldsNewCards[1].value;
  const data = {
  name:placeName,
  link:imageLink,
  }

  const card = new Card(data,'#card-item-template', openPopupImage);
  // Создаём карточку и возвращаем наружу
  const cardElement = card.generateCard();

  // Добавляем в DOM
  document.querySelector('.cards').prepend(cardElement);
  closePopup(popupNewCard);
  fieldsNewCards[0].value = "";
  fieldsNewCards[1].value = "";
  const button = document.querySelector('.form-new-card__safe-btn');
  button.disabled = true;
  button.classList.add('form__safe-btn_unactive');
}
profileAddBtn.addEventListener('click', openPopupNewCard);
formEditProfile.addEventListener('submit', safeInfo);
formFieldAddCard.addEventListener('submit', safeNewCard);
profileEditBtn.addEventListener('click', openPopupEditProfile);
const popups = document.querySelectorAll('.popup');
  popups.forEach((popup) => {
    popup.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close-icon')) {
        closePopup(popup);
      }
    });
  });

formValidator.enableValidation();
