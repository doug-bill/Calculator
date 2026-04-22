// -------------VISUALS -----------------

const body = document.querySelector("body");

const calc = document.createElement("div");
calc.classList.add("calc");
body.appendChild(calc);

const screenBox = document.createElement("div");
screenBox.classList.add("screen");
screenBox.textContent = "0";
calc.appendChild(screenBox);

    const container = document.createElement("div");
    container.classList.add("buttons_container");
    calc.appendChild(container);

    const btn_horizontal = document.createElement("div");
    btn_horizontal.classList.add("container");
    container.appendChild(btn_horizontal);

    // Buttons

    const btn_del = document.createElement("button")
    btn_del.classList.add("button")
    btn_del.textContent = "C";
    btn_horizontal.appendChild(btn_del);

    const btn_divide = document.createElement("button");
    btn_divide.classList.add("button");
    btn_divide.textContent = "/";
    btn_horizontal.appendChild(btn_divide);

    const btn_multi = document.createElement("button");
    btn_multi.classList.add("button");
    btn_multi.textContent = "*";
    btn_horizontal.appendChild(btn_multi);

    const btn_7 = document.createElement("button")
    btn_7.classList.add("button")
    btn_7.textContent = "7";
    btn_horizontal.appendChild(btn_7);

    const btn_8 = document.createElement("button")
    btn_8.classList.add("button")
    btn_8.textContent = "8";
    btn_horizontal.appendChild(btn_8);

    const btn_9 = document.createElement("button")
    btn_9.classList.add("button")
    btn_9.textContent = "9";
    btn_horizontal.appendChild(btn_9);

    const btn_4 = document.createElement("button")
    btn_4.classList.add("button")
    btn_4.textContent = "4";
    btn_horizontal.appendChild(btn_4);

    const btn_5 = document.createElement("button")
    btn_5.classList.add("button")
    btn_5.textContent = "5";
    btn_horizontal.appendChild(btn_5);

    const btn_6 = document.createElement("button")
    btn_6.classList.add("button")
    btn_6.textContent = "6";
    btn_horizontal.appendChild(btn_6);

    const btn_1 = document.createElement("button")
    btn_1.classList.add("button")
    btn_1.textContent = "1";
    btn_horizontal.appendChild(btn_1);

    const btn_2 = document.createElement("button")
    btn_2.classList.add("button")
    btn_2.textContent = "2";
    btn_horizontal.appendChild(btn_2);
  
    const btn_3 = document.createElement("button")
    btn_3.classList.add("button")
    btn_3.textContent = "3";
    btn_horizontal.appendChild(btn_3);

    const btn_0 = document.createElement("button")
    btn_0.classList.add("button","button_zero")
    btn_0.textContent = "0";
    btn_horizontal.appendChild(btn_0);

    const btn_dot = document.createElement("button")
    btn_dot.classList.add("button")
    btn_dot.textContent = ".";
    btn_horizontal.appendChild(btn_dot);

    const btn_vertical = document.createElement("div");
    btn_vertical.classList.add("container_r");
    container.appendChild(btn_vertical);

    const btn_minus = document.createElement("button");
    btn_minus.classList.add("button");
    btn_minus.textContent = "-";
    btn_vertical.appendChild(btn_minus);


    const btn_plus = document.createElement("button");
    btn_plus.classList.add( "button","button_plus");
    btn_plus.textContent = "+";
    btn_vertical.appendChild(btn_plus);

    // const btn_pa = document.createElement("button")
    // btn_pa.classList.add("button")
    // btn_pa.textContent = "()";
    // btn_vertical.appendChild(btn_pa);
   
    const btn_equal = document.createElement("button");
    btn_equal.classList.add("button","button_equal");
    btn_equal.textContent = "=";
    btn_vertical.appendChild(btn_equal);

//-------------------------------------------------------------

// Logic
const ops = {
    '+': (a,b) => a + b,
    '-': (a,b) => a - b,
    '*': (a,b) => a * b,
    '/': (a,b) => b === 0 ? 'Error': a / b 
}; 

let calculus = {
    displayValue:'0',
    firstNumber: null,
    operator: null,
    WaitingForSecond: false,
    DoneCalculating: false,
};

function render (){
    screenBox.textContent = calculus.displayValue;
}

function pressDigit(d){
    if (calculus.WaitingForSecond){
        calculus.displayValue = d;
        calculus.WaitingForSecond = false;
    } else {
     calculus.displayValue = calculus.displayValue ==='0'
     ? d
     : calculus.displayValue.length < 10
        ? calculus.displayValue + d
        : calculus.displayValue;
    }
    render();
}

function pressOp(op) {
    calculus.firstNumber = parseFloat(calculus.displayValue);
    calculus.operator = op;
    calculus.WaitingForSecond = true;
    render();
}

function equation(){
    const { firstNumber, operator, displayValue} = calculus;
    if (!operator || firstNumber === null) return;
    const b = parseFloat(displayValue);
    const result = ops [operator] ?.(firstNumber, b);
    calculus.displayValue = result === 'Error' ? 'Error' : String(parseFloat(result.toFixed(10)));
    calculus.firstNumber = null;
    calculus.operator = null;
    render();
    DoneCalculating = true;
}

function cls() {
    calculus.displayValue = '0';
    calculus.firstNumber = null;
    calculus.operator = null;
    calculus.WaitingForSecond = false;
    calculus.DoneCalculating = false;
    render();
}

  container.addEventListener("click", (event) =>{

    if(!event.target.classList.contains("button")) return;  
    let btn = event.target.textContent;

    console.log(calculus.displayValue + btn);
        if (btn == "C"){
            cls();
            btn = '0';
        } 
            else if (btn == '/' || btn == '+' || btn == '-' || btn == '*' ){
            pressOp(btn);
            screenBox.textContent = calculus.displayValue + calculus.operator;
            }
            else if (btn == '='){
            equation();
            }
                else if (!calculus.firstNumber == '0'){
                pressDigit(btn);
                screenBox.textContent = calculus.firstNumber + calculus.operator + btn;
            }
            else {
                pressDigit(btn);
            }
})        

/* Todo to erase the state after the first equation, so the number on the display
is not considered with the next */