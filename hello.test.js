const hello = require("./hello");
describe("Text format", () => {
  test("Format like", () => {
    // Format: 'Hello World executed at DayOfWeek Mon dd YYYY hh24:mm:sec GMT+0000 (Coordinated Universal Time)'
    var expectedPattern = /Hello World executed at [a-zA-Z]{3} [a-zA-Z]{3} \d{1,2} \d{4} \d{2}\:\d{2}:\d{2} GMT\+\d{4} \([a-zA-Z\s]+\)/;
    expect(hello.hello()).toMatch(expectedPattern);
  });
});
