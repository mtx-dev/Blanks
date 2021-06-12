/** 
Adapter is a structural design pattern 
that allows objects with incompatible interfaces to collaborate.
*/

/** 
 Client --> Adapter.request() --> Adaptee.specificRequest()
*/

class VideoPlayer {
  playMP4(name) {
    console.log(`Playing... [ '${name}.mp4' ]`)
  }
  playAVI(name) {
    console.log(`Playing... [ '${name}.avi' ]`)
  }  
}

class MediaAdapter {
  constructor(player) {
    this.playFormat = {
      '.mp4': player.playMP4,
      '.avi': player.playAVI,
    }
  }
  play(name, extension) {
    this.playFormat[extension](name)
  }
}

class AudioPlayer {
  play(name, extension) {
    if(extension !== '.mp3') { return }
    console.log(`Playing... [ '${name}.mp3' ]`)
  }
}

class Client {
  operate(player, file) {
    if (!player.play) { return console.log(`Cannot play: ${file.join('')}`) }
    player.play(...file)
  }
}
const client = new Client()
const mp3Player = new AudioPlayer()
const videoPlayer = new VideoPlayer()
const adapter = new MediaAdapter(videoPlayer) 

client.operate(mp3Player, ['sample1', '.mp3'])
client.operate(videoPlayer, ['sample2', '.avi'])
client.operate(adapter, ['sample3', '.mp4'])
client.operate(adapter, ['sample4', '.avi'])