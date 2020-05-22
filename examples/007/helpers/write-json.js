const fs = require("fs-extra");

const writeJson = async (file, content) => {
	try {
		await fs.writeFile(file, JSON.stringify(content, null, 4));
	} catch (error) {
		console.log("DEBUG: writeJson -> error", error);
	}
};

module.exports = writeJson;
