# 🧮 Calculator — 電卓

A clean, keyboard-free calculator built entirely with vanilla JavaScript DOM manipulation.  
Part of [The Odin Project](https://www.theodinproject.com/) curriculum.

🔗 **Live Demo:** https://doug-bill.github.io/Calculator/

---

## ✨ Features

- ➕ Addition, ➖ Subtraction, ✖️ Multiplication, ➗ Division
- 🔴 **Error handling** — displays `Error` on division by zero
- 🔢 **Decimal support** — floating point calculations
- 🧹 **Clear (C)** — resets all state to zero
- 📏 **Display limit** — caps input at 10 characters to prevent overflow
- 🎨 **Neumorphic dark UI** — styled with a dark gradient and soft shadows

---

## 🛠️ Built With

- HTML5
- CSS3 (Flexbox, Neumorphism)
- Vanilla JavaScript (DOM manipulation, Event Delegation)
- JetBrains Mono — monospace font for authentic calculator feel

---

## 📁 Project Structure

├── index.html       # App entry point
├── calc.js          # All UI creation and calculator logic
└── style.css        # Layout, neumorphic styling and button design

---

## 🔧 How It Works

### State Management
All calculator state is stored in a single object:

```js
let calculus = {
    displayValue: '0',
    firstNumber: null,
    operator: null,
    WaitingForSecond: false,
    DoneCalculating: false,
};
```

### Operators
Operations are handled via a clean `ops` object mapping:

```js
const ops = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => b === 0 ? 'Error' : a / b
};
```

### Event Delegation
A single event listener on the buttons container handles all click interactions,
checking `event.target` to identify which button was pressed.

---

## ⚠️ Known Issues / Limitations

- Chained operations (e.g. `2 + 3 * 4`) do not follow operator precedence — 
  result is calculated left to right
- After completing an equation, the result is not automatically used as 
  the first number in the next operation (`DoneCalculating` state — in progress)
- No keyboard input support
- Layout is not responsive on mobile screens

---

## 🚀 How to Run

No installation required.  
Open the live demo: https://doug-bill.github.io/Calculator/  
or clone the repo and open `index.html` in any modern browser.

---

## 👨‍💻 Author

Developed by [Doug-bill](https://github.com/doug-bill)