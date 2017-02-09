module.exports = {
    fizzBuzz: function(arg) {
        if (arg % 3 === 0) {
            if (arg % 5 === 0) {
                return 'FizzBuzz';
            } else {
                return 'Fizz';
            }
        } else if (arg % 5 === 0) {
            return 'Buzz';
        } else {
            return arg;
        }
    }
}

//signed By Fawaz Bello