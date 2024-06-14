// Escribe un programa que determine si un número dado es primo o no.
// Value of Number => string -> int
let number = document.querySelector('#number');
// Action
let btnCheck = document.querySelector('#btnCheck');
// Value of Result => string
let result = document.querySelector('#result');

// Validator fn
btnCheck.addEventListener('click', () => {
  numberFixed = parseInt(number.value);

  // Verify if the number is odd or not
  let validator = function () {
      for (var i = 2; i < numberFixed; i++) {
        if (numberFixed % i === 0) {
          return false;
        }
      }
      // Return true if the number is cousin
      return numberFixed !== 1;
  }

  if (validator() == true){
    result.innerHTML = "Si es primo!!"
  } else {
    result.innerHTML = 'No es un primo'
  }
});
