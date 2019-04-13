const { range } = require('ramda');
const chai = require('chai');
const Reader = require('./reader');

chai.should();

describe('Reader extras.', () => {
  describe('fromFunction', () => {
    it('Turns any function into a reader.', () => {
      Reader.new(range(0)).run(5).length.should.equal(5);
    });
  });
});
