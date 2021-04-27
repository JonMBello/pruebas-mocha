var chai  = require('chai');
var should = chai.should();
var sinon  =require('sinon');
const Add = require('../math2');

describe('Spy test', () => {
    it('should log result of add', () => {
        var numberOne = 1;
        var numberTwo = 2;
        
        var logSpy = sinon.spy();
        Add(numberOne, numberTwo, logSpy);
        logSpy.called.should.be.true;
    });
    it('should call log with result of add', () => {
        var numberOne = 1;
        var numberTwo = 2;
        
        var logSpy = sinon.spy();
        Add(numberOne, numberTwo, logSpy);
        logSpy.calledWith(3).should.be.true;
    });
});