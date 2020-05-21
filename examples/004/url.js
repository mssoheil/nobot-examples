const url = require("url");

const args = process.argv.slice(2);

const [urlEntered] = args;

if (!urlEntered) {
	console.log("please type a url");
	process.exit();
}

const { protocol, slashes, host, query, href } = url.parse(
	"https://www.google.co.uk/search?q=stranger+things"
);

console.log(`protocol is ${protocol}`);
console.log(`slash is ${slashes}`);
console.log(`host is ${host}`);
console.log(`query is ${query}`);
console.log(`href is ${href}`);
