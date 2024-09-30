// Append number to input field
function appendNumber(number) {
    const input = document.getElementById('result-input');
    input.value += number;
    // No need to focus on the input field
}

// Append negative sign
function appendNegative() {
    const input = document.getElementById('result-input');
    if (!input.value.includes('-')) {
        input.value = '-' + input.value;
    }
    // No need to focus on the input field
}

// Backspace function
function backspace() {
    const input = document.getElementById('result-input');
    input.value = input.value.slice(0, -1);
    // No need to focus on the input field sss
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

  function checkResult() {
    const random1 = parseInt(document.getElementById('random1').textContent);
    const random2 = parseInt(document.getElementById('random2').textContent);
    const operation = document.getElementById('operation').textContent;
    const userResult = parseInt(document.getElementById('result-input').value);
    let correctResult;

    if (isNaN(random1) || isNaN(random2)) {
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

        const resultInput = document.getElementById('result-input');
        const showAnswerBtn = document.getElementById('show-answer-btn');
        const correctAnswerDisplay = document.getElementById('correct-answer');

        if (userResult === correctResult) {
            resultInput.classList.remove('wrong'); // Yanlış ise kaldır
            generateRandomNumbers();
            clearResult();
            showAnswerBtn.style.display = 'none'; // Cevabı gör butonunu sakla
            correctAnswerDisplay.style.display = 'none'; // Doğru cevabı sakla
        } else {
            resultInput.classList.add('wrong'); // Kırmızı border ve titreme efekti
            showAnswerBtn.style.display = 'flex'; // Cevabı gör butonunu göster
            resultInput.value = ''; // Yanıtı temizle
        }

        // Doğru cevabı sakla
        correctAnswerDisplay.textContent = `Doğru Cevap: ${correctResult}`;
    } catch (error) {
        console.error("Error calculating result:", error);
    }
}

// Doğru cevabı saklamak için bir değişken tanımlayın
let correctResult = null;

// Kullanıcı sonuçları kontrol eder
function checkResult() {
    const random1 = parseInt(document.getElementById('random1').textContent);
    const random2 = parseInt(document.getElementById('random2').textContent);
    const operation = document.getElementById('operation').textContent;
    const userResult = parseInt(document.getElementById('result-input').value);

    // Rastgele sayıları kontrol et
    if (isNaN(random1) || isNaN(random2)) {
        return;
    }

    try {
        // Doğru sonucu hesapla
        if (operation === '+') {
            correctResult = random1 + random2;
        } else if (operation === '-') {
            correctResult = random1 - random2;
        } else if (operation === 'x') {
            correctResult = random1 * random2;
        }

        const resultInput = document.getElementById('result-input');
        const showAnswerBtn = document.getElementById('show-answer-btn');
        const correctAnswerDisplay = document.getElementById('correct-answer');

        // Kullanıcı doğru yanıt verirse
        if (userResult === correctResult) {
            resultInput.classList.remove('wrong'); // Yanlış mesajı kaldır
            generateRandomNumbers(); // Yeni sayılar oluştur
            clearResult(); // Giriş alanını temizle
            showAnswerBtn.style.display = 'none'; // Cevabı gör butonunu gizle
            correctAnswerDisplay.style.display = 'none'; // Doğru cevabı gizle
        } else {
            resultInput.classList.add('wrong'); // Kırmızı border ve titreme efekti
            showAnswerBtn.style.display = 'flex'; // Cevabı gör butonunu göster
            resultInput.value = ''; // Yanıtı temizle
        }

        // Doğru cevabı sakla
        correctAnswerDisplay.textContent = `Doğru Cevap: ${correctResult}`;
    } catch (error) {
        console.error("Error calculating result:", error);
    }
}

// Cevabı gösteren butona tıklandığında
function showAnswer() {
    const correctAnswerDisplay = document.getElementById('correct-answer');
    correctAnswerDisplay.style.display = 'block'; // Doğru cevabı göster
    correctAnswerDisplay.textContent = `Doğru Cevap: ${correctResult}`; // Doğru cevabı ayarla
}

// Cevabı gör butonuna click event ekle
document.getElementById('show-answer-btn').addEventListener('click', showAnswer);

// Yeni rastgele sayılar oluştur
function generateRandomNumbers() {
  const random1 = getRandomNumber();
  const random2 = getRandomNumber();
  const operation = document.getElementById('operation-select').value;

  document.getElementById('random1').textContent = random1 || '';
  document.getElementById('random2').textContent = random2 || '';
  document.getElementById('operation').textContent = operation || ''; // İşlem butonunu güncelle

  // Butonları başlangıçta sakla
  document.getElementById('show-answer-btn').style.display = 'none';
  document.getElementById('correct-answer').style.display = 'none';
}

// İşlemler için bir dizi tanımlayın
const operations = ['+', '-', 'x']; // Kullanıcı tarafından tanımlanan işlemler
let currentOperationIndex = 0; // Mevcut işlem indexi

// İşlem butonuna tıklandığında çağrılan fonksiyon
function changeOperation() {
    currentOperationIndex = (currentOperationIndex + 1) % operations.length; // Sıradaki işleme geç
    const operationButton = document.getElementById('operation');
    const operationSelect = document.getElementById('operation-select');

    // Yeni işlemi butona ve seçim alanına yerleştir
    operationButton.textContent = operations[currentOperationIndex]; 
    operationSelect.value = operations[currentOperationIndex]; // Seçim alanındaki değeri güncelle
}

// İşlem butonuna tıklandığında değiştir
document.getElementById('operation').addEventListener('click', changeOperation);

// Kullanıcı sonuçları kontrol eder
function checkResult() {
    const random1 = parseInt(document.getElementById('random1').textContent);
    const random2 = parseInt(document.getElementById('random2').textContent);
    const operation = operations[currentOperationIndex]; // Güncel işlemi al
    const userResult = parseInt(document.getElementById('result-input').value);
    let correctResult;

    // Rastgele sayıları kontrol et
    if (isNaN(random1) || isNaN(random2)) {
        return;
    }

    try {
        // Doğru sonucu hesapla
        if (operation === '+') {
            correctResult = random1 + random2;
        } else if (operation === '-') {
            correctResult = random1 - random2;
        } else if (operation === 'x') {
            correctResult = random1 * random2;
        }

        const resultInput = document.getElementById('result-input');
        const showAnswerBtn = document.getElementById('show-answer-btn');
        const correctAnswerDisplay = document.getElementById('correct-answer');

        // Kullanıcı doğru yanıt verirse
        if (userResult === correctResult) {
            resultInput.classList.remove('wrong'); // Yanlış mesajı kaldır
            generateRandomNumbers(); // Yeni sayılar oluştur
            clearResult(); // Giriş alanını temizle
            showAnswerBtn.style.display = 'none'; // Cevabı gör butonunu gizle
            correctAnswerDisplay.style.display = 'none'; // Doğru cevabı gizle
        } else {
            resultInput.classList.add('wrong'); // Kırmızı border ve titreme efekti
            showAnswerBtn.style.display = 'flex'; // Cevabı gör butonunu göster
            resultInput.value = ''; // Yanıtı temizle
        }

        // Doğru cevabı sakla
        correctAnswerDisplay.textContent = `Doğru Cevap: ${correctResult}`;
    } catch (error) {
        console.error("Error calculating result:", error);
    }
}

  // Initialize the calculator
  window.onload = generateRandomNumbers;
  