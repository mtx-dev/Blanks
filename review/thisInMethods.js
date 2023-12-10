
// Where is This in methods

const object = {
  func() {
    return this;
  },
  arrow: () => {
    return this;
  }
}

function Entity (incoming) {
    this.incomingArrow = incoming;
    this.innerArrow = () => this;
}

function outerFunc () {
    return this;
}
const outerArrow = () => {
    return this;
}

Entity.prototype.inProtoFunc = outerFunc;
Entity.prototype.inProtoArrow = outerArrow;

const created = new Entity( () => this );

created.outerFunc = outerFunc;
created.outerArrow = outerArrow;

console.log('\nObject methods');
console.log('func()   ', object.func() ? 'Yes' : 'undefined');
console.log('arrow()  ', object.arrow() ? 'Yes' : 'undefined');

object.func()

console.log('\nMethods from constructor');
console.log('incomingArrow() ', created.incomingArrow() ? 'Yes' : 'undefined');
console.log('innerArrow()    ', created.innerArrow() ? 'Yes' : 'undefined');


console.log('\nMethods from prototype');
console.log('inProtoFunc()   ', created.inProtoFunc() ? 'Yes' : 'undefined');
console.log('inProtoArrow()  ', created.inProtoArrow() ? 'Yes' : 'undefined');


console.log('\nMethods assigned to created object');
console.log('outerFunc()     ', created.outerFunc() ? 'Yes' : 'undefined');
console.log('outerArrow()    ', created.outerArrow() ? 'Yes' : 'undefined');
console.log();

