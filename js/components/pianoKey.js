// PianoKey component is an indivdual key on piano
// there is an oscillator and gain per key created at construction
// with osc and gain settings set within the constructor via props

import {keyUpAcc} from '../pianoData'
import {keyUpNat} from '../pianoData'
import {keyDownAcc} from '../pianoData'
import {keyDownNat} from '../pianoData'

class Pianokey extends React.Component{
  constructor(props) {
    super(props);
    // set state here
    this.state = {
      // animation styles
      dTypeNat: keyUpNat,
      dTypeAcc: keyUpAcc,
      // prevent repeating of keyboard notes
      beingHeld: false,
      // works midi
      // check hasMidi and there are devices connected
      midiDevice: this.props.hasMidi && WebMidi.inputs.length > 0 ? WebMidi.inputs[0] : undefined,
      // create osc and gain for sound in component constructor
      osc: this.props.context.createOscillator(),
      gain: this.props.context.createGain()
    }
    // assign osc values and such
    this.state.osc.frequency.value = this.props.freq;
    this.state.osc.type = this.props.synth.osc1WaveType;
    this.state.gain.gain.value = .000001;
    this.state.osc.connect(this.state.gain);
    this.state.osc.start();
    this.state.gain.connect(this.props.context.destination);
    
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleMidi = this.handleMidi.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  shouldComponentUpdate(nextProps){
    console.log('props received at key: ' + nextProps.synth.osc1WaveType)
    //this.state.osc.type = nextProps.synth.osc1WaveType;
    return true;
  }
  componentDidMount() {
    if(this.props.hasMidi && WebMidi.inputs.length > 0){
      this.state.midiDevice.addListener('noteon', 'all', this.handleMidi);
      this.state.midiDevice.addListener('noteoff', 'all', this.handleMidi);
    }
    document.addEventListener('keydown', this.handleKeyPress);
    document.addEventListener('keyup', this.handleKeyPress);
  }
  componentWillUnmount() {
    if(this.props.hasMidi && WebMidi.inputs.length > 0){
      this.state.midiDevice.removeListener('noteon', 'all', this.handleMidi);
      this.state.midiDevice.removeListener('noteoff', 'all', this.handleMidi);
    }
    document.removeEventListener('keydown', this.handleKeyPress);
    document.removeEventListener('keyup', this.handleKeyPress);
  }
  // this function essentially creates a sound
  createOsc(){
    this.state.gain.gain.exponentialRampToValueAtTime(this.props.synth.volume/100, this.props.context.currentTime + 0.04);
  }
  // this function essentially ends that sound
  endOsc(){
    // this eliminates the click sound at the end of a sound wave that happens sometimes
    // picture sound wave on an x axis.  If the soundwave doesn't stop at zero, the sound will click
    // so, you have to add a ramp effect to the cut off as shown below
    this.state.gain.gain.exponentialRampToValueAtTime(0.00001, this.props.context.currentTime + 0.04);
  }
  
  /* listener for midi events 
     e store midi event
     e is object - relevant info: 
     e.
      data: [144,60,99]
      miditype,pianokeynum,velocity
      note: {number: 60,name: "C",octave: 4}
      rawVelocity: 99
     helpful console log
     console.log('note\nnum: '+e.note.number+'\nname: '+e.note.name+e.note.octave)*/
  handleMidi(e){
    if(e.note.number == this.props.midi){
      // NOTEON
      if(e.data[2] > 0){
        this.handleKeyDown();
        this.createOsc();
      }
      // NOTEOFF
      else if(e.data[2] == 0){
        this.handleKeyUp();
        this.endOsc();
      }
    }
  }
  // listener for clicks
  // need to add check for if key is being held down,
  // don't do mouseenter/leave stuff
  handleClick(e){
    if(e.type == 'mousedown'){
      let divOrSpan = (e.nativeEvent.srcElement.id == this.props.note ||
                       e.nativeEvent.srcElement.className == this.props.note)
      if (divOrSpan && this.state.beingHeld == false){
        this.setState({beingHeld:true})
        this.handleKeyDown();
        this.createOsc();
      }
    }
    else if(e.type == 'mouseup'){
      let divOrSpan = (e.nativeEvent.srcElement.id == this.props.note ||
                        e.nativeEvent.srcElement.className == this.props.note)
      if (divOrSpan && this.state.beingHeld == true){
        this.setState({beingHeld:false})
        this.handleKeyUp();
        this.endOsc();
      }
    }
    else if(e.type == "mouseenter"){
      let divOrSpan = (e.nativeEvent.toElement.id == this.props.note ||
                       e.nativeEvent.toElement.className == this.props.note)
      if (divOrSpan && this.state.beingHeld == false && e.nativeEvent.buttons == 1){
        this.setState({beingHeld:true})
        this.handleKeyDown();
        this.createOsc();
      }
    }
    else if(e.type == 'mouseleave'){
      let divOrSpan = (e.nativeEvent.srcElement.id == this.props.note ||
                        e.nativeEvent.srcElement.className == this.props.note)
      if (divOrSpan && this.state.beingHeld == true){
        this.setState({beingHeld:false})
        this.handleKeyUp();
        this.endOsc();
      }
    }
  }
  // listener for key events
  handleKeyPress(e) {
    if (e.key.toUpperCase() == this.props.keyTrigger){
      if(e.type == 'keydown' && this.state.beingHeld == false){
        this.setState({beingHeld:true})
        this.handleKeyDown();
        this.createOsc();
      }
      else if (e.type == 'keyup' && this.state.beingHeld == true){
        this.setState({beingHeld:false})
        this.handleKeyUp();
        this.endOsc();
      }
    }
  }
  // handles key animation
  handleKeyDown(){
    if(this.props.type == 'natural'){
      this.setState({dTypeNat: keyDownNat})}
    else{this.setState({dTypeAcc: keyDownAcc})}
  }
  // handles key animation
  handleKeyUp(){
    if(this.props.type == 'natural'){
      this.setState({dTypeNat: keyUpNat})}
    else{this.setState({dTypeAcc: keyUpAcc})}
  }
  render(){
    if(this.props.type == 'natural'){
      return(
        <div className={this.props.type}
          value={this.props.keyTrigger}
          id={this.props.note}
          style={this.state.dTypeNat}
          onMouseDown={this.handleClick}
          onMouseUp={this.handleClick}
          onMouseEnter={this.handleClick}
          onMouseLeave={this.handleClick}>
          <audio src={this.props.sound}/>
          {/* using class name here in place of id cuz i don't know better way
              will be duplicate ids otherwise */}
          <span className={this.props.note}>{this.props.keyTrigger}</span>
        </div>
      )
    }
    else{
      return(
        <div className='black-key'>
          <div className={this.props.type}
            value={this.props.keyTrigger}
            id={this.props.note}
            style={this.state.dTypeAcc}
            onMouseDown={this.handleClick}
            onMouseUp={this.handleClick}
            onMouseEnter={this.handleClick}
            onMouseLeave={this.handleClick}
            ref={(x) => {
              if(x){
                x.style.setProperty('height', '75px', 'important')
              }
            }}>
            <span className={this.props.note}>{this.props.keyTrigger}</span>
            <audio src={this.props.sound}/>
          </div>
        </div>
      )
    }
  }
};

export default Pianokey