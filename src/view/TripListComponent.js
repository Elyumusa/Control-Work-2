import { createElement } from "../framework/render.js"

function createTripListComponent(){
    return (`
        <div class="operationsList">
        </div>
        `)
}

export default class TripListComponent{

    get template(){
        return createTripListComponent()
    }

    getelement(){
        if (!this.element) {
            this.element=createElement(this.template)
        }
        return this.element
    }
}