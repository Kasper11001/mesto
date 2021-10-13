const profileAddBtn = document.querySelector('.profile__add-button');
const popupNewCard = document.querySelector('.popup-new-card');
const popupEditProfile = document.querySelector('.popup-edit-profile');
const popupNewCardCloseIcon = document.querySelector('.popup-new-card__close-icon');
const profileEditBtn = document.querySelector('.profile__edit-button');
const formEditProfile = document.querySelector('.form-edit-profile');
const formFieldEditProfile = formEditProfile.querySelectorAll('.form__field');
const formFieldAddCard = document.querySelector('.form-add-card');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const popupCloseIcon = document.querySelector('.popup-edit-close-icon');
const cardsList = document.querySelector('.cards');
const cardTemplate = document.querySelector('#card-item-template').content;
const newCardSafeBtn = document.querySelector('.form-new-card__safe-btn');
const fieldNewCard = formFieldAddCard.querySelectorAll('.form__field');
const popupImage = document.querySelector('.popup-image');
const popupImageCloseIcon = document.querySelector('.popup-image__close-icon');
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


const renderCard = (placeName, imageLink) => {
  const cardTemplateCopy = cardTemplate.cloneNode(true);
  const cardImg = cardTemplateCopy.querySelector('.card__image');
  const cardLike = cardTemplateCopy.querySelector('.card__like');
  const deleteIcon = cardTemplateCopy.querySelector('.card__delete-icon');
  cardImg.setAttribute('src', imageLink);
  const cardTitle = cardTemplateCopy.querySelector('.card__title');
  cardTitle.textContent = placeName;
  cardsList.prepend(cardTemplateCopy);
  cardImg.addEventListener('click', function () {
     switchPopupImage();
     imgBlock.setAttribute('src', imageLink);
     imgText.textContent = placeName;
   });
  cardLike.addEventListener('click', function (evt) {
    const eventTarget = evt.target;
    eventTarget.classList.toggle('card__like_active');
  });
  deleteIcon.addEventListener('click', function (evt) {
    const eventTarget = evt.target;
    eventTarget.closest('.card').remove();
  });


};

initialCards.forEach(element => {
  renderCard(element.name, element.link);
});


function switchPopup() {
  popupEditProfile.classList.toggle('popup_opened');
  formFieldEditProfile[0].value = profileName.textContent;
  formFieldEditProfile[1].value = profileAbout.textContent;
 }

function switchPopupNewCard() {
  popupNewCard.classList.toggle('popup_opened');
}

function switchPopupImage() {
  popupImage.classList.toggle('popup_opened');
}

function safeInfo(evt) {
  evt.preventDefault()
  profileName.textContent = formFieldEditProfile[0].value;
  profileAbout.textContent = formFieldEditProfile[1].value;
  switchPopup();
}

function safeNewCard(evt) {
  evt.preventDefault();
  const placeName = fieldNewCard[0].value;
  const imageLink = fieldNewCard[1].value;
  renderCard(placeName, imageLink);
  switchPopupNewCard();
  fieldNewCard[0].value = "";
  fieldNewCard[1].value = "";
}


popupCloseIcon.addEventListener('click', switchPopup);
profileEditBtn.addEventListener('click', switchPopup);
profileAddBtn.addEventListener('click', switchPopupNewCard);
popupNewCardCloseIcon.addEventListener('click', switchPopupNewCard);
formEditProfile.addEventListener('submit', safeInfo);
formFieldAddCard.addEventListener('submit', safeNewCard);
popupImageCloseIcon.addEventListener('click', switchPopupImage);







