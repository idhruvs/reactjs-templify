const path = require('path');

const { fileExists, writeToPath } = require('./file.utils');
const templates = require('../templates');

function convertToSentenceCase(text) {
  const rg = /\b\w/g;
  return text.replace(rg, (toReplace) => toReplace.toUpperCase());
}

function createFiles(name) {
  const _name = convertToSentenceCase(name);
  const currentWorkingDirectory = process.cwd();

  const pathName = path.join(currentWorkingDirectory, '/src/components');

  const componentPath = path.join(pathName, _name);

  const files = {
    component: `${_name}.jsx`,
    test: `${_name}.test.js`,
    style: `${_name}.css`,
    storybook: `${_name}.stories.jsx`,
  };

  if (_name !== 'components') {
    const writeFile = writeToPath(pathName);
    const toFileMissingBool = (file) => !fileExists(componentPath)(file);
    const checkAllMissing = (acc, cur) => acc && cur;

    const noneExist = Object.values(files).map(toFileMissingBool).reduce(checkAllMissing);

    if (noneExist) {
      Object.entries(files).forEach(([type, fileName]) => {
        writeFile(fileName, templates[type](_name));
      });
      console.log(🚀 Happy Hacking ! 🚀');
    } else {
      console.log(`⚠️Component with name ${_name} already exists!`);
    }
  }
}

module.exports = createFiles;
