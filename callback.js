function doAsynch(callback) {
  setTimeout(() => {
    console.log("completely executed");
    callback();
  }, 5000);
}

function callbackFunction() {
  console.log("Task called by callback");
}
doAsynch(callbackFunction);

console.log("Hello its callback");
//this all done by callback function using settimeout async operation
