/** 
Facade is a structural design pattern 
that provides a simplified interface 
to a library, a framework, or any other complex set of classes.
*/

/** 
           Facade.method()
          /        |      \
         v         v       v
(subSystem1   subSystem2   subSystem3)
*/

class AudioPlayer {
  constructor(sample) {
    this.sample = sample
  }
  load() {
    console.log(`loaded sample '${this.sample}'.`)
    return this
  }
  play() {
    console.log('play.')
    return this
  }
  stop() {
    console.log('stop.')
    return this
  }
  sause() {
    console.log('pause.')
    return this
  }
  rewind(time) {
    console.log(`rewind ${time}s`)
    return this
  }
}

class Facade {
  constructor(player) {
    this.player = player
  }
  playSample() {
    this.player
    .load()
    .rewind(10)
    .play()
    .stop()
  }
}

const player = new Facade(new AudioPlayer('new sample'))
player.playSample()