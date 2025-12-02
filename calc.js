const body = document.querySelector("body");

const calc = document.createElement("div");
calc.classList.add("calc");
body.appendChild(calc);

const screenBox = document.createElement("div");
screenBox.classList.add("screen");
screenBox.textContent = "0";
calc.appendChild(screenBox);

    const btn_container = document.createElement("div");
    btn_container.classList.add("container");
    calc.appendChild(btn_container);

    const btn_7 = document.createElement("button")
    btn_7.classList.add("button")
    btn_7.textContent = "7";
    btn_container.appendChild(btn_7);

    const btn_4 = document.createElement("button")
    btn_4.classList.add("button")
    btn_4.textContent = "4";
    btn_container.appendChild(btn_4);

    const btn_1 = document.createElement("button")
    btn_1.classList.add("button")
    btn_1.textContent = "1";
    btn_container.appendChild(btn_1);

    const btn_0 = document.createElement("button")
    btn_0.classList.add("button")
    btn_0.textContent = "0";
    btn_container.appendChild(btn_0);

    const btn_8 = document.createElement("button")
    btn_8.classList.add("button")
    btn_8.textContent = "8";
    btn_container.appendChild(btn_8);

    const btn_5 = document.createElement("button")
    btn_5.classList.add("button")
    btn_5.textContent = "5";
    btn_container.appendChild(btn_5);

    const btn_2 = document.createElement("button")
    btn_2.classList.add("button")
    btn_2.textContent = "2";
    btn_container.appendChild(btn_2);

    const btn_dot = document.createElement("button")
    btn_dot.classList.add("button")
    btn_dot.textContent = ".";
    btn_container.appendChild(btn_dot);

    const btn_9 = document.createElement("button")
    btn_9.classList.add("button")
    btn_9.textContent = "9";
    btn_container.appendChild(btn_9);


    const btn_6 = document.createElement("button")
    btn_6.classList.add("button")
    btn_6.textContent = "6";
    btn_container.appendChild(btn_6);

  
    const btn_3 = document.createElement("button")
    btn_3.classList.add("button")
    btn_3.textContent = "3";
    btn_container.appendChild(btn_3);

    const btn_del = document.createElement("button")
    btn_del.classList.add("button")
    btn_del.textContent = "Del";
    btn_container.appendChild(btn_del);

    const btn_minus = document.createElement("button");
    btn_minus.classList.add("button");
    btn_minus.textContent = "-";
    btn_container.appendChild(btn_minus);
       
    const btn_plus = document.createElement("button");
    btn_plus.classList.add("button");
    btn_plus.textContent = "+";
    btn_container.appendChild(btn_plus);

    const btn_multi = document.createElement("button");
    btn_multi.classList.add("button");
    btn_multi.textContent = "x";
    btn_container.appendChild(btn_multi);

    const btn_divide = document.createElement("button");
    btn_divide.classList.add("button");
    btn_divide.textContent = "÷";
    btn_container.appendChild(btn_divide);

    const btn_equal = document.createElement("button");
    btn_equal.classList.add("button_equal");
    btn_equal.textContent = "=";
    btn_container.appendChild(btn_equal);


