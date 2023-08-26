import throttle from 'lodash.throttle';

const { email: emailInput, message: messageTextarea } =
  document.querySelector('.feedback-form');

const currentState = JSON.parse(
  localStorage.getItem('feedback-form-state')
) || { email: '', message: '' };

emailInput.value = currentState.email;
messageTextarea.value = currentState.message;

function saveToLocalStorage() {
  localStorage.setItem('feedback-form-state', JSON.stringify(currentState));
  console.log('Saved to local storage:', currentState);
}

const throttledSave = throttle(saveToLocalStorage, 500);

function handleInputChange(event) {
  const { name, value } = event.target;
  if (name === 'email' || name === 'message') {
    currentState[name] = value;
    throttledSave();
  }
}

emailInput.addEventListener('input', handleInputChange);
messageTextarea.addEventListener('input', handleInputChange);

const feedbackForm = document.querySelector('.feedback-form');
feedbackForm.addEventListener('submit', event => {
  event.preventDefault();
  const submittedState = {
    email: emailInput.value,
    message: messageTextarea.value,
  };
  emailInput.value = '';
  messageTextarea.value = '';
  localStorage.removeItem('feedback-form-state');
  console.log('Form submitted with state:', submittedState);
});
