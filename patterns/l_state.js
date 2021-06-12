/** 
State is a behavioral design pattern 
that lets an object alter its behavior when its internal state changes. 
It appears as if the object changed its class.
*/

// Context.request -->  State1.handle, State2.handle

class State {
  constructor(player) {
    this.player = player    
  }
  play() {}
  stop() {}
}

class ReadyState extends State {
  constructor(player) {
    super(player)
  }
  play() {
    this.player.changeState(new PlayingState(player))
    this.player.startPlayback()
  }
}

class PlayingState extends State {
  constructor(player) {
    super(player)
  }
  stop() {
    this.player.changeState(new ReadyState(player))
    this.player.stopPlayback()
  }
}

class AudioPlayer {
  constructor() {
    this.state = new ReadyState(this)
  }
  changeState(state) {
    this.state = state
  }
  play() {
    this.state.play()
  }
  stop() {
    this.state.stop()
  }
  startPlayback() {
    console.log(this.state)
  }
  stopPlayback() {
    console.log(this.state)
  }
}

const player = new AudioPlayer()
player.play()
player.stop()
player.stop()
player.play()