/** 
 Mediator is a behavioral design pattern 
 that lets you reduce chaotic dependencies between objects. 
 The pattern restricts direct communications between the objects 
 and forces them to collaborate only via a mediator object.
*/

// ComponentA <--> Mediator <--> ComponentB

class Mediator {
  notify(sender, event) {
    throw Error('not implemented')
  }
}

 class AudioPlayer extends Mediator {
  constructor(format) {
    super()
    this.format = format
  }
  notify(sender, event) {
    if (event !== 'click') { return }
    const events = {
      'play': 'playing...',
      'stop': 'stopped.'
    }
    console.log(`${events[sender.name]} [ ${this.format} ]`)
  }
 } 

class Component {
  constructor(mediator) {
    this.mediator = mediator
  }
  click() {
    this.mediator.notify(this, 'click')
  }
}

class Button extends Component {
  constructor(name, mediator) {
    super(mediator)
    this.name = name
  }
}

const mp3Player = new AudioPlayer('mp3')
const playButton = new Button('play', mp3Player)
const stopButton = new Button('stop', mp3Player)
playButton.click()
stopButton.click()