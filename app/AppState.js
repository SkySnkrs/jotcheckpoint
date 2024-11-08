import { Jot } from './models/Jot.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  jots = [
    new Jot({ title: 'Week 3, Day 2', body: 'Hello my name is tristan and this is my initial jot to make sure that everything is fitting correctly.' }),
    new Jot({ title: 'Week 16', body: 'Hello my name is tristan and this is my initial jot to make sure that everything is fitting correctly.' })
  ]

  activeJots = null
}

export const AppState = createObservableProxy(new ObservableAppState())