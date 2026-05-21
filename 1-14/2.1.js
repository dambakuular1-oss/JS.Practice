function квадратноеУравнение(a, b, c) {
  if (a === 0) return "Ошибка: коэффициент a не может быть равен нулю";

  const D = b ** 2 - 4 * a * c;

  if (D > 0) {
    const x1 = +( (-b + Math.sqrt(D)) / (2 * a) ).toFixed(2);
    const x2 = +( (-b - Math.sqrt(D)) / (2 * a) ).toFixed(2);
    return `D = ${D} > 0 → два корня: x1 = ${x1}, x2 = ${x2}`;
  } else if (D === 0) {
    const x = +( -b / (2 * a) ).toFixed(2);
    return `D = 0 → один корень: x = ${x}`;
  } else {
    return `D = ${D} < 0 → действительных корней нет`;
  }
}

console.log( квадратноеУравнение(1, -5, 6) );  // x1 = 3, x2 = 2
console.log( квадратноеУравнение(1, -2, 1) );  // x = 1
console.log( квадратноеУравнение(1, 0, 1)  );  // корней нет