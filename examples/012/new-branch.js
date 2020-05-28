require("colors");
const shell = require("shelljs");
const readLineSync = require("readline-sync");
const path = require("path");
const { repository } = require("./config");

const { delivery, baseBranch } = repository;
const deliveryLastSlashIndex = delivery.lastIndexOf("/");
const repoName = delivery.substring(deliveryLastSlashIndex);

const repoPath = path.join(__dirname, repoName);
shell.cd(repoName);
shell.exec(`git checkout ${baseBranch}`);
shell.exec(`git pull origin ${baseBranch}`);

const ticketId = readLineSync.question("what is the ticket ID? ", {
	limit: (input) => input.trim().length > 0,
	limitMessage: "Please enter a ticket ID (e.g. GOT-123)",
});

shell.exec(`git checkout -b ${ticketId}`);
