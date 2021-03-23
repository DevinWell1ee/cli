const inquirer = require('inquirer');

module.exports = {
  askIsOverwrite: (name) => {
    const questions = [
      {
        type: 'confrim',
        name: 'dirc-overwrite',
        message: `文件夹${name}已存在是否要替换【y/n】:`,
        validate: function(input) { // 接受用户输入，并且当值合法时，函数返回true。当函数返回false时，一个默认的错误信息会被提供给用户。
          if(!['y', 'n'].includes(input.toLowerCase())){
            return 'Please input y/n !'
          } else {
            return true
          }
        }
      }
    ];

    return inquirer.prompt(questions);
  },
};