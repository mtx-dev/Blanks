/** 
Template Method is a behavioral design pattern 
that defines the skeleton of an algorithm in the superclass 
but lets subclasses override specific steps of the algorithm 
without changing its structure.
*/

// AbstractClass.step1().step2().step3().templateMethod() <-- ConcreteClass.step1().step3()

class RecorderTemplate {
  getStream() {}
  createRecorder(stream) {}
  getRecord(recorder) {}
  saveRecord(record) {}
  record() { // templateMethod
    const stream = this.getStream()
    const recorder = this.createRecorder(stream)
    const record = this.getRecord(recorder)
    this.saveRecord(record)
  }
}

// mock globals
const getUserMedia = a => a
class MediaRecorder {
  constructor(stream, options) {
    this.stream = JSON.stringify(stream)
    this.options = JSON.stringify(options)
  }
  start() {console.log('recording...')}
  stop() {console.log('stopped.')}
  getRecord() {
    return `"record sample" [${this.stream}, ${this.options}]`
  }
}
class WebAPIRecorder extends RecorderTemplate {
  constructor() {
    super()
  }
  getStream() {
    return getUserMedia({
      video: false,
      audio: true,
    })
  }
  createRecorder(stream) {
    const options = {mimeType: 'audio/webm'};
    return new MediaRecorder(stream, options);
  }
  getRecord(recorder) {
    recorder.start()
    recorder.stop()
    return recorder.getRecord()
  }
  saveRecord(record) {
    console.log(`Saved: ${record}.`)
  }
}

class VideoRecorder extends RecorderTemplate {
  getStream() {
    return 'video stream'
  }
  createRecorder(stream) {
    return {
      rec: console.log.bind(null, `${stream} is recorded.`),
    }
  }
  getRecord(recorder) {
    recorder.rec()
  }
}

const audioRecorder = new WebAPIRecorder()
audioRecorder.record()

const videoRecorder = new VideoRecorder()
videoRecorder.record()