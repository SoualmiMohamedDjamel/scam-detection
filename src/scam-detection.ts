import {map, compact} from 'lodash/fp';
import {ScamDetectionResult, Rule, Announcement, RulesNames} from './types';
import {RULES} from './rules';
import {ANNOUNCEMENT} from './constants';

export const checkScam = async (announcement: Announcement): Promise<ScamDetectionResult> => {
  const checks = await Promise.all(map((rule: Rule) => rule.isRespected(announcement))(RULES));

  const rules: RulesNames | [] = [];
  // eslint-disable-next-line lodash-fp/no-unused-result
  compact(
    checks.map((check: boolean, index: number): void => {
      check ? null : rules.push(RULES[index].name);
    })
  );

  return {
    referaece: announcement.reference,
    scam: rules.length > 0,
    rules
  };
};
if (require.main === module) {
  (async () => {
    try {
      const result = await checkScam(ANNOUNCEMENT);
      // eslint-disable-next-line no-console
      console.log(result);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
    }
  })();
}
