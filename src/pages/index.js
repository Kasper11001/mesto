  import './index.css';
  import {
    addProfileForm,
    addNewCardForm,
    profileAddBtn,
    profileEditBtn,
    inputName,
    inputProfession,
    containerSelector,
    validationConfig,
    editImage,
    addEditForm,
    } from "../utils/constants.js";
  import { PopupWithSubmit } from "../components/PopupWithSubmit";
  import { Card } from "../components/Card.js";
  import { FormValidator } from "../components/FormValidator.js";
  import { PopupWithForm } from "../components/PopupWithForm.js";
  import { PopupWithImage } from "../components/PopupWithImage.js";
  import { Section } from "../components/Section.js";
  import { UserInfo } from "../components/UserInfo.js";
  import Api from "../components/Api.js";
//прогруз автора
let myId = '';
const api = new Api({
  baseUrl: 'https:mesto.nomoreparties.co/v1/cohort-31',
  method: 'PATCH',
  headers: {
    authorization: '70d4c1c2-9a4d-4dea-aa14-db3e8c4e2fed',
    'Content-Type': 'application/json'
  }
});

const formValidatorEditProfile = new FormValidator(validationConfig, addEditForm);

const formValidatorAdd = new FormValidator(validationConfig, addProfileForm);

const formValidatorPlaceAdd = new FormValidator(validationConfig, addNewCardForm);

const popupWithImage = new PopupWithImage('.popup-image');

const userInfo = new UserInfo(
  {
    name:'.profile__name',
    profession:'.profile__about',
    avatar: '.profile__avatar'
});

const popupNewCard = new PopupWithForm('.popup-new-card',{
  submitForm: (formValues) => {
    renderSaving(true)
    api.addCard(formValues)
      .then((data) => {
        const card = createCard(data);
        cardsList.addItem(card);
        renderSaving(false)
        popupNewCard.close();
      })
      .catch((err) => {
        renderSaving(false)
        console.log(err)
      })
  }
});

function renderSaving(isSaving) {
  const popups = document.querySelectorAll('.popup')
  if(isSaving) {
    popups.forEach((popup) => {
      if(popup.classList.contains('popup_opened')) {
        const btn = popup.querySelector('.form__safe-btn');
        btn.textContent = "Сохранение..."
      }
    });
  } else {
    popups.forEach((popup) => {
      if(popup.classList.contains('popup_opened')) {
        const btn = popup.querySelector('.form__safe-btn');
        btn.textContent = "Сохранить"
        }
      });
    }
}

const promise = [api.getInitialCards(), api.getProfileData()]
Promise.all(promise)
.then(([cardData, userData]) => {
  myId = userData._id;
  cardsList.renderItems(cardData.reverse());
  userInfo.setUserInfo(userData)
})
.catch(err => console.log(err));

const popupEditProfile = new PopupWithForm('.popup-edit-profile',{
  submitForm: (formValues) => {
    renderSaving(true)
    api.updateProfileData(formValues)
    .then((data) => {
      userInfo.setUserInfo({name: data.name, about: data.about, avatar: data.avatar})
      renderSaving(false)
      popupEditProfile.close();
    })
    .catch((err) => {
      renderSaving(false);
      console.log(err);
    })

  }
});

const popupEditProfileImage = new PopupWithForm('.popup-confirmation-edit-profile',{
  submitForm: (formValues) => {
    renderSaving(true)
    api.updateProfileAvatar(formValues)
    .then((data) => {
      userInfo.setUserInfo(data);
      renderSaving(false);
      popupEditProfileImage.close();
    })
    .catch((err) => {
      renderSaving(false)
      console.log(err)
    })
  }
});

const popupWithSubmit = new PopupWithSubmit('.popup-confirmation', {
  deleteCard: (cardId, cardElement) => {
    api.deleteCard(cardId)
    .then(() => {
      cardElement.remove();
    })
    .catch((err) => console(err));
  }
});

const cardsList = new Section({
  renderer: (cardItem) => {
    const card = createCard(cardItem);
    cardsList.addItem(card);
  }
},
containerSelector
);

function createCard(item) {
  const card = new Card(item,'#card-item-template', myId, {
    handleCardClick: (name, link) => {
      popupWithImage.open(link, name);
    },
    cardDelete: (cardElement, cardId) => {
      popupWithSubmit.open(cardElement,cardId);
    },
     like: (cardId) => {
      api.likeCard(cardId)
       .then((data) => {
        card.likesCounter(data);
        card.addLike();
       })
       .catch((err) => console.log(err)
       );
     },
     removeLike: (cardId) => {
       api.deleteLike(cardId)
       .then((data) => {
        card.likesCounter(data);
        card.deleteLike();
       })
       .catch((err) => console.log(err)
       );
     },
  });
  const cardElement = card.generateCard();
  return cardElement;
}
formValidatorEditProfile.enableValidation();

formValidatorPlaceAdd.enableValidation();

popupWithImage.setEventListeners();

popupNewCard.setEventListeners();

profileAddBtn.addEventListener('click', () => {
  popupNewCard.open();
});

popupEditProfile.setEventListeners();
popupEditProfileImage.setEventListeners();

profileEditBtn.addEventListener('click', () => {
  formValidatorAdd.enableValidation();
  const userInfoData = userInfo.getUserInfo();
  inputName.value = userInfoData.name;
  inputProfession.value = userInfoData.profession;
  popupEditProfile.open();
});
popupWithSubmit.setEventListeners();

editImage.addEventListener('click', () => {
  popupEditProfileImage.open();
});

