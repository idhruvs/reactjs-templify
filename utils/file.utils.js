const fs = require('fs');

const fileExists = (path) => (file) => fs.existsSync(`${path}/${file}`);

const writeToPath = (path) => (file, content) => {
  const componentName = file.split('.')[0];

  fs.mkdir(`${path}/${componentName}`, { recursive: true }, (err) => {
    if (err) throw err;

    const filePath = `${path}/${componentName}/${file}`;

    fs.writeFile(filePath, content, { recursive: true }, (err) => {
      if (err) throw err;
      console.log('✓ Created file: ', filePath);
      return true;
    });
  });
};

module.exports = {
  fileExists,
  writeToPath,
};
