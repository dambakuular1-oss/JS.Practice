function общиеДелители(a, b) {
  const результат = [];
  const min = Math.min(a, b);

  for (let i = 1; i <= min; i++) {
    if (a % i === 0 && b % i === 0) результат.push(i);
  }

  return `Общие делители ${a} и ${b}: ${результат.join(", ")}`;
}

console.log( общиеДелители(36, 48) );  // 1, 2, 3, 4, 6, 12
console.log( общиеДелители(12, 18) );  // 1, 2, 3, 6