// Synth component houses the settings for the oscillators
// in the PianoKey component
// ISSUE: the state doesn't travel all the way down to the pianoKey
// when I change the osc type.  Change type once, nothing happens
// change type again, and then the type will change to the type
// you picked prior

class Synth extends React.Component{
  constructor(props) {
    super(props);
    // set state here
    this.state = {
      osc1WaveType:'sine',
      osc2WaveType:'sine',
      isChecked1: true,
      isChecked2: true,
      volume: 25
    }
    // call this bad larry on every update to pass state along to the keys
    this.props.getSynth(this.state);
    this.enableOsc = this.enableOsc.bind(this);
    this.handleVolume = this.handleVolume.bind(this);
    this.handleWave = this.handleWave.bind(this);
  }
  enableOsc(e){
    if(e.nativeEvent.toElement.checked){
      if(e.nativeEvent.toElement.name == 'Oscillator 1'){
        this.setState({isChecked1: true})
        this.props.getSynth(this.state);
      }
      else{this.setState({isChecked2: true})
           this.props.getSynth(this.state);
          }
    }
    else{
      if(e.nativeEvent.toElement.name == 'Oscillator 1'){
        this.setState({isChecked1: false})
        this.props.getSynth(this.state);
      }
      else{this.setState({isChecked2: false})
           this.props.getSynth(this.state);
          }
    }
  }
  handleVolume(e){
    this.setState({
      volume: e.nativeEvent.target.valueAsNumber
    })
    this.props.getSynth(this.state);
  }
  handleWave(e){
    console.log('wave type at beginning of wave change method: ' + this.state.osc1WaveType)
    if(e.nativeEvent.srcElement.parentNode.id == 'osc1'){
      this.setState({
        osc1WaveType:e.nativeEvent.srcElement.value
      })
      this.props.getSynth(this.state);
    }
    else if(e.nativeEvent.srcElement.parentNode.id == 'osc2'){
      this.setState({
        osc2WaveType:e.nativeEvent.srcElement.value
      })
      this.props.getSynth(this.state);
    }
    console.log('wave type at end of wave change method: ' + this.state.osc1WaveType)
  }
  render(){
    
    console.log('wave type before render of synth: ' + this.state.osc1WaveType)
    // need to set the value of vol and checked of oscs to state due to react rendering
    // if value is checked=true or value as a number, the UI of those elements won't change
    // so use state
    return(
      <div id='synth'>
        <h3>Oscillator Settings (sort of works, only single osc at the moment)</h3>
        <label for='volume'>Volume</label>
        <input type='range' name='volume' value={this.state.volume} min='0' max='100' onInput={this.handleVolume}/>
        <form id="osc1">
          <label for='Oscillator 1'>Oscillator 1</label>
          <input type='checkbox' name='Oscillator 1' onChange={this.enableOsc} checked={this.state.isChecked1}/>
          <select onChange={this.handleWave}>
            <option value='sine'>Sine</option>
            <option value='square'>Square</option>
            <option value='sawtooth'>Sawtooth</option>
            <option value='triangle'>Triangle</option>
          </select>
        </form>
        <form>
          <label for='Oscillator 2'>Oscillator 2</label>
          <input type='checkbox' name='Oscillator 2' onChange={this.enableOsc} checked={this.state.isChecked2}/>
          <select onChange={this.handleWave}>
            <option value='sine'>Sine</option>
            <option value='square'>Square</option>
            <option value='sawtooth'>Sawtooth</option>
            <option value='triangle'>Triangle</option>
          </select>
        </form>
      </div>)
  }
};

export default Synth