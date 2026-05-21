function тройкаПифагора(a, b, c) {
  const nums = [a, b, c].sort((x, y) => x - y);
  const [m, n, k] = nums;

  if (m ** 2 + n ** 2 === k ** 2) {
    return `Да! ${m}² + ${n}² = ${k}² — тройка Пифагора`;
  } else {
    return `Нет. ${m}² + ${n}² = ${m**2 + n**2}, но ${k}² = ${k**2}`;
  }
}

console.log( тройкаПифагора(3, 4, 5)  );  // Да!
console.log( тройкаПифагора(5, 12, 13) ); // Да!
console.log( тройкаПифагора(2, 3, 4)  );  // Нет