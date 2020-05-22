const path = require("path");
// helpers
const fetchDataFromJira = require("./helpers/get-jira-data");
const writeJson = require("./helpers/write-json");

const args = process.argv.slice(2);
const [ticket] = args;
console.log("DEBUG: ticket", ticket);

const CONFIG_FILE = "config.json";
const jiraTicket = ticket || "GS-1000";
const jiraData = fetchDataFromJira(jiraTicket);
console.log("DEBUG: jiraData", jiraData);

if (!jiraData) {
	console.log(`jira ticket ${jiraTicket} not found`);
	process.exit();
}

const newConfigFile = path.join(__dirname, "data", CONFIG_FILE);
(async () => {
	try {
		const result = await writeJson(newConfigFile, jiraData);
		console.log("DEBUG: writeJsonToFile -> result", result);
	} catch (error) {
		console.log("DEBUG: writeJsonToFile -> error", error);
	}
})();
