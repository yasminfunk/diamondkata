const {diamond, edge} = require('./diamond');
const end = process.argv[2]
console.log (diamond(end).join('\n'))
