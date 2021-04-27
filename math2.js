function Add(numberOne, numberTwo, log) {
    var result = numberOne+numberTwo;
    log(result);
    return result;

}

module.exports = Add;