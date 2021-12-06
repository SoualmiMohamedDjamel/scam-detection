import {expect} from 'chai';
import {ANNOUNCEMENT_WITH_SECCESS, ANNOUNCEMENT_WITH_ERRORS} from '../src/constants';
import {checkScam} from '../src/scam-detection';

describe('Scam Detection', function () {
  it('should apply all rules with success', async function () {
    const result = await checkScam(ANNOUNCEMENT_WITH_SECCESS);
    expect(result).to.be.deep.equal({referaece: 'B300053623', rules: [], scam: false});
  });

  it('should field to apply all rules', async function () {
    const result = await checkScam(ANNOUNCEMENT_WITH_ERRORS);
    expect(result).to.be.deep.equal({
      referaece: 'with_error',
      rules: [
        'rule::firstname::length',
        'rule::lastname::length',
        'rule::alpha_rate',
        'rule::number_rate',
        'rule::price::quotation_rate',
        'rule::registernumber::balcklist'
      ],
      scam: true
    });
  });
});
