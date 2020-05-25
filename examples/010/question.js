const fs = require('fs-extra');
const readline = require('readline');
const { stdin, stdout } = require('process');
const path = require('path');

const interfaceInstance = readline.createInterface(stdin, stdout);

interfaceInstance.question("what's the name of project? ", onProjectNameInput);

function onProjectNameInput(name) {
	interfaceInstance.close();
	stdin.destroy();
	createProjectDirectory(name);
}

async function createProjectDirectory(enteredName) {
	const name = enteredName.trim();
	if (!name) {
		console.log("please type a name");
		process.exit();
	}

	const projectPath = path.join(__dirname, name);
	const exists = await fs.exists(projectPath);
	if (exists) {
		console.log(`path ${projectPath} is already exists`);
		process.exit();
	}
	console.log(`creating a new project name ${name}`);
	fs.mkdir(projectPath);
}


/*
	const fs = require('fs-extra');
const readline = require('readline');
const { stdin, stdout } = require('process');
const path = require('path');


const interfaceInstance = readline.createInterface(stdin, stdout);

function ask(questionText) {
	return new Promise((resolve, reject) => {
		interfaceInstance.question(questionText, input => resolve(input));
	});
  }
(async () => {
	const directory = await ask("what's the name of project? ");
	await onProjectNameInput(directory);
	const file = await ask("what is the file? ");
	await onInputFile(file, directory);
})();

function onProjectNameInput(name) {
	createProjectDirectory(name);
}

function onInputFile(name, directory) {
	interfaceInstance.close();
	stdin.destroy();
	createProjectFile(name, directory);
}

async function createProjectDirectory(enteredName) {
	const name = enteredName.trim();
	if (!name) {
		console.log("please type a name");
		process.exit();
	}

	const projectPath = path.join(__dirname, name);
	const exists = await fs.exists(projectPath);
	if (exists) {
		console.log(`path ${projectPath} is already exists`);
		process.exit();
	}
	console.log(`creating a new project name ${name}`);
	fs.mkdir(projectPath);
}

async function createProjectFile(enteredName, directory) {
	const name = enteredName.trim();
	if (!name) {
		console.log("please type the project file");
		process.exit();
	}
	const filePath = path.join(__dirname, directory, name);
	const exists = await fs.exists(filePath);
	if (exists) {
		console.log(`file path ${filePath} is already exists`);
		process.exit();
	}

	fs.mkdir(filePath);
}

*/
