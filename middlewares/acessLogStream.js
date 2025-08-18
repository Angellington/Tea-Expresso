const rfs = require('rotating-file-stream');
const path = require('path');
const fs = require('fs');

// Cria a pasta 'logs' se não existir
const logDirectory = path.join(__dirname, '..', 'logs');
fs.mkdirSync(logDirectory, { recursive: true });

// Cria o stream de log diário
const accessLogStream = rfs.createStream('access.log', {
  interval: '1d', // rotaciona a cada 1 dia
  path: logDirectory
});

module.exports = accessLogStream;
