import { AppState } from "../AppState.js"
import { Jot } from "../models/Jot.js"
import { loadState, saveState } from "../utils/Store.js"


class JotServices {

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