require("colors");
const config = require("./config");
const nodemailer = require("nodemailer");

const arg = process.argv.slice(2);
const REQUIRED_FIELDS_COUNTE = 2;

if (arg.length < REQUIRED_FIELDS_COUNTE) {
	console.log(
		"Two arguments required: subject and body.".red,
		'E.g. node send-email.js "Where\'s my tea?" "So yeah... where is it?"'.cyan
	);
	process.exit();
}

const [subject, body] = arg;
const { FROM_EMAIL, TO_EMAIL, HOST, PORT } = config;
const { USERNAME, PASSWORD } = config.AUTH;

const transporter = nodemailer.createTransport({
	host: HOST,
	port: PORT,
	secure: false,
	auth: {
		user: USERNAME,
		pass: PASSWORD,
	},
});

const message = {
	from: FROM_EMAIL,
	to: TO_EMAIL,
	subject,
	body,
	html: `<p>${body}</p>`,
};

transporter.sendMail(message, (err, info) => {
	if (err) {
		console.log(`error happened ${err.message}`.red);
		return process.exit();
	}
	return console.log("Message sent: %s", info.messageId);
});
