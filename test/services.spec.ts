import {expect} from 'chai';
import {ANNOUNCEMENT} from '../src/constants';
import {getRating, isNotBlacklisted} from '../src/services';

describe('Services', function () {
  it('should return 35000', async function () {
    const result = await getRating(ANNOUNCEMENT.vehicle);
    expect(result).to.be.equal(35000);
  });

  it('should return false the announcement is black listed', async function () {
    const result = await isNotBlacklisted('AA123AA');
    expect(result).to.be.false;
  });

  it('should return true the announcement is not black listed', async function () {
    const result = await isNotBlacklisted('not_balck_listed');
    expect(result).to.be.true;
  });
});
