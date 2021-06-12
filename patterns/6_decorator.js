/** 
Decorator is a structural design pattern 
that lets you attach new behaviors to objects 
by placing these objects inside special wrapper objects that contain the behaviors.
*/

// Client --> Decorator(Component).addedOptions()
class AudioRecorder {
  constructor(name) {
    this.name = name
  }
  record() {
    console.log('Recording...')
  }
  stop() {
    console.log('Stopped.')
  }
  save() {
    console.log('Saved in a memory.')
  }
}

// Decorator (enhance access)
class Decorator {
  constructor(recorder) {
    this.recorder = recorder;
  }
  record() {
    this.recorder.record()
    return this
  }
  stop() {
    this.recorder.stop()
    return this
  }
  save() {
    this.recorder.save()
    return this
  }
}

class SaveToCloud extends Decorator {
  constructor(recorder) {
    super();
    this.recorder = recorder;
  }
  save() {
    this.recorder.save()
    console.log('Saved in a cloud.')
    return this
  }
}

class SaveToDisk extends Decorator {
  constructor(recorder) {
    super();
    this.recorder = recorder;
  }
  save() {
    this.recorder.save()
    console.log('Saved in a disk.')
    return this
  }
}

const myRecorder = new SaveToDisk(new AudioRecorder('mp3'))

myRecorder
.record()
.stop()
.save()

myCloudrecorder = new SaveToCloud(myRecorder)
.record()
.stop()
.save()
