const fs = require('fs');
const path = require('path');
const tableaux = require('tableaux');

const write = tableaux(
  { name: 'Name', size: 20 },
  { name: 'Created', size: 30 },
  { name: 'DeviceId', size: 10 },
  { name: 'Mode', size: 8 },
  { name: 'Lnks', size: 4 },
  { name: 'Size', size: 6 }
);

function print(dir) {
  fs.readdirSync(dir)
    .map((file) => ({ file, dir }))
    .map(toMeta)
    .forEach(output);
  write.newline();
}
