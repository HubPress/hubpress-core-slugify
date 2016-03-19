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

  it('should keep T-A-G', () => {
    slugify('T-A-G').should.equal('T-A-G');
  });

  it('should remove last caret', () => {
    slugify('Aword-').should.equal('Aword');
  });

  it('should be empty if only caret', () => {
    slugify('-----').should.equal('');
  });

  it('should not add a caret if Uppercase is not follow by a lowewrcase', () => {
    slugify('IoT').should.equal('IoT');
  });
});
