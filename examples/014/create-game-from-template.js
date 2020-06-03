require("colors");
const readLineSync = require("readline-sync");
const path = require("path");
const fse = require("fs-extra");

const GAME_TEMPLATES = "game-templates";
const NO_CHOICE_MADE = -1;

const templateDir = path.join(__dirname, GAME_TEMPLATES);
const templates = fse.readdirSync(templateDir);

const index = readLineSync.keyInSelect(templates);

if (index === NO_CHOICE_MADE) {
	process.exit();
}

const projectName = readLineSync.question("what is the new project name? ", {
	limit: (input) => input.length > 0,
	limitMessage: "please enter a name for project",
});

const confirmProjectName = readLineSync.keyInYN(
	`you entered ${projectName}, create a project with this name? `
);

if (confirmProjectName) {
	const templatePath = path.join(templateDir, templates[index]);
	const destinationPath = path.join(__dirname, projectName);
	fse
		.copy(templatePath, destinationPath)
		.then(() =>
			console.log(`the path ${destinationPath} created successfully`.green)
		)
		.catch((error) => console.log(error));
} else {
	console.log("abborted creating a new game");
}
