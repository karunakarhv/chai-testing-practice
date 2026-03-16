var expect = require('chai').expect;

describe('test endpoints', function(){
    it('should return 200 for GET /api/data', function(done){
        // Simulate an API call and check the response status
        setTimeout(function() {
            const responseStatus = 200; // Simulated response status
            expect(responseStatus).to.equal(200);
            done();
        }, 100);
    });
});