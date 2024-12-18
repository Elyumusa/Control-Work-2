import { render } from "../framework/render.js";
import EntryComponent from "../view/TripComponent.js";
import TripComponent from "../view/TripComponent.js";
import TripListComponent from "../view/TripListComponent.js";


export default class EntryListPresenter{
    #triplistComponent= new TripListComponent();
    #entryListContainer=null;
    #tripsModel=null;
    operationsListDiv = document.getElementById('operationsList');
    operationFilter = document.getElementById('operationFilter');
    categoryFilter = document.getElementById('categoryFilter');
    constructor({entryListContainer, tripsModel}){
        this.#entryListContainer=entryListContainer;
        this.#tripsModel=tripsModel
       this.#tripsModel.addObserver(this.#handleModelChange.bind(this))
    }
    init(){
        render(this.#triplistComponent,this.#entryListContainer)
        this.#displayOperations();
    }

    // Display operations with filters
 #displayOperations() {
    const typeFilter = operationFilter.value;
    const catFilter = categoryFilter.value;

    const filteredOperations = this.#tripsModel.operations.filter(op => {
        const matchesType = typeFilter === 'all' || op.type === typeFilter;
        const matchesCategory = catFilter === 'all' || op.category === catFilter;
        return matchesType && matchesCategory;
    });
    console.log(`${filteredOperations.length}`)
    for (let index = 0; index < filteredOperations.length; index++) {
        const op=filteredOperations[index]
        //Create book component
        console.log(`${op.type}`)
        const entryComponent = new EntryComponent({operation:op,onDeleteClick:()=>this.deleteTrip(op)})//,onDeleteClick:()=>this.deleteBook(b)})
        //Display
        render(entryComponent,this.#triplistComponent.element)
        
    }
}
    #handleModelChange(){
        this.#clearTripListSection()
        this.#displayOperations();
    }
    #clearTripListSection(){
        this.#triplistComponent.getelement().innerHTML='';
    }
    deleteTrip(trip){
        console.log(`Reacehed herer: ${trip.id} ${this.#tripsModel.operations.length}`)
        this.#tripsModel.deleteOperation(trip.id)
        this.#clearTripListSection();
        this.#displayOperations();
    }
    addOperation(){
        const operationTypeSelect = document.getElementById('operationType');
        const categorySelect = document.getElementById('category');
        const amountInput = document.getElementById('amount');
        const type = operationTypeSelect.value;
        const category = categorySelect.value;
        const amount = parseFloat(amountInput.value);
    
        if (!type || !category || isNaN(amount)) {
            alert('Пожалуйста, заполните все поля');
            return;
        }
        this.#tripsModel.addOperation({'type':type,'category':category,'amount':amount})
         // Reset form
        operationTypeSelect.value = '';
        categorySelect.value = '';
        amountInput.value = '';
        this.#clearTripListSection();
        this.#displayOperations();
    }
}