export class FormValidator {
  constructor(obj, formElement) {
    this._formElement = formElement;
    this._obj = obj;
  }

  enableValidation() {
      this._addListenersToForm();
  }
  _addListenersToForm() {
    const inputs = [...this._formElement.querySelectorAll(this._obj.inputSelector)];
    inputs.forEach(input => {
      this._addListenersToInput(input);
    });
    this._formElement.addEventListener('submit', (event) => {
      this._handleSubmit(event, inputs);
    });
    this._formElement.addEventListener('input', (event) => {
      this._handleFormInput(event);
    });
    this._setSubmitButtonState();
  }

  _addListenersToInput(input) {
    input.addEventListener('input', (event) => {
      this._handleFieldValidation(event);
    });
  }

  _handleSubmit(event, input) {
    event.preventDefault();
    input[0].value = "";
    input[1].value = "";
    const button = document.querySelector('.form-new-card__safe-btn');
    button.disabled = true;
    button.classList.add('form__safe-btn_unactive');
  }

  _handleFormInput() {
    this._setSubmitButtonState();
  }

  _setSubmitButtonState() {
    const button = this._formElement.querySelector(this._obj.submitButtonSelector);
    button.disabled = !this._formElement.checkValidity();
    button.classList.toggle(this._obj.inactiveButtonClass, !this._formElement.checkValidity());

  }

  _handleFieldValidation(event) {
    const {target: element} = event;
    element.setCustomValidity('');
    const errorContainer = document.querySelector(`#${element.id}-${this._obj.inputErrorClass}`);
    this._validateLength(element);
    this._validateValueMissing(element);
    errorContainer.textContent = element.validationMessage;
    element.classList.toggle(this._obj.errorClass, !element.validity.valid);
  }

  _validateLength(element) {
    if (element.validity.tooShort || element.validity.tooLong) {
      element.setCustomValidity(`Введите от ${element.minLength} до ${element.maxLength} символов`);
    }
  }

  _validateValueMissing(element) {
    if (element.validity.valueMissing) {
      element.setCustomValidity('Заполните поле');
    }
  }
}
