calculator = {
    currentNumber: "",
    array: [],
    buttons: document.querySelectorAll(".buttonBox"),
    operands: document.querySelectorAll(".numberBox"),
    results: document.querySelector("#results"),
    removeButton: document.querySelector("#remove"),

    /*addNumberToArray(event) {
        if(!isNaN(event.target.value)) {
            this.array.push(parseFloat(event.target.value))
        } else {
            this.array.push(event.target.value)
        }
    
    this.results.textContent = this.array.join("")
    },*/
    addNumberToArray(event) {
        const value = event.target.value
        if(!isNaN(value)) {
            this.currentNumber += value;
            this.results.textContent = this.currentNumber;
        } else {
            if(this.currentNumber !== "") {
                this.array.push(this.currentNumber)
                this.currentNumber = ""
            }
        this.array.push(value)
        this.results.textContent = this.array.join("");
        }
    },
    
    removeNumberFromArray() {
        this.array = []
        this.results.textContent = this.array
    },
    equals() {
 if (this.currentNumber !== "") {
        this.array.push(this.currentNumber);
        this.currentNumber = "";
    }

    // convert number strings to numbers
    let arr = this.array.map(item => isNaN(item) ? item : parseFloat(item));

    // handle * and / first
    let i = 0;
    while (i < arr.length) {
        if (arr[i] === "*") {
            arr[i-1] = arr[i-1] * arr[i+1];
            arr.splice(i, 2);
        } else if (arr[i] === "/") {
            arr[i-1] = arr[i-1] / arr[i+1];
            arr.splice(i, 2);
        } else {
            i++;
        }
    }

    // handle + and -
    i = 0;
    while (i < arr.length) {
        if (arr[i] === "+") {
            arr[i-1] = arr[i-1] + arr[i+1];
            arr.splice(i, 2);
        } else if (arr[i] === "-") {
            arr[i-1] = arr[i-1] - arr[i+1];
            arr.splice(i, 2);
        } else {
            i++;
        }
    }

    this.results.textContent = arr[0];
    this.array = [arr[0]]; // ready for next operation
}
}

calculator.buttons.forEach(button => {
    button.addEventListener("click", calculator.addNumberToArray.bind(calculator))
})

calculator.operands.forEach(button => {
    if(button.id !== "remove" && button.id !== "equals") {
    button.addEventListener("click", calculator.addNumberToArray.bind(calculator))
    } else if(button.id === "remove") {
    button.addEventListener("click", calculator.removeNumberFromArray.bind(calculator))
    } else {
    button.addEventListener("click", calculator.equals.bind(calculator))
    }
})





console.log(calculator.array)