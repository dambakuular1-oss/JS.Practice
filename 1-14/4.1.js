const secret = new Set();
while (secret.size < 10) {
  secret.add(Math.floor(Math.random() * 100));
}

let found = 0;

function guess(index) {
  if (secret.has(index)) {
    console.log(`Ячейка ${index} найдена!`);
    secret.delete(index);
    found++;
    if (found === 10) console.log('Вы нашли все ячейки!');
  } else {
    console.log(`Промах! Ячейка ${index} не загадана.`);
  }
}