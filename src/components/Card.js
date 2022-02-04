export class Card {
  // в конструкторе будут динамические данные,
  // для каждого экземпляра свои
  constructor(data, cardSelector, myId, {handleCardClick, cardDelete, like, removeLike}) {
      // text и image — приватные поля,
      // они нужны только внутри класса
      this._data = data;
      this._name = data.name;
      this._link = data.link;
      this._cardSelector = cardSelector;
      this._handleCardClick = handleCardClick;
      this._likes = data.likes.length;
      this._ownerId = data.owner._id;
      this._myId = myId;
      this._cardId = data._id;
      this._cardDelete = cardDelete;
      this._like = like;
      this._removeLike = removeLike;
  }

  _getTemplate() {
    // здесь выполним все необходимые операции, чтобы вернуть разметку
    const cardTemplate = document.querySelector(this._cardSelector).content.querySelector('.card').cloneNode(true);
    return cardTemplate;
  }

  likesCounter(newData) {
    this._likes = newData.likes.length;
    this._data = newData;
    this._updateLikes();
  }

  _updateLikes() {
    this._element.querySelector('.card__like-counter').textContent = this._likes;
  }

  generateCard() {
    // Запишем разметку в приватное поле _element.
    // Так у других элементов появится доступ к ней.
    this._element = this._getTemplate();
    this._setEventListeners(); // добавим обработчики

    // Добавим данные
    const cardData = this._element.querySelector('.card__image');
    cardData.src = this._link;
    cardData.alt = this._name;
    this._element.querySelector('.card__title').textContent = this._name;
    this._element.querySelector('.card__like-counter').textContent = this._likes;
    if(this._likes !== 0) {
      this._data.likes.forEach(like => {
        if(like._id === this._myId) {
          this._element.querySelector('.card__like').classList.add('card__like_active');
        }
      });
    }
    const deleteIcon = this._element.querySelector('.card__delete-icon');
    if (this._ownerId !== this._myId) {
      deleteIcon.remove();
    }
    // Вернём элемент наружу
    return this._element;
  }


  _handleLikeClick() {
    if(this._likes === 0) {
      this._like(this._cardId);
      this._element.querySelector('.card__like').classList.add('card__like_active');
    } else {
      const likeId = this._data.likes.find(like => like._id === this._myId);
        if(likeId) {
          this._removeLike(this._cardId);
          this._element.querySelector('.card__like').classList.remove('card__like_active');
        } else {
          this._like(this._cardId);
          this._element.querySelector('.card__like').classList.add('card__like_active');
        }
    }
  }


  _handleDeleteClick() {
    this._cardDelete(this._element, this._cardId);
  }

  _setEventListeners() {
    this._element.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('card__delete-icon')) {
      this._handleDeleteClick();
    } else if (evt.target.classList.contains('card__like')) {
      this._handleLikeClick();
    } else {
      this._handleCardClick(this._name, this._link);
    }
    });
  }
}

