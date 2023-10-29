const hello = () => "Hello World executed at " + new Date().toString();
console.log(hello());
exports.hello = hello;
