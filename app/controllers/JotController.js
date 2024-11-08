import { AppState } from "../AppState.js"
import { jotServices } from "../services/JotServices.js"

export class JotController {
    constructor() {
        console.log('Jot Controller Is Functioning')
        AppState.on('jots', this.drawJot)
        AppState.on('activeJots', this.drawActiveJot)
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

    drawActiveJot() {
        console.log('ready to draw active jot');
        const activeJotElem = document.getElementById('activeJot')
        activeJotElem.innerHTML = ''
        activeJotElem.innerHTML = AppState.activeJots.activeJotTemplate
    }

    selectActiveJot(jotId) {
        console.log('Selecting Jot', jotId);
        jotServices.selectActiveJot(jotId)
    }

    deleteJot(jotId) {
        confirm("Are you sure you want to delete this jot?");
        jotServices.deleteJot(jotId)
        console.log('deleted', jotId)
        const activeJotElem = document.getElementById('activeJot')
        activeJotElem.innerHTML = ''
        activeJotElem.innerHTML = AppState.activeJots.originalActivePage
    }

    saveActiveJots() {
        event.preventDefault()
        console.log('Saving active Jot', AppState.activeJots);
        const formElm = event.target
        // @ts-ignore
        let newText = formElm.body.value
        console.log(newText);
        jotServices.saveActiveJot(newText)
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
        this.drawActiveJot
    }
}