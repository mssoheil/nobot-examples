require("colors");
const fs = require("fs-extra");
const path = require("path");
const readLineSync = require("readline-sync");
const { JSON_WHITESPACE, NO_CHOICE_MADE } = require("./constants");

const { reminders } = require("./.reminders.json");

if (!reminders.length) {
	console.log("no reminders".brightGreen);
	process.exit();
}

const index = readLineSync.question("what reminder is done? ");

if (index === -1) {
	process.exit();
}

console.log(`you removed ${reminders[index]}`.red);
reminders.splice(index, 1);

const sourcePath = path.join(__dirname, ".reminders.json");
(async () => {
	const result = await fs.writeFile(
		sourcePath,
		JSON.stringify({ reminders }, null, JSON_WHITESPACE)
	);
	console.log("DEBUG: result", result);
})();
