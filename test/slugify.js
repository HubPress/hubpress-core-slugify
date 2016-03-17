import chai from 'chai'
import slugify from '../src/slugify'

chai.should();

describe('Slugify', () => {
  it('should not change lowercase', () => {
    slugify('value').should.equal('value');
  });

  it('should add a caret between two camelcase word', () => {
    slugify('JohnDoe').should.equal('John-Doe');
  });

  it('should not add a caret between two uppercase', () => {
    slugify('TAG').should.equal('TAG');
  });

  it('should remove first caret', () => {
    slugify('-Aword').should.equal('Aword');
  });
});
