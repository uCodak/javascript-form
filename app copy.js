const stage = "stage_1";

const firstPage = document.getElementById('first-page');
const secondPage = document.getElementById('second-page');
const progressBar = document.getElementById('progress');
const percentButton = document.querySelector('.percentage-btn');
const profileButton = document.getElementById('profile-btn');
const stepBtn = document.getElementById('step-progress');
const Level = document.getElementById('Level')
const LevelOne = document.getElementById('level-one');
const LevelTwo = document.getElementById('level-two')
 
//
  const passwordInput = document.getElementById('password');
  const togglePassword = document.getElementById('toggle-password');
  const strengthFill = document.getElementById('strength-fill');
  const strengthText = document.getElementById('strength-text');




 
 
 
 
 
// run this to  move to the next page
function leveltwo() {
  firstPage.classList.add('hidden');    
  secondPage.classList.remove('hidden');  
  
   progressBar.style.width = '50%';
  percentButton.innerText = '50%'; 
  profileButton.innerText = 'Your Password'
  stepBtn.innerText = '2'
  
  
}
//previous button

function levelone(){
    firstPage.classList.remove('hidden');    
  secondPage.classList.add('hidden'); 
  
  
  progressBar.style.width = '30%';
  percentButton.innerText = '30%'; 
  profileButton.innerText = 'Your Profile'
  stepBtn.innerText = '1'

  stage = "stage_2";
}

if(stage === "stage_1"){

}


// passord section
togglePassword.addEventListener('click', function () {
  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type',type);

  const icon = togglePassword.querySelector('i');
  icon.classList.toggle('fa-eye')
  icon.classList.toggle('fa-eye-slash')
});


  






 