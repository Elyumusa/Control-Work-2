import { createElement } from "../framework/render.js"


function createEntryComponentTemplate(op) {
    //const {destination,date,notes}=trip

    return (
        ` <div class="operation ${op.type}">
            <span>${op.category} (${op.type === 'income' ? 'доход' : 'расход'}): ${op.amount.toFixed(2)} руб.</span>
            <button class="delete-btn" onclick="deleteOperation(${op.id})">Удалить</button>
        </div>`
    )
}
//
export default class EntryComponent{

    #handleDeleteClick=null
    #clickHandler=(evt)=>{
        evt.preventDefault()
        this.#handleDeleteClick()
    }
    constructor({operation, onDeleteClick}) {
        this.operation=operation;
        this.#handleDeleteClick=onDeleteClick
        this.getelement().querySelector('.delete-btn').addEventListener("click",this.#clickHandler)
    }

    get template(){
        return createEntryComponentTemplate(this.operation)
    }

    getelement(){
        if (!this.element) {
            this.element=createElement(this.template)
        }
        return this.element
    }
}