var Bob = function() {
  this.hey = function(phrase){

    // First check if it's empty, or is just whitespace
    if (!/\w+/.exec(phrase)) {
      return 'Fine. Be that way!';

    // Does it have lower case letters?
    // If not, the first regex's return value will match the entire phrase.
    // Then check that we have at least one uppercase letter.
    } else if (/[^a-zöäü]+/.exec(phrase)[0] === phrase && /[A-Z]+/.exec(phrase)) {
      return 'Woah, chill out!';

    // Does it end with a question mark?
    } else if (phrase.slice(-1)[0] === '?') {
      return 'Sure.';

    // Whatever ;D
    } else {
      return 'Whatever.';   
    }
  };
};

module.exports = Bob;