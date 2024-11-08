import { JotController } from './controllers/JotController.js'
const USE_ROUTER = false

class App {

  JotController = new JotController

}

const app = new App()
// @ts-ignore
window.app = app
