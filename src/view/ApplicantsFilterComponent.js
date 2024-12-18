import { createElement } from "../framework/render.js"

function createapplicantsFilterTemplate() {
    return (`
           <div class="filters-container">
                <select id="operationFilter">
                    <option value="all">Все операции</option>
                    <option value="income">Доходы</option>
                    <option value="expense">Расходы</option>
                </select>

                <select id="categoryFilter">
                    <option value="all">Все категории</option>
                    <option value="transport">Транспорт</option>
                    <option value="food">Еда</option>
                    <option value="salary">Зарплата</option>
                    <option value="other">Другое</option>
                </select>
            </div>`)
}

export default class ApplicantsFilterComponent{
    #handleSubmit=null
    #submitHandler=(evt)=>{
        evt.preventDefault()
        console.log(`Whats up`)
        this.#handleSubmit()
    }

    constructor({onSubmit}){
        this.#handleSubmit=onSubmit
        this.getelement().addEventListener('submit',this.#submitHandler)
    }
    get template(){
        return createapplicantsFilterTemplate()
    }

    getelement(){
        if (!this.element) {
            this.element=createElement(this.template)
        }
        return this.element
    }
}