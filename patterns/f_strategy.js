/** 
Strategy is a behavioral design pattern 
that lets you define a family of algorithms, 
put each of them into a separate class, 
and make their objects interchangeable.
*/

// Context.request() --> strategy1.process() || strategy2.process() || strategy3.process()

class SaveToDisk {
  constructor(sample) {
    this.sample = sample
  }
  execute() {
    console.log(`sample '${sample}' saved to the disk`)
  }
}
class SaveToCloud {
  constructor(sample) {
    this.sample = sample
  }
  execute() {
    console.log(`sample '${sample}' saved to the cloud storage`)
  }
}

class Context {
  constructor(strategy) {
    this.strategy = strategy
  }
  setStrategy(strategy) {
    this.strategy = strategy
  }
  executeStrategy() {
    this.strategy.execute()
  }
}

const sample = 'new sample'
const context = new Context(new SaveToDisk(sample))
context.executeStrategy()
context.setStrategy(new SaveToCloud(sample))
context.executeStrategy()
