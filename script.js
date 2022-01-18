class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }

    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }

    delete() {

    }

    appendNumber(number) {

    }

    chooseOperation(operation){

    }

    compute() {

    }

    updateDisplay(){

    }
}




const numberButtons = doncument.querySelectorAll('[data-number]')
const operationButtons = doncument.querySelectorAll('[data-operation]')
const equalsButton = doncument.querySelector('[data-equals]')
const deleteButton = doncument.querySelector('[data-delete]')
const allClearButton = doncument.querySelector('[data-all-clear]')
const previousOperandTextElement = doncument.querySelector('[data-previous-operand]')
const currentOperandTextElement = doncument.querySelector('[data-current-operand]')