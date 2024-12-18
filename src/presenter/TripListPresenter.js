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
        console.log(`Reacehed herer: ${trip.id} ${this.#tripsModel.trips.length}`)
        this.#tripsModel.deleteTrip(trip.id)
    }
    addTrip(){
        const destination=document.querySelector('#trip-destination');
        const date=document.querySelector('#trip-date');
        const notes=document.querySelector('#trip-notes');
        console.log(`Showing`)
        if(!destination||!date||!notes){
            console.log(`Showing`)
            return
        }
        console.log('Reached hhhh')
        this.#tripsModel.addTrip({'id':Math.floor(Math.random()*99),'destination':destination.value,'date':date.value,'notes':notes.value})
        document.querySelector('#trip-destination').value=''
        document.querySelector('#trip-date').value=''
        document.querySelector('#trip-notes').value=''
    }
}