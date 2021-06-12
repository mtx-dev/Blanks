/** 
Flyweight is a structural design pattern 
that lets you fit more objects into the available amount of RAM 
by sharing common parts of state between multiple objects 
instead of keeping all of the data in each object.
*/

// Client --> FlyweightFactory.getFlyweight() --> Flyweight

const formats = { // 'extension': [name, videoCodingFormat, audioCodingFormat]
  '.gif': ['gif', null, null],
  '.avi': ['avi',  'any', 'any'],
  '.mp4': ['mpeg-4', 'h.264', 'mp3'],
}

class Sample {
  constructor(name, extension, data) {
    this.name = name
    this.extension = extension
    this.data = data
    this.videoCodingFormat = formats[extension][1]
    this.audioCodingFormat = formats[extension][2]
  }
  getData() {
    console.log(this.data)
  }
}

class VideoLibrary {
  constructor() {
    this.samples = new Map;
  }
  getSample(name, extension, data) {
    const key = name + extension
    if(this.samples.has(key)) {
      return this.samples.get(key)
    }
    this.samples.set(key, new Sample(name, extension, data))
  }
  getLength() {
    const length = this.samples.size
    console.log({ length })
    return length
  }
  getLibrary() {
    console.log(this.samples)
    return this.samples
  }
}

const extensions = Reflect.ownKeys(formats)
const names1 = (new Array(5)).fill('_').map((_, i) => String(i))
const names2 = (new Array(3)).fill('_').map((_, i) => String(i))

const library = new VideoLibrary()
library.getLength()

names1.map(name => {
  library.getSample(name, extensions[+name % 3], name)
})
names2.map(name => {
  library.getSample(name, extensions[+name % 3], name)
})

library.getLength()
library.getLibrary()