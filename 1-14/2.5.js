function нод(a, b) {
  while (b !== 0) {
    let остаток = a % b;
    a = b;
    b = остаток;
  }
  return a;
}

console.log( `НОД(36, 48) = ${нод(36, 48)}` );  // 12
console.log( `НОД(12, 18) = ${нод(12, 18)}` );  // 6
console.log( `НОД(7, 13)  = ${нод(7, 13)}`  );  // 1