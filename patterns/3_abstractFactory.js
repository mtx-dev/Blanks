// AF is a interface creation pattern for groupping logically similar facrories 
/*
Abstract Factory is a creational design pattern 
that lets you produce families of related objects 
without specifying their concrete classes.
*/

/*
AbstractFactory <-- ConcreteFactory.create() --> (((Products))) --> AbstractProduct
*/

// Factories
const { formats, VideoPlayerFactory } = require('./factory');
class AudioPlayer {
  constructor (name) {
    this.name = name
  }
}
class AudioPlayerFactory {
  create () {
    return new AudioPlayer('mp3')
  }
}

// AbstractFactory
class FactoryProducer {
  constructor(type) {
    const types = {
      video: VideoPlayerFactory.bind(this, formats),
      audio: AudioPlayerFactory,
    }
    return new types[type]()
  }
}

const types = ['video', 'audio']

const results = types.map(type => {
  const factory = new FactoryProducer(type)
  const player = factory.create()
  return player
})
console.log({ results });
