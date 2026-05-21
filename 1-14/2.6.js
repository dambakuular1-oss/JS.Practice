function нок(a, b) {
  function нод(a, b) {
    while (b !== 0) {
      let остаток = a % b;
      a = b;
      b = остаток;
    }
    return a;
  }

  return (a * b) / нод(a, b);
}

console.log( `НОК(4, 6)   = ${нок(4, 6)}`   );  // 12
console.log( `НОК(12, 18) = ${нок(12, 18)}` );  // 36
console.log( `НОК(7, 13)  = ${нок(7, 13)}`  );  // 91