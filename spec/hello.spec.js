const hello = require('../hello.js');

describe("hello world test", function() {
  it("should return custom message when name is specified", function() {
    expect(hello('Jasmine')).toEqual('Hello, Jasmine!');
  });

  it("should return a general greeting when a name is not specified", function() {
    expect(hello()).toEqual("Hello, World!");
  })
});