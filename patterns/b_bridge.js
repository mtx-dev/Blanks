/** 
Bridge is a structural design pattern 
that lets you split a large class or a set of closely related classes 
into two separate hierarchies—abstraction and implementation — 
which can be developed independently of each other.
*/

/**
Client --> Abstraction.operation() --> Implementor.implOperation()
                     ^                             ^
                    /                               \
            RefinedAbstraction              ConcreteImplementor
*/

class Player {
  constructor() {
    this.playing = false
  }

  startPlaing() {
    this.playing = true
    console.log('device is playing...')
  }
  stopPlaing() {
    this.playing = false
    console.log('device is stopped.')
  }
}

class Controls {
  constructor(device) {
    this.device = device
  }
  play() {
    this.device.startPlaing()
  }
  stop() {
    this.device.stopPlaing() 
  }
}

class AudioPlayer extends Player {
  constructor() {
    super()
  }
  startPlaing() {
    this.playing = true
    console.log('Audio is playing...')
  }
}
class VideoPlayer extends Player {
  constructor() {
    super()
  }
  startPlaing() {
    this.playing = true
    console.log('Video is playing...')
  }
}
class EnhansedControls extends Controls {
  constructor(device) {
    super(device)
  } 
  pause() {
    this.device.playing = !this.device.playing
    console.log(this.device.playing ? 'playing...' : 'paused')
  }
}

class Client {
  operate() {
    const audioPlayer = new AudioPlayer()
    const controls = new Controls(audioPlayer)
    controls.play()
    controls.stop()

    const videoPlayer = new VideoPlayer()
    const enhansedControls = new EnhansedControls(videoPlayer)
    enhansedControls.play()
    enhansedControls.pause()
    enhansedControls.pause()
    enhansedControls.stop()
    
    const unknownDevice = new Player()
    const unknownControls = new EnhansedControls(unknownDevice)
    unknownControls.play()
    unknownControls.pause()
    unknownControls.stop()
  }
}

const client = new Client()
client.operate()

