#!/usr/bin/env node
// 告诉操作系统用node 来运行这个文件

// 交互命令
var cmd = require("commander");

var actions = require('./actions')

cmd
  .command('create <name>')
  .description('init project')
  .action((name) => {
    actions.downloadTemplate(name)
  });



cmd.parse(process.argv);
