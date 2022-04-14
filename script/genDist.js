const path = require('path');
const fs = require('fs-extra')

const distPath = path.join(__dirname, '../dist');
const mainAppDistPath = path.join(__dirname, '../apps/bms/dist');
const subAppDistPaths = [path.join(__dirname, '../apps/bms-report/dist'),path.join(__dirname, '../packages/bms-core/dist'),path.join(__dirname, '../packages/bms-component/dist')];


// 1. 删除当前dist
if (fs.existsSync(distPath)) {
  fs.removeSync(distPath)
}
// 2. 判断有无主应用dist
const hasMainDist = fs.existsSync(mainAppDistPath);
if (hasMainDist) {
  // 有：移动值当前文件夹
  fs.moveSync(mainAppDistPath, distPath);
} else {
  // 无：报错
  throw new Error('没有找到:'+mainAppDistPath);
}
// // 3. 新建subapp文件夹
fs.mkdirSync(path.join(distPath, 'subapp'));
// // 4. 移动各个子应用至dist/subapp
subAppDistPaths.forEach(item => {
  const subappName = item.substring(item.lastIndexOf('/', item.lastIndexOf('/') - 1) + 1, item.lastIndexOf('/'));
  fs.moveSync(item, path.join(distPath, `subapp/${subappName}`));
})
