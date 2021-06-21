document.addEventListener('DOMContentLoaded', () => {
    let currentNumber = 0;

    // COUNTER
    const counterNumber = document.querySelector('#counter-number');

    // COUNTER BUTTONS
    const resetBtn = document.querySelector('#reset-btn');
    resetBtn.onclick = () => resetCounter();
    
    const increaseBtn = document.querySelector('#increase-btn');
    increaseBtn.onclick = () => increaseCounter();
    
    const decreaseBtn = document.querySelector('#decrease-btn');
    decreaseBtn.onclick = () => decreaseCounter();


    //Increase counter
    const increaseCounter = () => {
        currentNumber++;
        setCounterNumber(currentNumber);
        console.log('increased');
    }

    //Reset counter 
    const resetCounter = () => {
        currentNumber = 0;
        setCounterNumber(currentNumber);
    }

   //Decrease counter
    const decreaseCounter = () => {
        currentNumber--;
        setCounterNumber(currentNumber);
    }



    // Set the current number in the DOM
    const setCounterNumber = (number) => {
        setCounterNumberColor(number);
        counterNumber.textContent = number;
    }

    const setCounterNumberColor = (number) => {

        if(number > 0){
            counterNumber.classList = 'positive active-number counter-number';
        }else if(number == 0){
            counterNumber.classList = 'counter-number'
        }else{
            counterNumber.classList = 'negative active-number counter-number';
        }

    }
    
});