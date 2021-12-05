  import './index.css';
  import { addProfileForm, addNewCardForm, profileAddBtn, profileEditBtn, inputName, inputProfession, containerSelector, initialCards, validationConfig } from "../utils/constants.js";
  import { Card } from "../components/Card.js";
  import { FormValidator } from "../components/FormValidator.js";
  import { PopupWithForm } from "../components/PopupWithForm.js";
  import { PopupWithImage } from "../components/PopupWithImage.js";
  import { Section } from "../components/Section.js";
  import { UserInfo } from "../components/UserInfo.js";

 const formValidatorAdd = new FormValidator(validationConfig, addProfileForm);
 const formValidatorPlaceAdd = new FormValidator(validationConfig, addNewCardForm);
 const popupWithImage = new PopupWithImage('.popup-image');
 const userInfo = new UserInfo(
  {
    name:'.profile__name',
    profession:'.profile__about',
  });
  const popupNewCard = new PopupWithForm('.popup-new-card',{
    submitForm: (formValues) => {
      const card = createCard(formValues);
      cardsList.addItem(card);
    }
  });
  const popupEditProfile = new PopupWithForm('.popup-edit-profile',{
    submitForm: (formValues) => {
      userInfo.setUserInfo(formValues);
    }
  });
  const cardsList = new Section({
    items: initialCards,
    renderer: (cardItem) => {
      const card = createCard(cardItem);
      cardsList.addItem(card);
    }
  },
  containerSelector
  );

   function createCard(item) {
   const card = new Card(item,'#card-item-template', {
    handleCardClick: (name, link) => {
      popupWithImage.open(link, name);
    }
   });
   const cardElement = card.generateCard();
   return cardElement;
 }

formValidatorAdd.enableValidation();
formValidatorPlaceAdd.enableValidation();
cardsList.renderItems();

popupWithImage.setEventListeners();
popupNewCard.setEventListeners();
profileAddBtn.addEventListener('click', () => {
  popupNewCard.open();
});
popupEditProfile.setEventListeners();
profileEditBtn.addEventListener('click', () => {
  const userInfoData = userInfo.getUserInfo();
  inputName.value = userInfoData.name;
  inputProfession.value = userInfoData.profession;
  popupEditProfile.open();
});

