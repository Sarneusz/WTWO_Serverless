function addNumbers() {
  event.preventDefault();

  // Pobierz wartości wprowadzone przez użytkownika
  const number1 = document.getElementById("number1").value;
  const number2 = document.getElementById("number2").value;

  // Dodaj liczby
  const result = parseInt(number1) + parseInt(number2);

  // Wyświetl wynik na stronie
  document.getElementById("result").innerHTML = result;
}

