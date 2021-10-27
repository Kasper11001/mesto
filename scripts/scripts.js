 const profileAddBtn = document.querySelector('.profile__add-button');
 const popupNewCard = document.querySelector('.popup-new-card');
 const popupEditProfile = document.querySelector('.popup-edit-profile');
 const profileEditBtn = document.querySelector('.profile__edit-button');
 const formEditProfile = document.querySelector('.form-edit-profile');
 const editProfileFormFields = formEditProfile.querySelectorAll('.form__field');
 const formFieldAddCard = document.querySelector('.form-add-card');
 const profileName = document.querySelector('.profile__name');
 const profileAbout = document.querySelector('.profile__about');
 const cardsList = document.querySelector('.cards');
 const cardTemplate = document.querySelector('#card-item-template').content;
 const newCardSafeBtn = document.querySelector('.form-new-card__safe-btn');
 const fieldsNewCards = formFieldAddCard.querySelectorAll('.form__field');
 const popupImage = document.querySelector('.popup-image');
 const imgBlock = document.querySelector('.popup-image__block');
 const imgText = document.querySelector('.popup-image__text');





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
  cardImg.setAttribute('alt', placeName);
  const cardTitle = cardTemplateCopy.querySelector('.card__title');
  cardTitle.textContent = placeName;
  cardImg.addEventListener('click', function () {
    openPopup(popupImage);
    imgBlock.setAttribute('src', imageLink);
    imgBlock.setAttribute('alt', placeName);
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

 function openPopupImage() {
  openPopup(popupImage);
 }

 function safeInfo(evt) {
   evt.preventDefault()
   profileName.textContent = editProfileFormFields[0].value;
   profileAbout.textContent = editProfileFormFields[1].value;
   openPopupEditProfile();
 }

 function safeNewCard(evt) {
   evt.preventDefault();
   const placeName = fieldsNewCards[0].value;
   const imageLink = fieldsNewCards[1].value;
   renderCard(placeName, imageLink);
   openPopup(popupNewCard);
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
              if (evt.target.classList.contains('popup_opened')) {
                  closePopup(popup);
              }
              if (evt.target.classList.contains('popup__close-icon')) {
                closePopup(popup);
              }
          });
      });
