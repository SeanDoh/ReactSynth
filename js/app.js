import {pianoSounds} from './pianoData'
import Synth from './components/synth'
import Footer from './components/footer'
import {Piano} from './components/piano'

const context = new (window.AudioContext || window.webkitAudioContext)();

class App extends React.Component {
  constructor(props) {
    super(props);
    //state
    this.state = {
      keyMap: pianoSounds,
      midiDevices: this.props.hasMidi ? WebMidi.inputs : undefined,
      synth:{
        osc1WaveType:'sine',
        osc2WaveType:'sine',
        isChecked1: true,
        isChecked2: true,
        volume: 25
      }
    }
    this.getSynth = this.getSynth.bind(this);
  }
  // issue: synth is empty on first page load
  getSynth(synth){
    this.setState({
      synth:synth
    })
  }
  // what app shows when rendered
  render() {
    console.log('wavetype in app before render: ' + this.state.synth.osc1WaveType)
    let midiMap;
    let MidiDisplay;
    if(this.props.hasMidi){
      midiMap = this.state.midiDevices.map((x)=>{
        return x;
      })
      MidiDisplay =  midiMap.map((x)=>{
        return <li>{x._midiInput.name}</li>
      })
      return (
        <div id='app'>
          <h1>Midi Piano</h1>
          <p>Works best with Chrome</p>
          <div id='settings'>
            <div id='midi'>
              <h4>Midi Devices Connected: </h4>
              <ul>{MidiDisplay}</ul>
            </div>
            <Synth getSynth={this.getSynth}/>
          </div>
          <div id='piano'>
            <Piano keyMap={this.state.keyMap} hasMidi={this.props.hasMidi} synth={this.state.synth} context={context}/>
          </div>
          <Footer/>
        </div>
      );
    }
    else{
      return (
        <div id='app'>
          <div id='settings'>
            <h1>Midi Piano</h1>
            <p>Works best with Chrome</p>
            <h4>Midi Devices Connected: </h4>
            <ul>{MidiDisplay}</ul>
            <Synth getSynth={this.getSynth}/>
          </div>
          <div id='piano'>
            <Piano keyMap={this.state.keyMap} hasMidi={false} synth={this.state.synth}/>
          </div>
          <Footer/>
        </div>
      );
    }
  }
};

WebMidi.enable(function (err) {
  if(err || !err)
  {
    let hasMidi = true;
    if(err){
      console.log("WebMidi could not be enabled.", err);
      alert('This is a midi instrument.\n Midi is only natively supported by chrome at the moment')
      hasMidi = false;
    }
    ReactDOM.render(<App hasMidi={hasMidi}/>,document.getElementById('root'));
  }
});