import { AppState } from "../AppState.js"
import { Jot } from "../models/Jot.js"
import { loadState, saveState } from "../utils/Store.js"


class JotServices {

    deleteJot(jotId) {
        const index = AppState.jots.findIndex(Jot => jotId == Jot.id);
        if (index !== -1) {
            AppState.jots.splice(index, 1);
            AppState.emit('jots')
            saveState('jots', AppState.jots)
        }

    }
    selectActiveJot(jotId) {
        const selectedJot = AppState.jots.find(Jot => jotId == Jot.id)
        AppState.activeJots = selectedJot
    }

    saveActiveJot(newText) {
        const jot = AppState.activeJots
        jot.body = (newText)
        jot.updatedDate = new Date()
        AppState.emit('jots')
        AppState.emit('activeJots')
        this.saveJots()
    }

    createJot(formData) {
        AppState.jots.push(new Jot(formData))
        this.saveJots()
    }

    saveJots() {
        saveState('jots', AppState.jots)
    }

    loadJots() {
        AppState.jots = loadState('jots', [Jot])
    }
}

export const jotServices = new JotServices()