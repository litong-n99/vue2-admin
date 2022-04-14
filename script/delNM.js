const fs = require('fs-extra')
const path = require('path');

const appPaths = fs.readdirSync(path.join(__dirname, '../apps'));
const pkgPaths = fs.readdirSync(path.join(__dirname, '../packages'));
const nmPaths = [path.join(__dirname, '../node_modules')];

appPaths.forEach(item => {
  nmPaths.push(path.join(__dirname, '../apps', item, 'node_modules'))
})

pkgPaths.forEach(item => {
  nmPaths.push(path.join(__dirname, '../packages', item, 'node_modules'))
})

nmPaths.forEach(item => {
  const isExist = fs.existsSync(item);
  if (isExist) {
    fs.removeSync(item);
  }
});
