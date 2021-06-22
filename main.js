document.addEventListener('DOMContentLoaded', () => {
    let currentNumber = 0;

    // COUNTER
    const $counter = document.querySelector('#counter');
    const $counterNumber = document.querySelector('#counter-number');

    // COUNTER BUTTONS
    const $resetBtn = document.querySelector('#reset-btn');
    $resetBtn.onclick = () => resetCounter();
    
    const $increaseBtn = document.querySelector('#increase-btn');
    $increaseBtn.onclick = () => increaseCounter();
    
    const $decreaseBtn = document.querySelector('#decrease-btn');
    $decreaseBtn.onclick = () => decreaseCounter();


    //Increase counter
    const increaseCounter = () => {
        currentNumber++;
        setCounterNumber(currentNumber);
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
        $counterNumber.textContent = number;
    }

    const setCounterNumberColor = (number) => {

        if(number > 0){
            $counter.classList.add('active-counter');
            $counterNumber.classList = 'positive counter-number';
        }else if(number == 0){
            $counter.classList.remove('active-counter');
            $counterNumber.classList = 'counter-number'
        }else{
            $counter.classList.add('active-counter');
            $counterNumber.classList = 'negative active-number counter-number';
        }

        setBackgroundColor(number);

   }

    // Card Color
    const $main = document.querySelector('#main');
    const $cardColor = document.querySelector('#card-color');
    const MAX_COLOR = 16777215;
    
    //simple
    let currentColor = 0; 
    const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
   
    const $simpleBtn = document.querySelector('#simple-btn')
    $simpleBtn.onclick = () => navActiveBtn($simpleBtn, $hexBtn, 'nav-active-btn');
 
    //hex
    const randomColor =  () => (Math.round(Math.random()*(MAX_COLOR))).toString(16);

    const $hexBtn = document.querySelector('#hex-btn')
    $hexBtn.onclick = () => navActiveBtn($hexBtn, $simpleBtn, 'nav-active-btn');

    const navActiveBtn = (activeNode, deactiveNode, className) => {

        if(!activeNode.classList.contains('nav-active-btn')){
            activeNode.classList.add(className);
            deactiveNode.classList.remove(className);
        }

    }

    const setBackgroundColor = (number) => {

        if(number == 0){
            $main.style.backgroundColor = '#1e2022';
            $cardColor.textContent = '#1e2022';
  
        }else{

            if($simpleBtn.classList.contains('nav-active-btn')){
                if(currentColor > colors.length-1) currentColor = 0;
                $main.style.backgroundColor = colors[currentColor];
                $cardColor.textContent = colors[currentColor++];
  

            }else{
                let color = "#" + randomColor();
                $main.style.backgroundColor = color;
                $cardColor.textContent = color;

            }

        }

 
    }

    
});