require("colors");
const log = require("./helpers/log");
const { SUCCESS, WARNING, ERROR } = require("./constants/message-types");

log("this is a success message", SUCCESS);
log("this is a warning message", WARNING);
log("this is an error message", ERROR);
log("this is an info message");
