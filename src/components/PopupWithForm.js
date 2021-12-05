import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup{
  constructor(popupSelector, {submitForm}) {
    super(popupSelector)
    this._submitForm = submitForm;
    this._popupForm = this._popup.querySelector('.form__fields');

  }
  _getInputValues() {
    this._inputs = this._popupForm.querySelectorAll('.form__field');
    this._formValues = {};
    this._inputs.forEach(element => {
      this._formValues[element.name] = element.value;
    });
    return this._formValues;
  }
  close() {
    super.close();
    this._popupForm.reset();
  }
  setEventListeners() {
    super.setEventListeners();
    this._popup.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitForm(this._getInputValues());
      this.close();
    });
  }
}


