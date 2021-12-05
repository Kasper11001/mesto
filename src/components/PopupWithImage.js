import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
  super(popupSelector)
  this._imgBlock = document.querySelector('.popup-image__block');
  this._imgText = document.querySelector('.popup-image__text');

  }
  open(link, name) {
    this._imgBlock.src = link;
    this._imgBlock.alt = name;
    this._imgText.textContent = name;
    super.open();
  }
}


