  export const addProfileForm = document.forms.add;
  export const addNewCardForm = document.forms.place;
  export const profileAddBtn = document.querySelector('.profile__add-button');
  export const profileEditBtn = document.querySelector('.profile__edit-button');
  export const inputName = document.forms.add.name;
  export const inputProfession = document.forms.add.profession;
  export const containerSelector = '.cards';
  export const initialCards = [
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
export const validationConfig = {
  formSelector: '.form__fields',
  inputSelector: '.form__field',
  submitButtonSelector: '.form__safe-btn',
  inactiveButtonClass: 'form__safe-btn_unactive',
  inputErrorClass: 'error',
  errorClass: 'form__field_invalid'
}
