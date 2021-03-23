const fs = require('fs')
const path = require('path')

function del(path) {
  if (fs.existsSync(path)) {
    fs.readdirSync(path).forEach(function(file, index){
      var curPath = path + "/" + file;

      if (fs.lstatSync(curPath).isDirectory()) {
        // recurse
        del(curPath);
      } else { // delete file
        fs.unlinkSync(curPath);
      }
    });

    fs.rmdirSync(path);
  }
}

module.exports = {
  /**
   * 获取当前目录
   */
  getCurrentDirBase: () => {
    return path.basename(process.cwd())
  },

  /**
   * 检查目录是否存在
   */
  dirExists: (filePath) => {
    return fs.existsSync(filePath)
  },

  delDir: (path) => del(path)
}
