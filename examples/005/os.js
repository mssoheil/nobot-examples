const os = require("os");

console.log(`home dir is ${os.homedir}`);
console.log(`host is ${os.hostname}`);
console.log(`platform is ${os.platform()}`);
const cpuCores = os.cpus();
console.log(`cpu count is ${cpuCores.length}`);
console.log(`cpu model is ${cpuCores[0].model}`);
console.log(`total memory is ${os.totalmem}`);
