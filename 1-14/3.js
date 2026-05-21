const secret = Math.floor(Math.random() * 100) + 1;

while (true) {
  const number = Number(prompt('Введите число от 1 до 100'));

  if (number < secret) {
    alert('Введите число побольше');
  } else if (number > secret) {
    alert('Введите число поменьше');
  } else {
    alert('Вы угадали!');
    break;
  }
}