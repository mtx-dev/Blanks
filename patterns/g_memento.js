/** 
Memento is a behavioral design pattern 
that lets you save and restore the previous state of an object 
without revealing the details of its implementation.
*/

// Caretaker --> Memento <-- Originator.saveToMemento().restoreFromMemento()

class Memento {
  constructor(state) {
    this.state = state
  }
  getState() {
    return this.state
  }
}

class Originator {
  constructor() {
    this.state = null
  }
  getState() {
    return this.state
  }
  setState(state) {
    this.state = state
  }
  saveToMemento() {
    return new Memento(this.state)
  }
  restoreFromMemento(memento) {
    this.state = memento.getState()
  }
}

class Caretaker {
  constructor() {
    this.history = []
  }
  save(memento) {
    this.history.push(memento)
  }
  restore(index) {
    return this.history[index]
  }
}


const originator = new Originator()
const caretaker = new Caretaker()
originator.setState('step#1')
originator.setState('step#0')
caretaker.save(originator.saveToMemento())
originator.setState('step#1')
caretaker.save(originator.saveToMemento())
originator.setState('step#2')
caretaker.save(originator.saveToMemento())
originator.setState('step#3')
caretaker.save(originator.saveToMemento())

console.log('Restore fist 10 steps:')
new Array(10).fill('.').map(
  (_, i) => {
    const restoredStep = caretaker.restore(i)
    if (!restoredStep) { return }
    originator.restoreFromMemento(restoredStep)
    console.log(originator.getState())
  }
)