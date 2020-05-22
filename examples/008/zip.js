const archiver = require("archiver");
const fs = require("fs-extra");
const path = require("path");

const ZLIB_BEST_COMPRESSION = 9;
const outputZipPath = path.join(__dirname, "files2.zip");
const textPath = path.join(__dirname, "copy.txt");
const imgPath = path.join(__dirname, "logo.jpg");
(async () => {
	try {
		const outputFile = await fs.createWriteStream(outputZipPath);
		const archive = await archiver("zip", {
			zlib: {
				level: ZLIB_BEST_COMPRESSION,
			},
		});
		outputFile.on("close", () => {
			console.log(`total bytes: ${archive.pointer()}`);
			console.log("archiving finished");
		});

		archive.on("warning", (warning) => {
			console.log("DEBUG: warning", warning);
		});

		archive.on("error", (error) => {
			throw error;
		});

		archive.pipe(outputFile);

		// archive.file(textPath, { name: "content.txt" });
		// archive.file(imgPath, { name: "nobot.png" });
		// archive.file(imgPath, { name: "nobot.jpg" });
		archive.append(fs.createReadStream(textPath), { name: "content.txt" });
		archive.append(fs.createReadStream(imgPath), { name: "nobot.png" });
		archive.append(fs.createReadStream(imgPath), { name: "nobot.jpg" });

		archive.finalize();
	} catch (error) {
		console.log("DEBUG: error", error);
	}
})();
