const form = document.getElementById('signup-form');
const emailInput = document.getElementById('email');
const messageEl = document.getElementById('form-message');

const setMessage = (text, tone = 'neutral') => {
  messageEl.textContent = text;
  messageEl.style.color =
    tone === 'error' ? '#f75590' : tone === 'success' ? '#6f3ff5' : '#5e5778';
};

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = emailInput.value.trim();

  if (!email) {
    setMessage('Please add your email address.', 'error');
    emailInput.focus();
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    setMessage('Please enter a valid email.', 'error');
    emailInput.focus();
    return;
  }

  // Placeholder for future API integration.
  // TODO: replace with real POST to your backend or mailing list provider.
  setMessage('Thanks! You are on the list.', 'success');
  form.reset();
});

