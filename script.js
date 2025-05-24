 let display = document.getElementsByClassName("screen")[0];
let buttons = document.querySelectorAll(".but");
let current = "";
let previous = "";
let operator = "";

buttons.forEach(item => {
    item.addEventListener('click', () => {
        const value = item.textContent;
        const action = item.dataset.action;
 
        if (!action && item.id !== "equals") {
            current += value;
            display.textContent = current;
        }
 
        else if (action === "clear") {
            current = '';
            previous = '';
            operator = '';
            display.textContent = '0';
        }
 
        else if (action === 'delete') {
            current = current.slice(0, -1);
            display.textContent = current !== '' ? current : '0';
        }
 
        else if (action === 'add' || action === 'substract' || action === 'mult' || action === 'devide') {
            if (current === '') return;
            previous = current;
            current = '';
            operator = action;
            display.textContent = value; 
        }
 
        else if (item.id === "equals") {
            if (current === '' || previous === '') return;

            let result = 0;
            const a = parseFloat(previous);
            const b = parseFloat(current);

            switch (operator) {
                case 'add':
                    result = a + b;
                    break;
                case 'substract':
                    result = a - b;
                    break;
                case 'mult':
                    result = a * b;
                    break;
                case 'devide':
                    result = b === 0 ? "Error" : a / b;
                    break;
            }

            display.textContent = result;
            current = String(result);
            previous = '';
            operator = '';
        }
    });
});
