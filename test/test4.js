var chai = require('chai');
var should = chai.should();
var sinon = require('sinon');

var API = {
    IsAlive : () => {
        try {
            var pingOneSucces = API.Ping();
            var pingTwoSucces = API.Ping();
            var pingThreeSucces = API.Ping();
        } catch (error) {
            return new Error('Ping throw exception');
        }
    
        if(pingOneSucces && pingTwoSucces && pingThreeSucces) return true;
        return false;
    },
    Ping :  function() { return true }
}

describe('isAlive Tests', () => {
    it('should call ping 3 times', () => {
        var mockApi = sinon.mock(API);
        mockApi.expects('Ping').exactly(3);
        API.IsAlive();
        mockApi.verify();
    });
});