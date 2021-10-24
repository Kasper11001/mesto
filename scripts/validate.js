function init() {
  const forms = [...document.querySelectorAll('.form__fields')];
  forms.forEach(addListenersToForm);
}

function addListenersToForm(form) {
  const inputs = [...form.querySelectorAll('.form__field')];
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
  const button = form.querySelector('.form__safe-btn');
  button.disabled = !form.checkValidity();
  button.classList.toggle('form__safe-btn_unactive', !form.checkValidity());
  console.log('button');
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
  const errorContainer = document.querySelector(`#${element.id}-error`);
  validateLength(element);
  validateValueMissing(element);
  errorContainer.textContent = element.validationMessage;
  element.classList.toggle('form__field_invalid', !element.validity.valid);
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
init();
