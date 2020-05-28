const fs = require("fs-extra");
const { JSON_WHITESPACE } = require("./constants");
const { reminders } = require("./.reminders");
const readlineSync = require("readline-sync");
const path = require("path");

console.log("DEBUG: reminders", reminders);
const reminderToAdd = readlineSync.question("what reminder want to add? ", {
	limit: (input) => input.trim().length > 0,
	limitMessage: "please type a reminder ",
});
console.log("DEBUG: reminderToAdd", reminderToAdd);

const hasReminderAlready = reminders.indexOf(reminderToAdd) > -1;
console.log("DEBUG: hasReminderAlready", hasReminderAlready);

if (hasReminderAlready) {
	console.log(`the reminder ${reminderToAdd} is already exists`);
	process.exit();
}

reminders.push(reminderToAdd);
const targetPath = path.join(__dirname, ".reminders.json");
console.log("DEBUG: reminders", reminders);
(async () => {
	try {
		await fs.writeFile(
			targetPath,
			JSON.stringify({ reminders }, null, JSON_WHITESPACE)
		);
		const file = await fs.readFile(targetPath, "utf8");
		console.log("DEBUG: file", file);
		console.log("DEBUG: the reminder added".green);
	} catch (error) {
		console.log("DEBUG: error", error);
	}
})();
