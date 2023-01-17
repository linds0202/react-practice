const fs = require('fs')

const rs = fs.createReadStream('./files/loreum.txt', {encoding: 'utf8'})

const ws = fs.createWriteStream('./files/new-loreum')

// rs.on('data', (dataChunk) => {
//     ws.write(dataChunk)
// })

//more efficient than 'on'
rs.pipe(ws)