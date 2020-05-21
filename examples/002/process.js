console.log(`process pid is: ${process.pid}`);

process.stdout.write('hello standard output\n');
process.stdout.write(`current working directory is ${process.cwd()}\n`);
process.stdout.write(`this has been running for ${process.uptime()}\n`);
console.log(`this has been running for ${process.uptime()}`);
process.stdout.write('type something and hit enter \n');
process.stdin.setEncoding('utf8');
process.stdin.on('readable', () => {
  const dataChunk = process.stdin.read();
  if (dataChunk) {
    process.stdout.write(`you wrote ${dataChunk}`);
    process.exit();
  }
});

process.on('exit', (code) => {
  console.log(`process exited with code ${code}`);
});

