import throttle from 'lodash.throttle';

const emailInput = document.querySelector('input[name="email"]');
const messageTextarea = document.querySelector('textarea[name="message"]');
const feedbackForm = document.querySelector('.feedback-form');

const storedState = JSON.parse(localStorage.getItem('feedback-form-state'));
if (storedState) {
  emailInput.value = storedState.email;
  messageTextarea.value = storedState.message;
}

const updateLocalStorage = throttle(function () {
  const currentState = {
    email: emailInput.value,
    message: messageTextarea.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(currentState));
  console.log('Saved to local storage:', currentState);
}, 500);

emailInput.addEventListener('input', updateLocalStorage);
messageTextarea.addEventListener('input', updateLocalStorage);

feedbackForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const currentState = {
    email: emailInput.value,
    message: messageTextarea.value,
  };

  emailInput.value = '';
  messageTextarea.value = '';
  localStorage.removeItem('feedback-form-state');

  console.log('Form submitted with state:', currentState);
});
