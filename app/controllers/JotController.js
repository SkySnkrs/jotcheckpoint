import { AppState } from "../AppState.js"
import { jotServices } from "../services/JotServices.js"


export class JotController {
    constructor() {
        console.log('Jot Controller Is Functioning')
        AppState.on('jots', this.drawJot)
        jotServices.loadJots()
    }

    drawJot() {
        console.log('ready to draw')
        const jotsElem = document.getElementById('jotNotes')
        jotsElem.innerHTML = ''

        AppState.jots.forEach(jot => jotsElem.innerHTML += jot.jotBodyTemplate)

        const jotCountElem = document.getElementById('totalNotes')
        jotCountElem.innerHTML = ''
        // @ts-ignore
        jotCountElem.innerHTML = AppState.jots.length
    }

    createJot() {
        console.log('Creating Case File');
        event.preventDefault()
        const formElm = event.target
        const formData = {
            // @ts-ignore
            color: formElm.color.value,
            // @ts-ignore
            title: formElm.title.value
        }
        console.log(formData);
        jotServices.createJot(formData)
        this.drawJot
    }
}