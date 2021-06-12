/** 
Observer is a behavioral design pattern 
that lets you define a subscription mechanism to notify multiple objects 
about any events that happen to the object they’re observing.
*/

// Observable.subscribe().unsubscribe().notify() <--> ((Observers.notify()))

class Observable {
  constructor() {
    this.observers = []
  }
  subscribe(observer) {
    this.observers.push(observer)
    console.log(`${observer.name} joined.`)
    return this
  }
  unsubscribe(observer) {
    this.observers = this.observers.filter(el => el !== observer)
    console.log(`${observer.name} left.`)
    return this
  }
  notify(data) {
    if (!this.observers.length) { return }
    this.observers.map(
      observer => observer.notify(data)
    )
  }
}

class Observer {
  constructor(name) {
    this.name = name
  }
  notify(data) {
    console.log(`${this.name} received: ${data}`)
  }
}

const cloudAudioPlayer = new Observable()
const listener1 = new Observer('listener1')
const listener2 = new Observer('listener2')
const listener3 = new Observer('listener3')

cloudAudioPlayer
  .subscribe(listener1)
  .subscribe(listener2)
  .subscribe(listener3)

const beamedQuavers = String.fromCharCode(9835)
const beamedSemiquavers = String.fromCharCode(9836)
const intro = [beamedQuavers, beamedQuavers, beamedSemiquavers].join('')
cloudAudioPlayer.notify(intro)

cloudAudioPlayer
  .unsubscribe(listener2)

const outro = [beamedSemiquavers, beamedQuavers, beamedQuavers, beamedQuavers].join('')
cloudAudioPlayer.notify(outro)
cloudAudioPlayer.notify('-= EOF =-')