var expect = require('chai').expect;

describe('test-1', function(){
    it('should return true', function(){
        expect(true).to.be.a('boolean').and.to.be.true;
    });

    it('should return false', function(){
        expect(false).to.be.a('boolean').and.to.be.false;
    });

    it('should return 1', function(){
        expect(1).to.be.a('number').and.to.equal(1);
        expect(10).have.been.a('number').and.to.be.above(5).and.to.be.below(15);
    });

    it('should return "hello"', function(){
        expect("hello").to.be.a('string').and.to.equal("hello");
    });

    it('should return an array', function(){
        expect([1, 2, 3]).to.be.an('array').that.includes(2).and.to.have.lengthOf(3);
    });

    it('should return an object', function(){
        expect({ name: 'Alice', age: 30 }).to.be.an('object').that.has.property('name').that.equals('Alice');
    });
});