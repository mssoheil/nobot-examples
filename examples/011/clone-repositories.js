require('colors');
const path = require('path');
const shell = require('shelljs');
const { repositories } = require('./config');

const repositoriesDirectory = path.join(__dirname, "my-repositories");

cloningRepositories(repositoriesDirectory, repositories);

function cloningRepositories(cloningpath, repositorieslist = []) {
	const repositoriesCount = repositorieslist.length;
	if (!repositorieslist || !repositorieslist.length) {
		console.log("invalid repositories list");
		process.exit();
	}

	console.log(`cloning repositories to ${repositoriesDirectory}`.blue);
	shell.cd(cloningpath);

	repositorieslist.forEach((item, index) => {
		console.log(`cloning ${index + 1} of ${repositoriesCount}`.cyan);
		shell.exec(`git clone ${item} --progress -b master`);
	});
	console.log("completed cloning repositories".brightGreen);
}
