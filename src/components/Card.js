export class Card {
  // в конструкторе будут динамические данные,
  // для каждого экземпляра свои
  constructor(data, cardSelector, {handleCardClick}) {
      // text и image — приватные поля,
      // они нужны только внутри класса
      this._name = data.name;
      this._link = data.link;
      this._cardSelector = cardSelector;
      this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    // здесь выполним все необходимые операции, чтобы вернуть разметку
    const cardTemplate = document.querySelector(this._cardSelector).content.querySelector('.card').cloneNode(true);
    return cardTemplate;
  }

  generateCard() {
    // Запишем разметку в приватное поле _element.
    // Так у других элементов появится доступ к ней.
    this._element = this._getTemplate();
    this._setEventListeners(); // добавим обработчики

    // Добавим данные
    this._element.querySelector('.card__image').src = this._link;
    this._element.querySelector('.card__image').alt = this._name;
    this._element.querySelector('.card__title').textContent = this._name;

    // Вернём элемент наружу
    return this._element;

  }

  _handleLikeClick() {
    this._element.querySelector('.card__like').classList.toggle('card__like_active');
  }

  _handleDeleteClick() {
    this._element.querySelector('.card__delete-icon').closest('.card').remove();
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

