// this module contains the data for Pianokey generation
// and Pianokey animation styling

// contains css styling for keys when they are pressed
const keyUpAcc = {
  position:'absolute',
  /*Black key styling*/
  background: '#000',
  width: 20,
  height: '75px !important',
  /*Default grayed-out look of the key*/
  zIndex: 6,
  marginLeft: -11.5,
  boxShadow:'inset 0px -3px 7px 2px #878787, 1px 1px 2px 0px #585858',
  color: 'white',
  fontWeight:'bold'
}
const keyUpNat = {
  /*White key styling*/
  /* pos needed to key letter on bottom of key */
  position:'relative',
  background: '#fff',
  /*Default grayed-out look of the key*/
  zIndex: 4,
  height: '57px !important',
  //border: '1px solid lightgrey',
  boxShadow: '.5px 2px 5px 0px #585858',
  fontWeight:'bold'
}
const keyDownAcc = {
  position:'absolute',
  /*Black key styling*/
  background: '#000',
  width: 20,
  height: '65px !important',
  /*Default grayed-out look of the key*/
  zIndex: 6,
  marginLeft: -10,
  boxShadow:'inset 0px -3px 7px 1px #878787, 0px 0px 1px 0px #585858',
  color: 'lightgrey'
}
const keyDownNat = {
  /*White key styling*/
  /* pos needed to key letter on bottom of key */
  position:'relative',
  background: '#fff',
  /*Default grayed-out look of the key*/
  zIndex: 4,
  height: '57px !important',
  //border: '1px solid lightgrey',
  boxShadow: 'inset 0 0px 10px 0px #585858',
  color:'darkgrey'
}

// piano sound information
// some info can be trimmed
// stored in excel/csv and converted ot json
const pianoSounds = [
 {
   "note": "A0",
   "type": "natural",
   "freq": 27.5,
   "octave": 0,
   "wavelength": 1254.55,
   "midi": 21,
   "keyTrigger": "",
   "keyCode": null
 },
 {
   "note": "?A#0/Bb0?",
   "type": "accidental",
   "freq": 29.14,
   "octave": 0,
   "wavelength": 1184.13,
   "midi": 22,
   "keyTrigger": "",
   "keyCode": null
 },
 {
   "note": "B0",
   "type": "natural",
   "freq": 30.87,
   "octave": 0,
   "wavelength": 1117.67,
   "midi": 23,
   "keyTrigger": "",
   "keyCode": null
 },
 {
   "note": "C1",
   "type": "natural",
   "freq": 32.7,
   "octave": 1,
   "wavelength": 1054.94,
   "midi": 24,
   "keyTrigger": "",
   "keyCode": null
 },
 {
   "note": "?C#1/Db1?",
   "type": "accidental",
   "freq": 34.65,
   "octave": 1,
   "wavelength": 995.73,
   "midi": 25,
   "keyTrigger": "",
   "keyCode": null
 },
 {
   "note": "D1",
   "type": "natural",
   "freq": 36.71,
   "octave": 1,
   "wavelength": 939.85,
   "midi": 26,
   "keyTrigger": "",
   "keyCode": null
 },
 {
   "note": "?D#1/Eb1?",
   "type": "accidental",
   "freq": 38.89,
   "octave": 1,
   "wavelength": 887.1,
   "midi": 27,
   "keyTrigger": "",
   "keyCode": null
 },
 {
   "note": "E1",
   "type": "natural",
   "freq": 41.2,
   "octave": 1,
   "wavelength": 837.31,
   "midi": 28,
   "keyTrigger": "",
   "keyCode": null
 },
 {
   "note": "F1",
   "type": "natural",
   "freq": 43.65,
   "octave": 1,
   "wavelength": 790.31,
   "midi": 29,
   "keyTrigger": "",
   "keyCode": null
 },
 {
   "note": "?F#1/Gb1?",
   "type": "accidental",
   "freq": 46.25,
   "octave": 1,
   "wavelength": 745.96,
   "midi": 30,
   "keyTrigger": "",
   "keyCode": null
 },
 {
   "note": "G1",
   "type": "natural",
   "freq": 49,
   "octave": 1,
   "wavelength": 704.09,
   "midi": 31,
   "keyTrigger": "",
   "keyCode": null
 },
 {
   "note": "?G#1/Ab1?",
   "type": "accidental",
   "freq": 51.91,
   "octave": 1,
   "wavelength": 664.57,
   "midi": 32,
   "keyTrigger": "",
   "keyCode": null
 },
 {
   "note": "A1",
   "type": "natural",
   "freq": 55,
   "octave": 1,
   "wavelength": 627.27,
   "midi": 33,
   "keyTrigger": "",
   "keyCode": null
 },
 {
   "note": "?A#1/Bb1?",
   "type": "accidental",
   "freq": 58.27,
   "octave": 1,
   "wavelength": 592.07,
   "midi": 34,
   "keyTrigger": "",
   "keyCode": null
 },
 {
   "note": "B1",
   "type": "natural",
   "freq": 61.74,
   "octave": 1,
   "wavelength": 558.84,
   "midi": 35,
   "keyTrigger": "",
   "keyCode": null
 },
 {
   "note": "C2",
   "type": "natural",
   "freq": 65.41,
   "octave": 2,
   "wavelength": 527.47,
   "midi": 36,
   "keyTrigger": "",
   "keyCode": null
 },
 {
   "note": "?C#2/Db2?",
   "type": "accidental",
   "freq": 69.3,
   "octave": 2,
   "wavelength": 497.87,
   "midi": 37,
   "keyTrigger": "",
   "keyCode": null
 },
 {
   "note": "D2",
   "type": "natural",
   "freq": 73.42,
   "octave": 2,
   "wavelength": 469.92,
   "midi": 38,
   "keyTrigger": "",
   "keyCode": null
 },
 {
   "note": "?D#2/Eb2?",
   "type": "accidental",
   "freq": 77.78,
   "octave": 2,
   "wavelength": 443.55,
   "midi": 39,
   "keyTrigger": "",
   "keyCode": null
 },
 {
   "note": "E2",
   "type": "natural",
   "freq": 82.41,
   "octave": 2,
   "wavelength": 418.65,
   "midi": 40,
   "keyTrigger": "",
   "keyCode": null
 },
 {
   "note": "F2",
   "type": "natural",
   "freq": 87.31,
   "octave": 2,
   "wavelength": 395.16,
   "midi": 41,
   "keyTrigger": "",
   "keyCode": null
 },
 {
   "note": "?F#2/Gb2?",
   "type": "accidental",
   "freq": 92.5,
   "octave": 2,
   "wavelength": 372.98,
   "midi": 42,
   "keyTrigger": "",
   "keyCode": null
 },
 {
   "note": "G2",
   "type": "natural",
   "freq": 98,
   "octave": 2,
   "wavelength": 352.04,
   "midi": 43,
   "keyTrigger": "",
   "keyCode": null
 },
 {
   "note": "?G#2/Ab2?",
   "type": "accidental",
   "freq": 103.83,
   "octave": 2,
   "wavelength": 332.29,
   "midi": 44,
   "keyTrigger": "",
   "keyCode": null
 },
 {
   "note": "A2",
   "type": "natural",
   "freq": 110,
   "octave": 2,
   "wavelength": 313.64,
   "midi": 45,
   "keyTrigger": "",
   "keyCode": null
 },
 {
   "note": "?A#2/Bb2?",
   "type": "accidental",
   "freq": 116.54,
   "octave": 2,
   "wavelength": 296.03,
   "midi": 46,
   "keyTrigger": "",
   "keyCode": null
 },
 {
   "note": "B2",
   "type": "natural",
   "freq": 123.47,
   "octave": 2,
   "wavelength": 279.42,
   "midi": 47,
   "keyTrigger": "",
   "keyCode": null
 },
 {
   "note": "C3",
   "type": "natural",
   "freq": 130.81,
   "octave": 3,
   "wavelength": 263.74,
   "midi": 48,
   "keyTrigger": "Q",
   "keyCode": 81
 },
 {
   "note": "?C#3/Db3?",
   "type": "accidental",
   "freq": 138.59,
   "octave": 3,
   "wavelength": 248.93,
   "midi": 49,
   "keyTrigger": "2",
   "keyCode": 49
 },
 {
   "note": "D3",
   "type": "natural",
   "freq": 146.83,
   "octave": 3,
   "wavelength": 234.96,
   "midi": 50,
   "keyTrigger": "W",
   "keyCode": 87
 },
 {
   "note": "?D#3/Eb3?",
   "type": "accidental",
   "freq": 155.56,
   "octave": 3,
   "wavelength": 221.77,
   "midi": 51,
   "keyTrigger": "3",
   "keyCode": 51
 },
 {
   "note": "E3",
   "type": "natural",
   "freq": 164.81,
   "octave": 3,
   "wavelength": 209.33,
   "midi": 52,
   "keyTrigger": "E",
   "keyCode": 69
 },
 {
   "note": "F3",
   "type": "natural",
   "freq": 174.61,
   "octave": 3,
   "wavelength": 197.58,
   "midi": 53,
   "keyTrigger": "R",
   "keyCode": 82
 },
 {
   "note": "?F#3/Gb3?",
   "type": "accidental",
   "freq": 185,
   "octave": 3,
   "wavelength": 186.49,
   "midi": 54,
   "keyTrigger": "5",
   "keyCode": 53
 },
 {
   "note": "G3",
   "type": "natural",
   "freq": 196,
   "octave": 3,
   "wavelength": 176.02,
   "midi": 55,
   "keyTrigger": "T",
   "keyCode": 84
 },
 {
   "note": "?G#3/Ab3?",
   "type": "accidental",
   "freq": 207.65,
   "octave": 3,
   "wavelength": 166.14,
   "midi": 56,
   "keyTrigger": "6",
   "keyCode": 54
 },
 {
   "note": "A3",
   "type": "natural",
   "freq": 220,
   "octave": 3,
   "wavelength": 156.82,
   "midi": 57,
   "keyTrigger": "Y",
   "keyCode": 89
 },
 {
   "note": "?A#3/Bb3?",
   "type": "accidental",
   "freq": 233.08,
   "octave": 3,
   "wavelength": 148.02,
   "midi": 58,
   "keyTrigger": "7",
   "keyCode": 55
 },
 {
   "note": "B3",
   "type": "natural",
   "freq": 246.94,
   "octave": 3,
   "wavelength": 139.71,
   "midi": 59,
   "keyTrigger": "U",
   "keyCode": 85
 },
 {
   "note": "C4",
   "type": "natural",
   "freq": 261.63,
   "octave": 4,
   "wavelength": 131.87,
   "midi": 60,
   "keyTrigger": "I",
   "keyCode": 73
 },
 {
   "note": "?C#4/Db4?",
   "type": "accidental",
   "freq": 277.18,
   "octave": 4,
   "wavelength": 124.47,
   "midi": 61,
   "keyTrigger": "9",
   "keyCode": 57
 },
 {
   "note": "D4",
   "type": "natural",
   "freq": 293.66,
   "octave": 4,
   "wavelength": 117.48,
   "midi": 62,
   "keyTrigger": "O",
   "keyCode": 79
 },
 {
   "note": "?D#4/Eb4?",
   "type": "accidental",
   "freq": 311.13,
   "octave": 4,
   "wavelength": 110.89,
   "midi": 63,
   "keyTrigger": "0",
   "keyCode": 48
 },
 {
   "note": "E4",
   "type": "natural",
   "freq": 329.63,
   "octave": 4,
   "wavelength": 104.66,
   "midi": 64,
   "keyTrigger": "P",
   "keyCode": 80
 },
 {
   "note": "F4",
   "type": "natural",
   "freq": 349.23,
   "octave": 4,
   "wavelength": 98.79,
   "midi": 65,
   "keyTrigger": "Z",
   "keyCode": 90
 },
 {
   "note": "?F#4/Gb4?",
   "type": "accidental",
   "freq": 369.99,
   "octave": 4,
   "wavelength": 93.24,
   "midi": 66,
   "keyTrigger": "S",
   "keyCode": 83
 },
 {
   "note": "G4",
   "type": "natural",
   "freq": 392,
   "octave": 4,
   "wavelength": 88.01,
   "midi": 67,
   "keyTrigger": "X",
   "keyCode": 88
 },
 {
   "note": "?G#4/Ab4?",
   "type": "accidental",
   "freq": 415.3,
   "octave": 4,
   "wavelength": 83.07,
   "midi": 68,
   "keyTrigger": "D",
   "keyCode": 68
 },
 {
   "note": "A4",
   "type": "natural",
   "freq": 440,
   "octave": 4,
   "wavelength": 78.41,
   "midi": 69,
   "keyTrigger": "C",
   "keyCode": 67
 },
 {
   "note": "?A#4/Bb4?",
   "type": "accidental",
   "freq": 466.16,
   "octave": 4,
   "wavelength": 74.01,
   "midi": 70,
   "keyTrigger": "F",
   "keyCode": 70
 },
 {
   "note": "B4",
   "type": "natural",
   "freq": 493.88,
   "octave": 4,
   "wavelength": 69.85,
   "midi": 71,
   "keyTrigger": "V",
   "keyCode": 86
 },
 {
   "note": "C5",
   "type": "natural",
   "freq": 523.25,
   "octave": 5,
   "wavelength": 65.93,
   "midi": 72,
   "keyTrigger": "B",
   "keyCode": 66
 },
 {
   "note": "?C#5/Db5?",
   "type": "accidental",
   "freq": 554.37,
   "octave": 5,
   "wavelength": 62.23,
   "midi": 73,
   "keyTrigger": "H",
   "keyCode": 72
 },
 {
   "note": "D5",
   "type": "natural",
   "freq": 587.33,
   "octave": 5,
   "wavelength": 58.74,
   "midi": 74,
   "keyTrigger": "N",
   "keyCode": 78
 },
 {
   "note": "?D#5/Eb5?",
   "type": "accidental",
   "freq": 622.25,
   "octave": 5,
   "wavelength": 55.44,
   "midi": 75,
   "keyTrigger": "J",
   "keyCode": 74
 },
 {
   "note": "E5",
   "type": "natural",
   "freq": 659.25,
   "octave": 5,
   "wavelength": 52.33,
   "midi": 76,
   "keyTrigger": "M",
   "keyCode": 77
 },
 {
   "note": "F5",
   "type": "natural",
   "freq": 698.46,
   "octave": 5,
   "wavelength": 49.39,
   "midi": 77,
   "keyTrigger": ",",
   "keyCode": 44
 },
 {
   "note": "?F#5/Gb5?",
   "type": "accidental",
   "freq": 739.99,
   "octave": 5,
   "wavelength": 46.62,
   "midi": 78,
   "keyTrigger": "L",
   "keyCode": 76
 },
 {
   "note": "G5",
   "type": "natural",
   "freq": 783.99,
   "octave": 5,
   "wavelength": 44.01,
   "midi": 79,
   "keyTrigger": ".",
   "keyCode": 46
 },
 {
   "note": "?G#5/Ab5?",
   "type": "accidental",
   "freq": 830.61,
   "octave": 5,
   "wavelength": 41.54,
   "midi": 80,
   "keyTrigger": ";",
   "keyCode": 59
 },
 {
   "note": "A5",
   "type": "natural",
   "freq": 880,
   "octave": 5,
   "wavelength": 39.2,
   "midi": 81,
   "keyTrigger": "",
   "keyCode": null
 },
 {
   "note": "?A#5/Bb5?",
   "type": "accidental",
   "freq": 932.33,
   "octave": 5,
   "wavelength": 37,
   "midi": 82,
   "keyTrigger": "",
   "keyCode": null
 },
 {
   "note": "B5",
   "type": "natural",
   "freq": 987.77,
   "octave": 5,
   "wavelength": 34.93,
   "midi": 83,
   "keyTrigger": "",
   "keyCode": null
 },
 {
   "note": "C6",
   "type": "natural",
   "freq": 1046.5,
   "octave": 6,
   "wavelength": 32.97,
   "midi": 84,
   "keyTrigger": "",
   "keyCode": null
 },
 {
   "note": "?C#6/Db6?",
   "type": "accidental",
   "freq": 1108.73,
   "octave": 6,
   "wavelength": 31.12,
   "midi": 85,
   "keyTrigger": "",
   "keyCode": null
 },
 {
   "note": "D6",
   "type": "natural",
   "freq": 1174.66,
   "octave": 6,
   "wavelength": 29.37,
   "midi": 86,
   "keyTrigger": "",
   "keyCode": null
 },
 {
   "note": "?D#6/Eb6?",
   "type": "accidental",
   "freq": 1244.51,
   "octave": 6,
   "wavelength": 27.72,
   "midi": 87,
   "keyTrigger": "",
   "keyCode": null
 },
 {
   "note": "E6",
   "type": "natural",
   "freq": 1318.51,
   "octave": 6,
   "wavelength": 26.17,
   "midi": 88,
   "keyTrigger": "",
   "keyCode": null
 },
 {
   "note": "F6",
   "type": "natural",
   "freq": 1396.91,
   "octave": 6,
   "wavelength": 24.7,
   "midi": 89,
   "keyTrigger": "",
   "keyCode": null
 },
 {
   "note": "?F#6/Gb6?",
   "type": "accidental",
   "freq": 1479.98,
   "octave": 6,
   "wavelength": 23.31,
   "midi": 90,
   "keyTrigger": "",
   "keyCode": null
 },
 {
   "note": "G6",
   "type": "natural",
   "freq": 1567.98,
   "octave": 6,
   "wavelength": 22,
   "midi": 91,
   "keyTrigger": "",
   "keyCode": null
 },
 {
   "note": "?G#6/Ab6?",
   "type": "accidental",
   "freq": 1661.22,
   "octave": 6,
   "wavelength": 20.77,
   "midi": 92,
   "keyTrigger": "",
   "keyCode": null
 },
 {
   "note": "A6",
   "type": "natural",
   "freq": 1760,
   "octave": 6,
   "wavelength": 19.6,
   "midi": 93,
   "keyTrigger": "",
   "keyCode": null
 },
 {
   "note": "?A#6/Bb6?",
   "type": "accidental",
   "freq": 1864.66,
   "octave": 6,
   "wavelength": 18.5,
   "midi": 94,
   "keyTrigger": "",
   "keyCode": null
 },
 {
   "note": "B6",
   "type": "natural",
   "freq": 1975.53,
   "octave": 6,
   "wavelength": 17.46,
   "midi": 95,
   "keyTrigger": "",
   "keyCode": null
 },
 {
   "note": "C7",
   "type": "natural",
   "freq": 2093,
   "octave": 7,
   "wavelength": 16.48,
   "midi": 96,
   "keyTrigger": "",
   "keyCode": null
 },
 {
   "note": "?C#7/Db7?",
   "type": "accidental",
   "freq": 2217.46,
   "octave": 7,
   "wavelength": 15.56,
   "midi": 97,
   "keyTrigger": "",
   "keyCode": null
 },
 {
   "note": "D7",
   "type": "natural",
   "freq": 2349.32,
   "octave": 7,
   "wavelength": 14.69,
   "midi": 98,
   "keyTrigger": "",
   "keyCode": null
 },
 {
   "note": "?D#7/Eb7?",
   "type": "accidental",
   "freq": 2489.02,
   "octave": 7,
   "wavelength": 13.86,
   "midi": 99,
   "keyTrigger": "",
   "keyCode": null
 },
 {
   "note": "E7",
   "type": "natural",
   "freq": 2637.02,
   "octave": 7,
   "wavelength": 13.08,
   "midi": 100,
   "keyTrigger": "",
   "keyCode": null
 },
 {
   "note": "F7",
   "type": "natural",
   "freq": 2793.83,
   "octave": 7,
   "wavelength": 12.35,
   "midi": 101,
   "keyTrigger": "",
   "keyCode": null
 },
 {
   "note": "?F#7/Gb7?",
   "type": "accidental",
   "freq": 2959.96,
   "octave": 7,
   "wavelength": 11.66,
   "midi": 102,
   "keyTrigger": "",
   "keyCode": null
 },
 {
   "note": "G7",
   "type": "natural",
   "freq": 3135.96,
   "octave": 7,
   "wavelength": 11,
   "midi": 103,
   "keyTrigger": "",
   "keyCode": null
 },
 {
   "note": "?G#7/Ab7?",
   "type": "accidental",
   "freq": 3322.44,
   "octave": 7,
   "wavelength": 10.38,
   "midi": 104,
   "keyTrigger": "",
   "keyCode": null
 },
 {
   "note": "A7",
   "type": "natural",
   "freq": 3520,
   "octave": 7,
   "wavelength": 9.8,
   "midi": 105,
   "keyTrigger": "",
   "keyCode": null
 },
 {
   "note": "?A#7/Bb7?",
   "type": "accidental",
   "freq": 3729.31,
   "octave": 7,
   "wavelength": 9.25,
   "midi": 106,
   "keyTrigger": "",
   "keyCode": null
 },
 {
   "note": "B7",
   "type": "natural",
   "freq": 3951.07,
   "octave": 7,
   "wavelength": 8.73,
   "midi": 107,
   "keyTrigger": "",
   "keyCode": null
 },
 {
   "note": "C8",
   "type": "natural",
   "freq": 4186.01,
   "octave": 8,
   "wavelength": 8.24,
   "midi": 108,
   "keyTrigger": "",
   "keyCode": null
 }
]

export {pianoSounds}
export {keyUpAcc}
export {keyUpNat}
export {keyDownAcc}
export {keyDownNat}

