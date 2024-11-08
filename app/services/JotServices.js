import { AppState } from "../AppState.js"
import { Jot } from "../models/Jot.js"
import { loadState, saveState } from "../utils/Store.js"


class JotServices {
    selectActiveJot(jotId) {
        console.log('service', jotId);
        const selectedJot = AppState.jots.find(Jot => jotId == Jot.id)
        console.log(selectedJot);
        AppState.activeJots = selectedJot
    }

    saveActiveJot(newText) {
        const jot = AppState.activeJots
        jot.updatedAt = new Date()
        AppState.emit('activeJot')
        this.saveJots()
    }

    createJot(formData) {
        AppState.jots.push(new Jot(formData))
        console.log(AppState.jots);
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