


const firstPage = document.getElementById('first-page');
const secondPage = document.getElementById('second-page');
const thirdPage = document.getElementById('third-page');
const progressBar = document.getElementById('progress');
const percentButton = document.querySelector('.percentage-btn');
const profileButton = document.getElementById('profile-btn');
const stepBtn = document.getElementById('step-progress');
// buttons section
const firstButton = document.getElementById('first-button');
const secondButton = document.getElementById('second-button');
const thirdButton = document.getElementById('third-button');
//
const passwordInput = document.getElementById('password');
const togglePassword = document.getElementById('toggle-password');
const strengthFill = document.getElementById('strength-fill');
const strengthText = document.getElementById('strength-text');

// function pageTwo() {
//   if (page === 'firstpage') {
//     secondPage.classList.remove('hidden');
//     thirdPage.classList.add('hidden');
//     firstPage.classList.add('hidden');
//   }
// }


function goto(pageName) {

  if (pageName === 'firstpage') {

    firstPage.classList.remove('hidden');
    secondPage.classList.add('hidden');
    thirdPage.classList.add('hidden');
    progressBar.style.width = '30%';
    percentButton.innerText = '30%';
    profileButton.innerText = 'Your Profile';
    stepBtn.innerText = '1';
    firstButton.classList.remove('hidden');
    secondButton.classList.add('hidden');
    thirdButton.classList.add('hidden');
    page = 'firstpage';

  } else if (pageName === 'secondpage') {

    const emailInput = document.getElementById('email');
    const nameInput = document.getElementById('name');

    // Check if both inputs have at least 3 characters
    if (emailInput.value.length < 3 || nameInput.value.length < 3) {
      alert('Please enter at least 3 characters in both Email and Password fields.');
      return; // Stop execution
    }
    firstPage.classList.add('hidden');
    secondPage.classList.remove('hidden');
    thirdPage.classList.add('hidden');
    progressBar.style.width = '50%';
    percentButton.innerText = '50%';
    profileButton.innerText = 'Your Password';
    stepBtn.innerText = '2';
    firstButton.classList.add('hidden');
    secondButton.classList.remove('hidden');
    thirdButton.classList.add('hidden');
    page = 'secondpage';
  } else if (pageName === 'thirdpage') {
    firstPage.classList.add('hidden');
    secondPage.classList.add('hidden');
    thirdPage.classList.remove('hidden');
    progressBar.style.width = '100%';
    percentButton.innerText = '100%';
    profileButton.innerText = 'Tell me about yourself';
    stepBtn.innerText = '3';
    firstButton.classList.add('hidden');
    secondButton.classList.add('hidden');
    thirdButton.classList.remove('hidden');
    page = 'thirdpage';
  }
}

// passord section
togglePassword.addEventListener('click', function () {
  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);

  const icon = togglePassword.querySelector('i');
  icon.classList.toggle('fa-eye')
  icon.classList.toggle('fa-eye-slash')
});

// password strenght meter

passwordInput.addEventListener('input', function () {
  const value = passwordInput.value;
  let strength = 0;

  // Criteria for strength
  if (value.length >= 8) strength++;
  if (/[A-Z]/.test(value)) strength++;
  if (/[a-z]/.test(value)) strength++;
  if (/[0-9]/.test(value)) strength++;
  if (/[^A-Za-z0-9]/.test(value)) strength++;

  // Update meter and text
  let strengthLabel = '';
  let fillPercent = 0;
  let fillColor = '';

  switch (strength) {
    case 0:
    case 1:
      strengthLabel = 'Very Weak';
      fillPercent = 20;
      fillColor = '#e74c3c';
      break;
    case 2:
      strengthLabel = 'Weak';
      fillPercent = 40;
      fillColor = '#e67e22';
      break;
    case 3:
      strengthLabel = 'Moderate';
      fillPercent = 60;
      fillColor = '#f1c40f';
      break;
    case 4:
      strengthLabel = 'Strong';
      fillPercent = 80;
      fillColor = '#27ae60';
      break;
    case 5:
      strengthLabel = 'Very Strong';
      fillPercent = 100;
      fillColor = '#2ecc71';
      break;
  }
  if (value.length === 0) {
    fillPercent = 0;
    fillColor = '#e0e0e0';
    strengthLabel = '';
  }
  strengthFill.style.width = fillPercent + '%';
  strengthFill.style.backgroundColor = fillColor;
  strengthText.innerText = strengthLabel;


});








