enableValidation({
  formSelector: '.form__fields',
  inputSelector: '.form__field',
  submitButtonSelector: '.form__safe-btn',
  inactiveButtonClass: 'form__safe-btn_unactive',
  inputErrorClass: `#${element.id}-error`,
  errorClass: 'form__field_invalid'
});

function init() {
  const forms = [...document.querySelectorAll(formSelector)];
  forms.forEach(addListenersToForm);
}

function addListenersToForm(form) {
  const inputs = [...form.querySelectorAll(inputSelector)];
  inputs.forEach(addListenersToInput);
  form.addEventListener('submit', handleSubmit);
  form.addEventListener('input', handleFormInput);
  setSubmitButtonState(form);
}

function handleFormInput(event) {
  const {currentTarget:form} = event;
  setSubmitButtonState(form);

}

function setSubmitButtonState(form) {
  const button = form.querySelector(submitButtonSelector);
  button.disabled = !form.checkValidity();
  button.classList.toggle(inactiveButtonClass, !form.checkValidity());
}

function handleSubmit(event) {
  event.preventDefault();
  const {target: form} = event;
  const data = [...form.querySelectorAll('.form__field')].reduce((sum, input) => {
    sum[input.name] = input.value;
    return sum;
  },{});
  console.log(data);
}

function addListenersToInput(input) {
  input.addEventListener('input', handleFieldValidation);
}

function handleFieldValidation(event) {
  const {target: element} = event;
  element.setCustomValidity('');
  const errorContainer = document.querySelector(inputErrorClass);
  validateLength(element);
  validateValueMissing(element);
  errorContainer.textContent = element.validationMessage;
  element.classList.toggle(errorClass, !element.validity.valid);
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


