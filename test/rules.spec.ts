import {expect} from 'chai';
import {set} from 'lodash/fp';
import {RULES} from '../src/rules';
import {ANNOUNCEMENT} from '../src/constants';

describe('Rules', function () {
  describe('rule::firstname::length', function () {
    const rule = RULES[0];
    it('should return true if fisrtName contains at last 2 letters', function () {
      expect(rule.isRespected(set('contacts.fisrtName', 'djamel', ANNOUNCEMENT))).to.be.true;
    });

    it('should return false if fisrtName contains less then 3 letters', function () {
      expect(rule.isRespected(set('contacts.fisrtName', 'dj', ANNOUNCEMENT))).to.be.false;
    });
  });

  describe('rule::lastname::length', function () {
    const rule = RULES[1];
    it('should return true if lastname contains at last 2 letters', function () {
      expect(rule.isRespected(set('contacts.lastName', 'djamel', ANNOUNCEMENT))).to.be.true;
    });

    it('should return false if lastname contains less then 3 letters', function () {
      expect(rule.isRespected(set('contacts.lastName', 'dj', ANNOUNCEMENT))).to.be.false;
    });
  });

  describe('rule::alpha_rate', function () {
    const rule = RULES[2];
    it('should return true if email containns at last 70% of letters and numbers before the @', function () {
      expect(rule.isRespected(set('contacts.email', 'djamel1994-+@gmail.com', ANNOUNCEMENT))).to.be
        .true;
    });

    it('should return false if email containns less the 70% of letters and numbers before the @', function () {
      expect(rule.isRespected(set('contacts.email', 'dj-+*-+@gmail.com', ANNOUNCEMENT))).to.be
        .false;
    });

    it('should not count chars after @', function () {
      expect(rule.isRespected(set('contacts.email', 'djamel1994-+@gm+--*--ail.com', ANNOUNCEMENT)))
        .to.be.true;
    });
  });

  describe('rule::number_rate', function () {
    const rule = RULES[3];
    it('should return true if email containns at last 30% of numbers before the @', function () {
      expect(rule.isRespected(set('contacts.email', 'djamel14@gmail.com', ANNOUNCEMENT))).to.be
        .true;
    });

    it('should return false if email containns less the 30% of numbers before the @', function () {
      expect(rule.isRespected(set('contacts.email', 'dj1233523@gmail.com', ANNOUNCEMENT))).to.be
        .false;
    });

    it('should not count chars after @', function () {
      expect(rule.isRespected(set('contacts.email', 'djamel14@g2155656ail.com', ANNOUNCEMENT))).to
        .be.true;
    });
  });

  describe('rule::price::quotation_rate', function () {
    const rule = RULES[4];
    it('should return true if the price is in the range of 20% of the rating (greater by 20%)', async function () {
      const result = await rule.isRespected(set('price', 36000, ANNOUNCEMENT));
      expect(result).to.be.true;
    });

    it('should return true if the price is in the range of 20% of the rating (less by 20%)', async function () {
      const result = await rule.isRespected(set('price', 34000, ANNOUNCEMENT));
      expect(result).to.be.true;
    });

    it('should return false if the price is in the range of 20% of the rating', async function () {
      const result = await rule.isRespected(set('price', 5000, ANNOUNCEMENT));
      expect(result).to.be.false;
    });
  });

  describe('rule::registernumber::balcklist', function () {
    const rule = RULES[5];
    it('should return true the announcement is black listed', async function () {
      const result = await rule.isRespected(set('vehicle.registerNumber', 'AA123AA', ANNOUNCEMENT));
      expect(result).to.be.false;
    });

    it('should return true the announcement is not black listed', async function () {
      const result = await rule.isRespected(
        set('vehicle.registerNumber', 'Not_Black_Listed_One', ANNOUNCEMENT)
      );
      expect(result).to.be.true;
    });
  });
});
