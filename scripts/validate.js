enableValidation({
  formSelector: '.form__fields',
  inputSelector: '.form__field',
  submitButtonSelector: '.form__safe-btn',
  inactiveButtonClass: 'form__safe-btn_unactive',
  inputErrorClass: 'error',
  errorClass: 'form__field_invalid'
});

function enableValidation(obj) {
  const forms = [...document.querySelectorAll(obj.formSelector)];
  forms.forEach(form => {
    addListenersToForm(form, obj)
  });
}

function addListenersToForm(form, obj) {
  const inputs = [...form.querySelectorAll(obj.inputSelector)];
  inputs.forEach(input => {
    addListenersToInput(input, obj);
  });
  form.addEventListener('submit', handleSubmit);
  form.addEventListener('input', function (event) {
    handleFormInput(event, obj);
  });
  setSubmitButtonState(form, obj);
}

function handleFormInput(event, obj) {
  const {currentTarget:form} = event;
  setSubmitButtonState(form, obj);

}

function setSubmitButtonState(form , obj) {
  const button = form.querySelector(obj.submitButtonSelector);
  button.disabled = !form.checkValidity();
  button.classList.toggle(obj.inactiveButtonClass, !form.checkValidity());
}

function handleSubmit(event) {
  event.preventDefault();
  const {target: form} = event;
  const data = [...form.querySelectorAll('.form__field')].reduce((sum, input) => {
    sum[input.name] = input.value;
    return sum;
  },{});
}

function addListenersToInput(input, obj) {
  input.addEventListener('input', function (event) {
    handleFieldValidation(event, obj);
  });
}

function handleFieldValidation(event, obj) {
  const {target: element} = event;
  element.setCustomValidity('');
  const errorContainer = document.querySelector(`#${element.id}-${obj.inputErrorClass}`);
  validateLength(element);
  validateValueMissing(element);
  errorContainer.textContent = element.validationMessage;
  element.classList.toggle(obj.errorClass, !element.validity.valid);
}

function validateLength(element) {
  if (element.validity.tooShort || element.validity.tooLong) {
    element.setCustomValidity(`Введите от ${element.minLength} до ${element.maxLength} символов`);
  }
}

function validateValueMissing(element) {
  if (element.validity.valueMissing) {
    element.setCustomValidity('Заполните поле');
  }
}


