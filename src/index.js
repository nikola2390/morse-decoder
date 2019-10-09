const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  const space = '**********';
  const letters = expr.match(/.{10}/g);
  const keys = Object.keys(MORSE_TABLE).map(x => x.replace(/[.]/g, '10').replace(/[-]/g, '11').padStart(10, 0));
  const values = Object.values(MORSE_TABLE);
  const decodeMorseTable = {};
  keys.forEach((val, i) => decodeMorseTable[val] = values[i]);
  return letters.map(val => (val === space ? val = ' ': val = decodeMorseTable[val])).join('');
}

module.exports = {
    decode
}