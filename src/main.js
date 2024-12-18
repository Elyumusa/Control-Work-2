import { render } from "./framework/render.js"
import TripsModel from "./model/trips_model.js"
import TripListPresenter from "./presenter/TripListPresenter.js"
import FormAddTripComponent from "./view/FormAddApplicant.js"
import ApplicantsFilterComponent from "./view/ApplicantsFilterComponent.js"
import EntryListPresenter from "./presenter/TripListPresenter.js"


const tripsModel=new TripsModel()
const entryListContainer=document.getElementById('operationsList')
const entryListPresenter=new EntryListPresenter({entryListContainer,tripsModel})
const formEntryComponent=new FormAddTripComponent({onSubmit:handleNewTripCreated})
const formContainer=document.querySelector('.financeEntrySection')
const filterEntriesContainer=document.querySelector('.filters')
const entriesfilterComponent=new ApplicantsFilterComponent({onSubmit:()=>{}})
render(formEntryComponent,formContainer)
render(entriesfilterComponent,filterEntriesContainer)
entryListPresenter.init()


function handleNewTripCreated(){
    console.log('Reached hhhh')
    //tripListPresenter.addTrip()
}


// Initial data
let operations = [
    { id: 1, type: 'income', category: 'transport', amount: 300 },
    { id: 2, type: 'expense', category: 'transport', amount: 38 }
];

let balance = 262.00;

// DOM Elements
const totalBalanceElement = document.getElementById('totalBalance');
const operationTypeSelect = document.getElementById('operationType');
const categorySelect = document.getElementById('category');
const amountInput = document.getElementById('amount');
const addOperationBtn = document.getElementById('addOperation');

const operationFilter = document.getElementById('operationFilter');
const categoryFilter = document.getElementById('categoryFilter');

// Update balance display
function updateBalance() {
    totalBalanceElement.textContent = balance.toFixed(2);
}








// Event Listeners
addOperationBtn.addEventListener('click', addOperation);
operationFilter.addEventListener('change', displayOperations);
categoryFilter.addEventListener('change', displayOperations);

// Initial display
updateBalance();
displayOperations();