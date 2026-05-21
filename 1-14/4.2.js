const table = document.getElementById('field');
const result = document.getElementById('result');

const rows = 10;
const cols = 10;
const hiddenCount = 10;

let found = 0;

// Массив загаданных ячеек
const hiddenCells = new Set();

// Генерация случайных ячеек
while (hiddenCells.size < hiddenCount) {
    let row = Math.floor(Math.random() * rows);
    let col = Math.floor(Math.random() * cols);

    hiddenCells.add(`${row}-${col}`);
}

// Создаем таблицу
for (let i = 0; i < rows; i++) {
    let tr = document.createElement('tr');

    for (let j = 0; j < cols; j++) {
        let td = document.createElement('td');

        td.addEventListener('click', function () {

            // Запрет повторного клика
            if (
                td.classList.contains('good') ||
                td.classList.contains('bad')
            ) {
                return;
            }

            let key = `${i}-${j}`;

            if (hiddenCells.has(key)) {
                td.classList.add('good');
                found++;

                if (found === hiddenCount) {
                    result.textContent = 'Вы победили!';
                }

            } else {
                td.classList.add('bad');
            }
        });

        tr.appendChild(td);
    }

    table.appendChild(tr);
}