import { operations } from "../mock/trips.js";


export default class TripsModel{
    
    #operations=operations
    #observers=[]
    get operations(){
        return this.#operations
    }
    balance = 262.00;

    // Add new operation
 addOperation(op) {
    const type = op.type;
    const category = op.category;
    const amount = op.amount;

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

    this.#operations.push(newOperation);

    // Update balance
    if (type === 'income') {
        this.balance += amount;
    } else {
        this.balance -= amount;
    }
    //updateBalance();

   
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