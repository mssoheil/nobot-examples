const { platform } = require("os");
const { exec } = require("child_process");

const WINDOWS_PLATFORM = "win32";
const osPlatform = platform();

const args = process.argv;
const [url] = args.slice(2);

if (!url) {
	console.log("please enter a url");
	process.exit();
}

let command;

if (osPlatform === WINDOWS_PLATFORM) {
	command = `start chrome ${url} -incognito`;
} else {
	command = `open -a "Google Chrome" ${url}`;
}

console.log(`executing command ${command}`);
exec(command);
