/*
Builder is a creational design pattern 
that lets you construct complex objects step by step. 
The pattern allows you to produce 
different types and representations of an object using the same construction code.
*/

/*
Director.construct() --> AbstractBuilder <-- Builder.step1().step2().build() -->  ((products)) 
*/

class AudioPlayer {
  constructor(name) {
    this.name = name
  }
}

class Builder {
  constructor(name) {
    this.audioPlayer = new AudioPlayer(name)
  }

  addPlay(play) {
    this.audioPlayer.play = play
    return this
  }
  addStop(stop) {
    this.audioPlayer.stop = stop
    return this
  }
  addPause(pause) {
    this.audioPlayer.pause = pause
    return this
  }
  addRewind() {
    throw Error('not implemented.')
  }
  build() {
    return this.audioPlayer
  }
}

class Director {
  constructor(builder) {
    this.builder = builder
  }
  construct() {
    this.builder
    .addPlay(() => console.log('playing...'))
    .addStop(() => console.log('stopped.'))
    .addPause(() => console.log('paused.'))
  
  }
}

const builder = new Builder('mp3')
const director = new Director(builder)

director.construct()
const mp3Player = builder.build()

console.log({ mp3Player })

mp3Player.play()
mp3Player.pause()
mp3Player.play()
mp3Player.stop()
mp3Player.play()
