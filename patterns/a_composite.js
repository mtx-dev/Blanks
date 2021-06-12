/** 
Composite is a structural design pattern 
that lets you compose objects into tree structures 
and then work with these structures as if they were individual objects.
*/

/** 
          Component --> Composite --> Composite --> composite
              /             |             |               \
            Leaf          Leaf          Leaf              Leaf

*/

class Audio {
  constructor() {
    this.offset = 0
    this.tab = '_'
  }
  setOffset(offset) {
    this.offset += offset
  }
  getOffset() {
    return this.offset
  }
  setTab(tab) {
    this.tab = tab
  }
  gettab() {
    return this.tab
  }
  draw() {}

}

class Tab extends Audio {
  constructor(offset, tab) {
    super()
    this.setOffset(offset)
    this.setTab(tab)
  }
  draw() {
    return this.tab
  }
}

class Track extends Tab {
  constructor(offset, tab) {
    super(offset, tab);
    this.track = []
  }

  insert(audio) {
    const offset = audio.getOffset();
    const tailLength = offset - this.track.length
    if (tailLength > 0) {
      const tail = new Array(tailLength).fill(this.tab)
      this.track = this.track.concat(tail)
    }
    this.track.splice(offset, 0, audio.draw())
  }

  draw() {
    return this.track.join(',') 
  }

}

class AudioEditor {
  compose() {
    console.log('GHOST TOWN, Adam Lambert')
    const mainTrack = new Track(0, '_')

    const Am = offset => new Tab(offset, 'Am')
    const Em = offset => new Tab(offset, 'Em')
    const C = offset => new Tab(offset, 'C')
    const G = offset => new Tab(offset, 'G')
    
    const intro = [C, Em, G, Am]
    const introTrack = new Track(0, '_')
    intro.map((t, i) =>
      introTrack.insert( t(i) )
    )
    
    const outro = [C, Em, G, C]
    const outroTrack = new Track(30, '_')
    outro.map((t, i) =>
      outroTrack.insert( t(i) )
    )

    mainTrack.insert(introTrack)
    mainTrack.insert(outroTrack)
    console.log(mainTrack.draw())
  }
}

const editor = new AudioEditor()
editor.compose()