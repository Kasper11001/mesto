import { Popup } from "./Popup";

export class PopupWithSubmit extends Popup {
  constructor(popupSelector, {deleteCard}) {
    super(popupSelector)
    this._deleteCard = deleteCard;
  }
  open(cardElement,cardId) {
    super.open();
    this._cardId = cardId;
    this._cardElement = cardElement;
  }
  _sendData () {
    this._deleteCard(this._cardId, this._cardElement);
  }
  setEventListeners() {
    super.setEventListeners();
    this._popup.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._sendData();
      super.close();
    })
  }
}
