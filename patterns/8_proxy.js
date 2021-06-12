/*
Proxy is a structural design pattern 
that lets you provide a substitute or placeholder for another object. 
A proxy controls access to the original object, allowing you to perform something 
either before or after the request gets through to the original object.
*/

/**
 Client --> Proxy.request() --> RealSubject.request()
 */

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
    console.log('Saved.')
  }
}
// Proxy (restricts access)
class Authenticate {
  constructor(recorder) {
    this.recorder = recorder;
    this.permission = false;
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
    if (!this.permission) {
      console.log('No permission to save.')
      return this
    }
    this.recorder.save()
    return this
  }
  permit(permission) {
    this.permission = permission;
    console.log(`Permission ${permission ? 'granted' : 'denied'}.`)
    return this
  }
}

const myRecorder = new Authenticate(new AudioRecorder('mp3'))

myRecorder
.record()
.stop()
.save()
.permit(true)
.save()
.record()
.permit(false)
.stop()
.save()
