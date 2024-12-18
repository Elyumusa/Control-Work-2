import { createElement } from "../framework/render.js"

function createFormAddApplicantTemplate() {
    return (`
        <div class="operation-form">
                <select id="operationType">
                    <option value="" disabled selected>Выберите тип операции</option>
                    <option value="income">Доход</option>
                    <option value="expense">Расход</option>
                </select>
    
                <select id="category">
                    <option value="" disabled selected>Выберите категорию</option>
                    <option value="transport">Транспорт</option>
                    <option value="food">Еда</option>
                    <option value="salary">Зарплата</option>
                    <option value="other">Другое</option>
                </select>
    
                <input type="number" id="amount" placeholder="Сумма" step="0.01">
                
                <button id="addOperation">Добавить операцию</button>
            </div>  
        `)
}

export default class FormAddApplicantComponent{
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
        return createFormAddApplicantTemplate()
    }

    getelement(){
        if (!this.element) {
            this.element=createElement(this.template)
        }
        return this.element
    }
}