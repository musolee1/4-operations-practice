// Append number to input field
function appendNumber(number) {
    const input = document.getElementById('result-input');
    input.value += number;
    input.focus();
  }
  
  // Append negative sign
  function appendNegative() {
    const input = document.getElementById('result-input');
    if (!input.value.includes('-')) {
      input.value = '-' + input.value;
    }
    input.focus();
  }
  
  // Backspace function
  function backspace() {
    const input = document.getElementById('result-input');
    input.value = input.value.slice(0, -1);
    input.focus();
  }
  
  // Clear input field
  function clearResult() {
    document.getElementById('result-input').value = '';
    document.getElementById('message').textContent = '';
  }
  
  // Check result on 'Enter' button click
  function checkResult() {
    const random1 = parseInt(document.getElementById('random1').textContent);
    const random2 = parseInt(document.getElementById('random2').textContent);
    const operation = document.getElementById('operation').textContent;
    const userResult = parseInt(document.getElementById('result-input').value);
    let correctResult;
  
    if (isNaN(random1) || isNaN(random2)) {
      document.getElementById('message').textContent = 'Please generate numbers first!';
      return;
    }
  
    try {
      if (operation === '+') {
        correctResult = random1 + random2;
      } else if (operation === '-') {
        correctResult = random1 - random2;
      } else if (operation === 'x') {
        correctResult = random1 * random2;
      }
  
      if (userResult === correctResult) {
        document.getElementById('message').textContent = 'Bravo!';
        generateRandomNumbers(); // Generate new numbers after a correct answer
        clearResult();
      } else {
        document.getElementById('message').textContent = 'Wrong! Try again.';
      }
    } catch (error) {
      console.error("Error calculating result:", error);
    }
  }
  
  // Allow keyboard input without duplicating numbers
  document.addEventListener('keydown', function(event) {
    const input = document.getElementById('result-input');
    const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '-', 'Backspace', 'Enter'];
  
    if (allowedKeys.includes(event.key)) {
      event.preventDefault();  // Prevent default action to avoid duplicating the input
      if (event.key >= '0' && event.key <= '9') {
        input.value += event.key;
      } else if (event.key === '-') {
        appendNegative();
      } else if (event.key === 'Backspace') {
        backspace();
      } else if (event.key === 'Enter') {
        checkResult();
      }
      input.focus();
    }
  });
  
  // Generate random numbers and display them
  function generateRandomNumbers() {
    try {
      const random1 = getRandomNumber();
      const random2 = getRandomNumber();
      const operation = document.getElementById('operation-select').value;
  
      // If numbers are successfully generated, display them
      document.getElementById('random1').textContent = random1 || '';
      document.getElementById('random2').textContent = random2 || '';
      document.getElementById('operation').textContent = operation || '';
    } catch (error) {
      console.error("Error generating random numbers:", error);
    }
  }
  
  // Get a random number based on user selection
  function getRandomNumber() {
    const range = document.getElementById('range-select').value;
    const allowNegative = document.getElementById('allow-negative').checked;
    const [min, max] = range.split('-').map(Number);
  
    let number = Math.floor(Math.random() * (max - min + 1)) + min;
    if (allowNegative && Math.random() > 0.5) {
      number = -number;
    }
  
    return number;
  }
  
  // Initialize the calculator
  window.onload = generateRandomNumbers;
  