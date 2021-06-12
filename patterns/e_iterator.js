/** 
Iterator is a behavioral design pattern 
that lets you traverse elements of a collection 
without exposing its underlying representation (list, stack, tree, etc.).
*/

// Client --> Itertor.first().next().current() --> Items

const playlist = {
  'sample1': {
    extension: '.mp3',
    length: 120,
  },
  'sample2': {
    extension: '.mp3',
    length: 190,
  },
  'sample3': {
    extension: '.avi',
    length: 7200,
  },

}

class Iterator {
  constructor(object) {
    this.object = object
    this.keys = Reflect.ownKeys(object)
    this.index = 0
  }
  next() {
    if(!this.hasNext()) { return null }
    const key = this.keys[this.index]
    this.index++
    return {
      [key] : this.object[key],
    } 
  }
  hasNext() {
    return this.index < this.keys.length
  }
}

const iterator = new Iterator(playlist)
console.log( iterator.next() )
console.log( iterator.next() )
console.log( iterator.next() )
console.log( iterator.next() )