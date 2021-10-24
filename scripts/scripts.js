 const profileAddBtn = document.querySelector('.profile__add-button');
 const popupNewCard = document.querySelector('.popup-new-card');
 const popupEditProfile = document.querySelector('.popup-edit-profile');
 const popupNewCardCloseIcon = document.querySelector('.popup-new-card__close-icon');
 const profileEditBtn = document.querySelector('.profile__edit-button');
 const formEditProfile = document.querySelector('.form-edit-profile');
 const formsFieldEditProfile = formEditProfile.querySelectorAll('.form__field');
 const formFieldAddCard = document.querySelector('.form-add-card');
 const profileName = document.querySelector('.profile__name');
 const profileAbout = document.querySelector('.profile__about');
 const popupCloseIcon = document.querySelector('.popup-edit-close-icon');
 const cardsList = document.querySelector('.cards');
 const cardTemplate = document.querySelector('#card-item-template').content;
 const newCardSafeBtn = document.querySelector('.form-new-card__safe-btn');
 const fieldsNewCard = formFieldAddCard.querySelectorAll('.form__field');
 const popupImage = document.querySelector('.popup-image');
 const popupImageCloseIcon = document.querySelector('.popup-image__close-icon');
 const imgBlock = document.querySelector('.popup-image__block');
 const imgText = document.querySelector('.popup-image__text');
 const popup = document.querySelectorAll('.popup');
 const popupContainer = document.querySelectorAll('.popup__container');



function closePopup() {
  document.addEventListener('keydown', function(event) {
    if (event.code === 'Escape') {
      popupEditProfile.classList.remove('popup_opened');
      popupNewCard.classList.remove('popup_opened');
      popupImage.classList.remove('popup_opened');
    }

  });
}

closePopup();

document.addEventListener('click', function(event) {
  if (event.target === document.querySelector('.popup_opened')) {
    popupEditProfile.classList.remove('popup_opened');
    popupNewCard.classList.remove('popup_opened');
    popupImage.classList.remove('popup_opened');
  }
});

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


 function createCard (placeName, imageLink) {
  const cardTemplateCopy = cardTemplate.cloneNode(true);
  const cardImg = cardTemplateCopy.querySelector('.card__image');
  const cardLike = cardTemplateCopy.querySelector('.card__like');
  const deleteIcon = cardTemplateCopy.querySelector('.card__delete-icon');
  cardImg.setAttribute('src', imageLink);
  const cardTitle = cardTemplateCopy.querySelector('.card__title');
  cardTitle.textContent = placeName;
  cardImg.addEventListener('click', function () {
    togglePopup(popupImage);
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
   return cardTemplateCopy;
 }

 const renderCard = (placeName, imageLink) => {
  const cardTemplateCopy = createCard(placeName, imageLink)
  cardsList.prepend(cardTemplateCopy);
};

 initialCards.forEach(element => {
   renderCard(element.name, element.link);
 });

  function togglePopup(popup) {
    popup.classList.toggle('popup_opened');
  }

 function switchPopup() {
   togglePopup(popupEditProfile);
   formsFieldEditProfile[0].value = profileName.textContent;
   formsFieldEditProfile[1].value = profileAbout.textContent;
  }

 function switchPopupNewCard() {
  togglePopup(popupNewCard);
 }

 function switchPopupImage() {
  togglePopup(popupImage);
 }

 function safeInfo(evt) {
   evt.preventDefault()
   profileName.textContent = formsFieldEditProfile[0].value;
   profileAbout.textContent = formsFieldEditProfile[1].value;
   switchPopup();
 }

 function safeNewCard(evt) {
   evt.preventDefault();
   const placeName = fieldsNewCard[0].value;
   const imageLink = fieldsNewCard[1].value;
   renderCard(placeName, imageLink);
   togglePopup(popupNewCard);
   fieldsNewCard[0].value = "";
   fieldsNewCard[1].value = "";
 }


 popupCloseIcon.addEventListener('click', switchPopup);
 profileAddBtn.addEventListener('click', switchPopupNewCard);
 popupNewCardCloseIcon.addEventListener('click', switchPopupNewCard);
 formEditProfile.addEventListener('submit', safeInfo);
 formFieldAddCard.addEventListener('submit', safeNewCard);
 popupImageCloseIcon.addEventListener('click', switchPopupImage);
 profileEditBtn.addEventListener('click', switchPopup);






