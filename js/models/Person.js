define(function() {

  var Person = function(name) {
    this.name = name;
  };

  Person.prototype.getName = function() {
    return this.name;
  }

  return Person;
});
