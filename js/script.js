// Fungsi untuk konversi dari Celcius ke Fahrenheit
document.getElementById('convert-btn').addEventListener('click', function() {
    let celcius = parseFloat(document.getElementById('inputcelcius').value);
    if (!isNaN(celcius)) {
        let fahrenheit = (celcius * 9 / 5) + 32;
        document.getElementById('main-result').value = fahrenheit;
        document.getElementById('cara-konversi').value = 'S(°F) = (S(°C) * 9/5) + 32';
    }
});

// Fungsi untuk reverse konversi dan menukar label Celcius dan Fahrenheit
document.getElementById('reverse-btn').addEventListener('click', function() {
    let celciusInput = document.getElementById('inputcelcius');
    let fahrenheitInput = document.getElementById('main-result');
    let caraKonversi = document.getElementById('cara-konversi');
    let labelCelcius = document.getElementById('label-celcius');
    let labelFahrenheit = document.getElementById('label-fahrenheit');
    
    // Jika input Celcius ada dan valid, konversikan ke Fahrenheit
    if (celciusInput.value !== "" && !isNaN(celciusInput.value)) {
        let celcius = parseFloat(celciusInput.value);
        let fahrenheit = (celcius * 9 / 5) + 32;
        fahrenheitInput.value = fahrenheit; // Menampilkan hasil konversi ke Fahrenheit
        celciusInput.value = ""; // Kosongkan input Celcius setelah konversi
        caraKonversi.value = 'S(°F) = (S(°C) * 9/5) + 32'; // Update rumus konversi
        
        // Tukar label: tampilkan Fahrenheit dan sembunyikan Celcius
        labelCelcius.textContent = "Fahrenheit (&deg;F):";
        labelFahrenheit.textContent = "Celcius (&deg;C):";
    } 
    // Jika input Fahrenheit ada dan valid, konversikan ke Celcius
    else if (fahrenheitInput.value !== "" && !isNaN(fahrenheitInput.value)) {
        let fahrenheit = parseFloat(fahrenheitInput.value);
        let celcius = (fahrenheit - 32) * 5 / 9;
        celciusInput.value = celcius.toFixed(2); // Menampilkan hasil konversi ke Celcius
        fahrenheitInput.value = ""; // Kosongkan input Fahrenheit setelah konversi
        caraKonversi.value = 'S(°C) = (S(°F) - 32) * 5/9'; // Update rumus konversi
        
        // Tukar label: tampilkan Celcius dan sembunyikan Fahrenheit
        labelCelcius.textContent = "Celcius (&deg;C):";
        labelFahrenheit.textContent = "Fahrenheit (&deg;F):";
    } else {
        alert("Please enter a valid temperature value to convert.");
    }
});

// Fungsi untuk mengganti tema
document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});
