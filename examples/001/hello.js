// const fse = require('fs-extra');

// fse.readFile('./examples/001/text.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.log(err);
//   }

//   console.log(data);
// });

const args = process.argv.slice(2);
console.log('DEBUG: args', args);
const [name] = args;
if (!name) {
  console.log('Please pass a name, e.g. node hello.js Shaun');
  process.exit();
}
console.log(`hello ${name}`);

