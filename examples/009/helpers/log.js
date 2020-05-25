require("colors");
const { ERROR, WARNING, SUCCESS } = require("../constants/message-types");

module.exports = function log(message, type) {
	let colorMessage;
	switch (type) {
		case ERROR:
			colorMessage = `[ERROR] ${message}`.brightRed;
			break;
		case WARNING:
			colorMessage = `[WARNING] ${message}`.brightYellow;
			break;
		case SUCCESS:
			colorMessage = `[SUCCESS] ${message}`.brightGreen;
			break;
		default:
			colorMessage = `[INFO] ${message}`;
	}
	console.log(colorMessage);
};
