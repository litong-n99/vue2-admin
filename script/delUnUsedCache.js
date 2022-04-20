const path = require('path');
const fs = require('fs-extra')

const cachePath = path.join(__dirname, '../node_modules/.cache/turbo');

if (fs.existsSync(cachePath)) {
  const dirs = fs.readdirSync(cachePath);
  const timeoutMs = 1000 * 60 * 60 * 24 * 30;
  const currentMs = Date.now();
  dirs.forEach(item => {
    const filePath = path.join(__dirname, '../node_modules/.cache/turbo', item);
    if ((currentMs - fs.statSync(filePath).mtimeMs) > timeoutMs) {
      console.log('remove cache file', filePath);
      fs.removeSync(filePath);
    }
  })
}

