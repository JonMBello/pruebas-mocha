var chai = require('chai');
var should = require('chai').should();
var expect = chai.expect;
var assert = chai.assert;
var Add = require('../math');

describe('Addition test', () => {
    it('should return 3 when passed one and two', () => {
        var numberOne = 1;
        var numberTwo = 2;
        var expectedResult = 3;
        var actualResult = Add(numberOne, numberTwo);
        actualResult.should.equal(expectedResult);
        expect(actualResult).to.equal(expectedResult);
        assert.equal(actualResult, expectedResult);
    });
});