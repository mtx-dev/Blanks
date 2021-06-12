// For creation many similar objects

/*
Factory Method is a creational design pattern 
that provides an interface for creating objects in a superclass, 
but allows subclasses to alter the type of objects that will be created.
*/

// Creator.factoryMethod() --> AbstractProduct <-- (((Prtoducts)))

const formats = { // 'name': [extension, videoCodingFormat, audioCodingFormat]
  'gif': ['.gif', null, null],
  'avi': ['.avi',  'any', 'any'],
  'mpeg-4': ['.mp4', 'h.264', 'mp3'],
}

class VideoPlayer {
  constructor (name, extension, videoCodingFormat, audioCodingFormat) {
    this.name = name
    this.extension = extension
    this.videoCodingFormat = videoCodingFormat
    this.audioCodingFormat = audioCodingFormat
  }
}

class VideoPlayerFactory {
  constructor (formats) {
    this.formats = formats
  }
  create (name = 'avi') {
    return new VideoPlayer(name, ...this.formats[name])
  }
}

const videoPlayerFactory = new VideoPlayerFactory(formats)

if (require.main === module) { // e.g.:
  Object.keys(formats).map(player => {
    console.log(videoPlayerFactory.create(player))
  })
}

module.exports = {
  formats,
  VideoPlayerFactory,
}

