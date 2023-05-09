

const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault(); 

  const formData = {};
  const formElements = event.target.elements;

  for (let i = 0; i < formElements.length; i++) {
    const element = formElements[i];
    if (element.type !== 'submit') {
      formData[element.name] = element.value;
    }
  }

  const values = Object.values(formData);
  const allFieldsFilled = values.every(value => value.trim() !== '');

  if (!allFieldsFilled) {
    alert('Будь ласка, заповніть всі поля форми!');
  } else {
    console.log(formData); 
    loginForm.reset();
  }
});
