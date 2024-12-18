import { operations } from "../mock/trips.js";


export default class TripsModel{
    
    #operations=operations
    #observers=[]
    get operations(){
        return this.#operations
    }

    // Add new operation
 addOperation() {
    const type = operationTypeSelect.value;
    const category = categorySelect.value;
    const amount = parseFloat(amountInput.value);

    if (!type || !category || isNaN(amount)) {
        alert('Пожалуйста, заполните все поля');
        return;
    }

    const newOperation = {
        id: operations.length + 1,
        type,
        category,
        amount
    };

    operations.push(newOperation);

    // Update balance
    if (type === 'income') {
        balance += amount;
    } else {
        balance -= amount;
    }
    updateBalance();

    // Reset form
    operationTypeSelect.value = '';
    categorySelect.value = '';
    amountInput.value = '';

    displayOperations();
}
   // Delete operation
 deleteOperation(id) {
    const operationIndex = operations.findIndex(op => op.id === id);
    if (operationIndex !== -1) {
        const operation = operations[operationIndex];
        if (operation.type === 'income') {
            balance -= operation.amount;
        } else {
            balance += operation.amount;
        }
        operations.splice(operationIndex, 1);
        updateBalance();
        displayOperations();
    }
}

    _notifyObservers(){
        this.#observers.forEach((observer)=>observer());
    }
    addObserver(observer){
        this.#observers.push(observer);
    }
}