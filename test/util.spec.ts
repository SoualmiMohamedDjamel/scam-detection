import {expect} from 'chai';
import {
  isLetter,
  calculateProprtion,
  isProprtionOfCharsNumberRespected,
  isProprtionOfNumberRespected,
  isInTheRange
} from '../src/util';

describe('Util', function () {
  describe('isLetter', function () {
    it('Should return true if the param it a letter', function () {
      expect(isLetter('l')).to.be.true;
    });

    it('Should return false if the param it a number', function () {
      expect(isLetter('5')).to.be.false;
    });

    it('Should return false if the param it a special char', function () {
      expect(isLetter('!')).to.be.false;
    });
  });

  describe('calculateProprtion', function () {
    it('Should calculate the right proprtion', function () {
      expect(calculateProprtion(5, 10)).to.be.equal(50);
    });
  });

  describe('isProprtionOfCharsNumberRespected', function () {
    it('Should return true if letters and numbers count are more then 60%', function () {
      expect(isProprtionOfCharsNumberRespected('djamel14*-', 60)).to.be.true;
    });

    it('Should return true if letters and numbers count are less then 60%', function () {
      expect(isProprtionOfCharsNumberRespected('dj*-+14*-', 60)).to.be.false;
    });
  });

  describe('isProprtionOfNumberRespected', function () {
    it('Should return true if numbers count are more then 50%', function () {
      expect(isProprtionOfNumberRespected('djamel14', 50)).to.be.true;
    });

    it('Should return true if numbers count are less then 50%', function () {
      expect(isProprtionOfNumberRespected('dj-1994-14', 50)).to.be.false;
    });
  });

  describe('isInTheRange', function () {
    it('Should return true if price is in the range', function () {
      expect(isInTheRange(1500, 1800, 20)).to.be.true;
    });

    it('Should return false if price is not in the range', function () {
      expect(isInTheRange(1000, 1800, 20)).to.be.false;
    });
  });
});
