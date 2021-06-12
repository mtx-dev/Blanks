/** 
Singleton is a creational design pattern 
that lets you ensure that a class has only one instance, 
while providing a global access point to this instance.
*/

// Singleton.getInstance()

class Singleton {
  constructor() {
    if(!Singleton.instance) {
      Singleton.instance = this;
    }
    return Singleton.instance
  }
}

console.log( new Singleton() === new Singleton() )
