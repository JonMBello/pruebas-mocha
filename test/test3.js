var chai = require('chai');
var should = chai.should();
var sinon = require('sinon');
var isAlive = require('../functions');

describe('IsAlive test', () => {
    it('should return true when ping callback returns true', () => {
        var pinger = sinon.stub();
        pinger.returns(true);
        var websiteIsAlive = isAlive(pinger);
        websiteIsAlive.should.be.true;
    });
    it('should return true when ping returns true three times in a row', () => {
        var pinger = sinon.stub();
        pinger.onFirstCall().returns(true);
        pinger.onSecondCall().returns(true);
        pinger.onThirdCall().returns(true);
        var websitreIsAlive = isAlive(pinger);
        websitreIsAlive.should.be.true;
    });
    it('should return false when ping does not return true three times in a row', () => {
        var pinger = sinon.stub();
        pinger.onFirstCall().returns(true);
        pinger.onSecondCall().returns(false);
        pinger.onThirdCall().returns(true);
        var websitreIsAlive = isAlive(pinger);
        websitreIsAlive.should.be.false;
    });
    it('should return an error when ping throws an error', () => {
        var pinger = sinon.stub();
        pinger.throws(() => new Error());
        var error = isAlive(pinger);
        error.message.should.equal('Ping throw exception');
    });
});