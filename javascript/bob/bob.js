var Bob = function() {
  this.hey = function(phrase){

    // regexes
    var emptyRegex = /\w+/,
        uppercaseRegex = /[A-Z]+/,
        questionRegex = /\?$/;


    // First check if it's empty, or is just whitespace
    if (!emptyRegex.test(phrase)) {
      return 'Fine. Be that way!';

    // Does it have lower case letters?
    // If not, the .toUpperCase() return value will match the entire phrase.
    // Then check that we have at least one uppercase letter.
    } else if (phrase.toUpperCase() === phrase && uppercaseRegex.test(phrase)) {
      return 'Woah, chill out!';

    // Does it end with a question mark?
    } else if (questionRegex.test(phrase)) {
      return 'Sure.';

    // Whatever ;D
    } else {
      return 'Whatever.';
    }
  };
};

module.exports = Bob;
