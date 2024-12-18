import { createElement } from "../framework/render.js"


function createEntryComponentTemplate(balance) {
    //const {destination,date,notes}=trip

    return (
        `<h2>Общий баланс: <span id="totalBalance">${balance}</span> руб.</h2>`
    )
}
//
export default class BalanceComponent{
    constructor({balance}) {
        this.balance=balance;
    }

    get template(){
        return createEntryComponentTemplate(this.balance)
    }

    getelement(){
        if (!this.element) {
            this.element=createElement(this.template)
        }
        return this.element
    }
}