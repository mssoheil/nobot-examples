const config = require("./config");
const readLineSync = require("readline-sync");
const Twilio = require("twilio");

const {
	TWILIO_SID,
	TWILIO_AUTH_TOKEN,
	TWILIO_PHONE_NUMBER,
	MY_SPOUSE_NUMBER,
} = config;

const client = new Twilio(TWILIO_SID, TWILIO_AUTH_TOKEN);

const smsMessage = {
	body: `Hi Bub, I'd like spagetti`,
	from: TWILIO_PHONE_NUMBER,
	to: MY_SPOUSE_NUMBER,
};

client.messages
	.create(smsMessage)
	.then(({ sid }) => console.log(`sms sent. id: ${sid}`))
	.catch((err) => console.log(`error happened ${err}`));
