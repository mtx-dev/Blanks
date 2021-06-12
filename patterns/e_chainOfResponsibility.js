/** 
Chain of Responsibility is a behavioral design pattern 
that lets you pass requests along a chain of handlers. 
Upon receiving a request, each handler decides either 
to process the request or to pass it to the next handler in the chain.
*/

// Client --> Handler1.handle() --> Handler2.handle() --> Handler3.handle()

const ACF = ['PCM', 'u-Law', 'ADPCM', 'GSM 06.10', 'Lernout & Hauspie', 'DSP', 'MP3']

class Decompressor {
  constructor(decompressor) {
    this.decompressor = decompressor
  }
  process() {

  }
}

class ACFDecompressor extends Decompressor {
  constructor(name, decompressor) {
    super(decompressor)
    this.name = name
  }
  process(sample) {
    if (Math.random() > 0.707) {
      return console.log(`Decompressed "${sample}" with "${this.name}"`)
    }
    if(!this.decompressor) {
      return console.log(`Cannot decompress "${sample}"`)
    }
    this.decompressor.process(sample)
  }
  
}

class Chain {
  constructor(WrapperClass) {
    this.WrapperClass = WrapperClass
  }
  buildChain(arr) { // new Class2(name2, new Class1(name1, null))
    return arr.reduce((acc, el) => {
      return new this.WrapperClass(el, acc)
    }, null)
  }
}

const chain = new Chain(ACFDecompressor)
const ACFChain = chain.buildChain(ACF)
const name =
  (new Array(8))
  .fill('.')
  .map(() => Math.trunc(Math.random()*25)+65)
const sample = String.fromCharCode(...name) + '.wav'
ACFChain.process(sample)
// Decompressed "QRABYNKA.wav" with "u-Law"