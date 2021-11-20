export class FormValidator {
  constructor(obj) {
    this._obj = obj;
  }

  enableValidation() {
    const forms = [...document.querySelectorAll(this._obj.formSelector)];
    forms.forEach(form => {
      this._addListenersToForm(form, this._obj);
    });
  }
  _addListenersToForm(form, obj) {
    const inputs = [...form.querySelectorAll(obj.inputSelector)];
    inputs.forEach(input => {
      this._addListenersToInput(input, obj);
    });
    form.addEventListener('submit', this._handleSubmit);
    form.addEventListener('input', (event) => {
      this._handleFormInput(event, obj);
    });
    this._setSubmitButtonState(form, obj);
  }

  _addListenersToInput(input, obj) {
    input.addEventListener('input', (event) => {
      this._handleFieldValidation(event, obj);
    });
  }

  _handleSubmit(event) {
    event.preventDefault();
  }

  _handleFormInput(event, obj) {
    const {currentTarget:form} = event;
    this._setSubmitButtonState(form, obj);
  }

  _setSubmitButtonState(form , obj) {
    const button = form.querySelector(obj.submitButtonSelector);
    button.disabled = !form.checkValidity();
    button.classList.toggle(obj.inactiveButtonClass, !form.checkValidity());
  }

  _handleFieldValidation(event, obj) {
    const {target: element} = event;
    element.setCustomValidity('');
    const errorContainer = document.querySelector(`#${element.id}-${obj.inputErrorClass}`);
    this._validateLength(element);
    this._validateValueMissing(element);
    errorContainer.textContent = element.validationMessage;
    element.classList.toggle(obj.errorClass, !element.validity.valid);
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
