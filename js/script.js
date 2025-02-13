// Variabel global untuk menentukan mode konversi:
// true  => Konversi dari Celcius ke Fahrenheit
// false => Konversi dari Fahrenheit ke Celcius
let isCtoF = true;

// Event listener untuk tombol Konversi
document.getElementById('convert-btn').addEventListener('click', function() {
  let inputVal = parseFloat(document.getElementById('inputcelcius').value);
  if (!isNaN(inputVal)) {
    if (isCtoF) {
      // Konversi dari Celcius ke Fahrenheit
      let fahrenheit = (inputVal * 9/5) + 32;
      document.getElementById('main-result').value = fahrenheit.toFixed(2);
    } else {
      // Konversi dari Fahrenheit ke Celcius
      let celcius = (inputVal - 32) * 5/9;
      document.getElementById('main-result').value = celcius.toFixed(2);
    }
  } else {
    alert("Masukkan nilai suhu yang valid!");
  }
});

// Event listener untuk tombol Reverse
document.getElementById('reverse-btn').addEventListener('click', function() {
  // Toggle mode konversi
  isCtoF = !isCtoF;
  
  // Menukar nilai antara input dan output
  let inputField = document.getElementById('inputcelcius');
  let resultField = document.getElementById('main-result');
  let temp = inputField.value;
  inputField.value = resultField.value;
  resultField.value = temp;
  
  // Update label dan penjelasan rumus sesuai mode
  if (isCtoF) {
    document.getElementById('input-label').innerText = 'Celcius (°C):';
    document.getElementById('result-label').innerText = 'Fahrenheit (°F):';
    document.getElementById('cara-konversi').value = 'S(°F) = (S(°C) * 9/5) + 32';
  } else {
    document.getElementById('input-label').innerText = 'Fahrenheit (°F):';
    document.getElementById('result-label').innerText = 'Celcius (°C):';
    document.getElementById('cara-konversi').value = 'S(°C) = (S(°F) - 32) * 5/9';
  }
});

// Event listener untuk tombol Ubah Tema (Light/Dark Mode)
document.getElementById('theme-toggle').addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
});
