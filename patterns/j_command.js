/**
 Command is a behavioral design pattern 
 that turns a request into a stand-alone object that contains all information about the request. 
 This transformation lets you parameterize methods with different requests, 
 delay or queue a request’s execution, and support undoable operations.
 */

 // Client --> Receiver <-- Command.execute() <-- Invoker

//Receiver
class Receiver {
  play() {
    console.log('Plaing...')
  }
  stop() {
    console.log('Stopped.')
  }
}

//Invoker
class Invoker {
  constructor(playCommand, stopCommand) {
    this.playCommand = playCommand
    this.stopCommand = stopCommand
  }
  pressPlay() {
    this.playCommand.execute()
  }
  pressStop() {
    this.stopCommand.execute()
  }
}

//Concrete commands
class CommandPlay {
  constructor(receiver) {
    this.receiver = receiver
  }
  execute() {
    this.receiver.play()
  }
}
class CommandStop {
  constructor(receiver) {
    this.receiver = receiver
  }
  execute() {
    this.receiver.stop()
  }
}

//Client
class Client {
  constructor(receiver) {
    this.play = new CommandPlay(receiver)
    this.stop = new CommandStop(receiver)
  }
  operate() {
    const invoker = new Invoker(this.play, this.stop)
    invoker.pressPlay()
    invoker.pressStop()
    invoker.pressPlay()
  }
}

const receiver = new Receiver()
const client = new Client(receiver)

client.operate()