/** 
Visitor is a behavioral design pattern 
that lets you separate algorithms from the objects on which they operate.
*/

// ObjectStructure --> (((Elements.accept(visitor)))) <--> Visitor.visit(element)

class Visitor {
  visit(element) {
    console.log(`Visited: ${element.constructor.name}`)
  }
}

class Player {
  constructor() {
    this.playing = false
  }
  accept(visitor) {
    visitor.visit(this)
  }
}

class AudioPlayer extends Player {
  constructor() {
    super()
  }
  play() {
    this.playing = true
    console.log('Audio is playing...')
  }
}
class VideoPlayer extends Player {
  constructor() {
    super()
  }
  play() {
    this.playing = true
    console.log('Video is playing...')
  }
}

class Client {
  operate() {
    const visitor = new Visitor()
    const audioPlayer = new AudioPlayer()
    audioPlayer.play()
    audioPlayer.accept(visitor)

    const videoPlayer = new VideoPlayer()
    videoPlayer.play()
    videoPlayer.accept(visitor)
  }
}

const client = new Client()
client.operate()
