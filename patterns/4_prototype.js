// Prototype is a creational design pattern that lets you copy existing objects 
// without making your code dependent on their classes.

// Client --> Prototype.clone() --> ((clones))

const { players } = require('./factory');

class VideoPlayer {
  constructor (name, extension, videoCodingFormat, audioCodingFormat) {
    this.name = name
    this.extension = extension
    this.videoCodingFormat = videoCodingFormat
    this.audioCodingFormat = audioCodingFormat
  }
  clone() {
    return new VideoPlayer(this.name, this.extension, this.videoCodingFormat, this.audioCodingFormat)
  }
}

const prototypeVideoPlayer = new VideoPlayer('avi', ...players['avi'])
const player1 = prototypeVideoPlayer.clone()
const player2 = prototypeVideoPlayer.clone()
player2.audioCodingFormat = 'mp3'

console.log({ player1, player2 })