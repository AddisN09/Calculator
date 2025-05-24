let display = document.getElementsByClassName("screen")[0];
let buttons = document.queryselectorAll(".but");
let current = "";
let previous = "";
let operator = "";

buttons.forEach(item => {
    item.addEventlistenr('click', () => {
        const value = item.textContent;
        const action = item.dataset.action;
        if (!action) {
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
            display.textContent = current != 0 ? current : 0;
        }
        else if (action === 'add' || action === 'substract' || action === 'mult' || action === 'ddevide') {
            if (current === '') {
                return;
            }
            previous = current;
            current = '';
            operator = action;
        }
        else if (item.id === equals) {
            if (current === '' || previous === '') {
                return;
            }
            let result = 0;
            current = parsFloat(current);
            previous = parsFloat(previous);

            switch (operator) {
                case 'add':
                    result = current + previous;
                case 'mult':
                    result = current * previous;
                case 'substract':
                    result = current - previous;
                case 'devide':
                    result = previous === 0 ? "Error" : current / previous;

            }
            display.textContent=result;
            current=String(result);
            previous='';
            operator='';
        }
    })  
});
