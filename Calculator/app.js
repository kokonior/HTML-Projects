const buttons = document.querySelectorAll('button');
const screen = document.getElementById('screen');

for (let button of buttons) {
    
    button.addEventListener('click', (e) => {
        const buttonText = e.target.innerText;
       
        if (buttonText === 'x') {
            screen.value += '*';
        }
        else if (buttonText === 'C') {
            screen.value = "";
        }
        else if (buttonText === '=') {
            try {
                screen.value=eval(screen.value);
            }
            catch (e) {
                console.log(e.message);
                screen.value="Invalid Operation"
            }
            
        }
        else {
            screen.value += buttonText;
        }
    })
}