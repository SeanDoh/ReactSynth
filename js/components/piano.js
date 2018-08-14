// piano component houses pianokeys

import Pianokey from '../components/pianoKey'

class Piano extends React.Component{
  constructor(props) {
    super(props);
    // set state here
  }
  render()
  {
    console.log('wavetype in piano before render: ' + this.props.synth.osc1WaveType)
    const pianoKeys = this.props.keyMap.map((x) => {
      return <Pianokey note={x.note}
               type={x.type}
               keyTrigger={x.keyTrigger}
               keyCode={x.keyCode}
               sound={x.sound}
               freq={x.freq}
               midi={x.midi}
               hasMidi={this.props.hasMidi}
               synth={this.props.synth}
               context={this.props.context}
               />
    })
    return(<div id='piano-body'>{pianoKeys}</div>)
  }
};

export {Piano}