{\rtf1\ansi\ansicpg1252\cocoartf2820
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fmodern\fcharset0 Courier;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue0;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c0;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs26 \cf0 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 // Calculator Logic\
function appendValue(value) \{\
    const display = document.getElementById("display");\
    display.value += value;\
\}\
\
function clearDisplay() \{\
    document.getElementById("display").value = "";\
\}\
\
function deleteLast() \{\
    const display = document.getElementById("display");\
    display.value = display.value.slice(0, -1);\
\}\
\
function calculate() \{\
    const display = document.getElementById("display");\
    try \{\
        const result = eval(display.value);\
        addToHistory(display.value + " = " + result);\
        display.value = result;\
    \} catch \{\
        display.value = "Error";\
    \}\
\}\
\
// History Logic\
function addToHistory(entry) \{\
    const historyList = document.getElementById("historyList");\
    const listItem = document.createElement("li");\
    listItem.textContent = entry;\
    historyList.appendChild(listItem);\
\}\
\
// Area Measurement Logic\
function calculateArea() \{\
    const length = parseFloat(document.getElementById("length").value);\
    const breadth = parseFloat(document.getElementById("breadth").value);\
    const unit = document.getElementById("areaUnit").value;\
    const resultElement = document.getElementById("areaResult");\
\
    if (isNaN(length) || isNaN(breadth)) \{\
        resultElement.innerText = "Result: Please enter valid numbers.";\
        return;\
    \}\
\
    let area;\
    if (unit === "sqft") \{\
        area = length * breadth;\
        resultElement.innerText = `Result: $\{area\} square feet`;\
    \} else if (unit === "guzz") \{\
        area = (length * breadth) * 0.8361; // 1 guzz = 0.8361 square meters\
        resultElement.innerText = `Result: $\{area.toFixed(2)\} guzz`;\
    \} else \{\
        resultElement.innerText = "Result: Invalid unit.";\
    \}\
\}\
\
// Note Counting Logic\
function calculateTotalAmount() \{\
    const noteValue = parseInt(document.getElementById("noteValue").value);\
    const noteCount = parseInt(document.getElementById("noteCount").value);\
    const totalElement = document.getElementById("totalAmount");\
\
    if (isNaN(noteValue) || isNaN(noteCount)) \{\
        totalElement.innerText = "Total Amount: Please enter valid inputs.";\
        return;\
    \}\
\
    const totalAmount = noteValue * noteCount;\
    totalElement.innerText = `Total Amount: \uc0\u8377 $\{totalAmount\}`;\
\}\
}