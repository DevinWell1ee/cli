// 文件拉取
var download = require("download-git-repo");

// 可以在终端显示√ 或 × 等的图标
var symbols = require("log-symbols");

// 下载过程久的话，用于下载动画效果
var ora = require("ora");

// 终端文字加颜色
var chalk = require("chalk")

var files = require('./files')

var { askIsOverwrite } = require('./inquirers')

function load(name) {
  const spinner = ora("正在下载模板...");
  spinner.start();

  download(
    "direct:https://github.com/DevinWell1ee/ci-vue-template.git",
    name,
    { clone: true },
    err => {
      if (!err) {
        spinner.succeed();
        console.log(symbols.success, chalk.green("项目初始化完成！！！"));
      } else {
        spinner.fail();
        console.log(symbols.error, chalk.red(`拉取远程仓库失败${err}！！！`));
      }
    }
  )
}

module.exports = {
  downloadTemplate: (name) => {
    if (files.dirExists(name)) {
      console.log(symbols.error, chalk.red("项目已存在！！！"));

      askIsOverwrite(name)
        .then(res => {
          if (res['dirc-overwrite'] === 'n') {
            console.log('已取消替换！！！')
          } else {
            files.delDir(name)

            load(name)
          }
        })
    } else {
      load(name)
    }
  }
};